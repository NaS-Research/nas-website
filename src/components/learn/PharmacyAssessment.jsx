"use client";

import { useMemo, useState } from "react";

export default function PharmacyAssessment({ questions, compact = false }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const displayQuestions = useMemo(() => questions.map((question, index) => {
    const shift = ((index * 3) + 1) % question.choices.length;
    return {
      ...question,
      choices: [...question.choices.slice(shift), ...question.choices.slice(0, shift)],
      answer: (question.answer - shift + question.choices.length) % question.choices.length,
    };
  }), [questions]);

  const answered = Object.keys(answers).length;
  const score = useMemo(() => displayQuestions.reduce((total, question) => total + (answers[question.id] === question.answer ? 1 : 0), 0), [answers, displayQuestions]);

  function reset() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <div className={`pharmacy-assessment ${compact ? "pharmacy-assessment--compact" : ""}`}>
      <div className="pharmacy-assessment__status">
        <span>{answered} of {displayQuestions.length} answered</span>
        {submitted && <strong>{score} / {displayQuestions.length}</strong>}
      </div>

      <div className="pharmacy-assessment__questions">
        {displayQuestions.map((question, index) => {
          const selected = answers[question.id];
          const isCorrect = selected === question.answer;
          return (
            <fieldset className="pharmacy-question" key={question.id}>
              <legend><span>{String(index + 1).padStart(2, "0")}</span>{question.question}</legend>
              {question.case && <p className="pharmacy-question__case">{question.case}</p>}
              <div className="pharmacy-question__choices">
                {question.choices.map((choice, choiceIndex) => (
                  <label className={submitted && choiceIndex === question.answer ? "is-answer" : submitted && choiceIndex === selected ? "is-incorrect" : ""} key={choice}>
                    <input type="radio" name={question.id} checked={selected === choiceIndex} disabled={submitted} onChange={() => setAnswers((current) => ({ ...current, [question.id]: choiceIndex }))} />
                    <span>{String.fromCharCode(65 + choiceIndex)}</span>
                    <strong>{choice}</strong>
                  </label>
                ))}
              </div>
              {submitted && <div className={`pharmacy-question__feedback ${isCorrect ? "is-correct" : ""}`}><strong>{isCorrect ? "Correct" : "Review this concept"}</strong><p>{question.rationale}</p></div>}
            </fieldset>
          );
        })}
      </div>

      <div className="pharmacy-assessment__actions">
        {!submitted ? <button type="button" disabled={answered !== displayQuestions.length} onClick={() => setSubmitted(true)}>Submit answers</button> : <button type="button" onClick={reset}>Try again</button>}
        <span>{answered !== displayQuestions.length && !submitted ? "Answer every question to submit." : submitted ? `${Math.round((score / displayQuestions.length) * 100)}% complete` : "Ready to score."}</span>
      </div>
    </div>
  );
}
