"use client";

import { useMemo, useState } from "react";

function shuffle(values) {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

function prepareQuestion(question) {
  const choices = shuffle(question.choices.map((choice, index) => ({ choice, correct: index === question.answer })));
  return {
    ...question,
    choices: choices.map((item) => item.choice),
    answer: choices.findIndex((item) => item.correct),
  };
}

function questionGroup(question) {
  return question.conceptGroup || String(question.id || question.question).replace(/-(principle|application|failure|safety|case)$/, "");
}

function sampleDistinctConcepts(questions, count) {
  const selected = [];
  const groups = new Set();
  const shuffled = shuffle(questions);

  for (const question of shuffled) {
    const group = questionGroup(question);
    if (groups.has(group)) continue;
    selected.push(question);
    groups.add(group);
    if (selected.length === count) return selected;
  }

  for (const question of shuffled) {
    if (selected.includes(question)) continue;
    selected.push(question);
    if (selected.length === count) break;
  }

  return selected;
}

function createAttempt(questions, questionCount, previousIds) {
  const count = Math.min(questionCount, questions.length);
  let selected = sampleDistinctConcepts(questions, count);
  const selectionKey = selected.map((question) => question.id).sort().join("|");
  if (questions.length > count && selectionKey === previousIds) {
    const remainingGroups = new Set(selected.slice(1).map(questionGroup));
    const replacement = shuffle(questions.filter((question) => !selected.includes(question) && !remainingGroups.has(questionGroup(question))))[0];
    selected = replacement ? [...selected.slice(1), replacement] : sampleDistinctConcepts(questions, count);
  }
  return shuffle(selected.map(prepareQuestion));
}

export default function PharmacyAssessment({ questions, compact = false, moduleId = "pharmacy-review", questionCount, randomize = false }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [attempt, setAttempt] = useState(randomize ? [] : questions);
  const [previousIds, setPreviousIds] = useState("");
  const [attemptNumber, setAttemptNumber] = useState(0);

  const displayQuestions = useMemo(() => attempt, [attempt]);

  const answered = Object.keys(answers).length;
  const score = useMemo(() => displayQuestions.reduce((total, question) => total + (answers[question.id] === question.answer ? 1 : 0), 0), [answers, displayQuestions]);

  function beginAttempt() {
    const nextAttempt = createAttempt(questions, questionCount || questions.length, previousIds);
    setAttempt(nextAttempt);
    setPreviousIds(nextAttempt.map((question) => question.id).sort().join("|"));
    setAnswers({});
    setSubmitted(false);
    setAttemptNumber((current) => current + 1);
  }

  function submitAttempt() {
    setSubmitted(true);
    if (typeof window === "undefined") return;
    const key = `nas-learn:${moduleId}:assessment`;
    let existing = {};
    try {
      existing = JSON.parse(window.localStorage.getItem(key) || "{}");
    } catch {
      existing = {};
    }
    const history = Array.isArray(existing.history) ? existing.history : [];
    const result = {
      attempt: attemptNumber,
      score,
      total: displayQuestions.length,
      completedAt: new Date().toISOString(),
    };
    window.localStorage.setItem(key, JSON.stringify({
      bestScore: Math.max(existing.bestScore || 0, score),
      attempts: (existing.attempts || 0) + 1,
      latest: result,
      history: [...history.slice(-9), result],
    }));
  }

  if (randomize && displayQuestions.length === 0) {
    return (
      <div className={`pharmacy-assessment pharmacy-assessment--launch ${compact ? "pharmacy-assessment--compact" : ""}`}>
        <span>{questions.length} questions in this module bank</span>
        <strong>{Math.min(questionCount || questions.length, questions.length)} questions per attempt</strong>
        <p>Each attempt draws a fresh set and rearranges the answer choices.</p>
        <button type="button" onClick={beginAttempt}>Begin module test</button>
      </div>
    );
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
                  <label className={submitted && choiceIndex === question.answer ? "is-answer" : submitted && choiceIndex === selected ? "is-incorrect" : ""} key={`${question.id}-${choiceIndex}`}>
                    <input type="radio" name={question.id} checked={selected === choiceIndex} disabled={submitted} onChange={() => setAnswers((current) => ({ ...current, [question.id]: choiceIndex }))} />
                    <span>{String.fromCharCode(65 + choiceIndex)}</span>
                    <strong>{choice}</strong>
                  </label>
                ))}
              </div>
              {submitted && <div className={`pharmacy-question__feedback ${isCorrect ? "is-correct" : ""}`}><strong>{isCorrect ? "Correct" : "Review this concept"}</strong><p>{question.explanation || question.rationale}</p>{question.reviewHref && <a href={question.reviewHref}>Review the lesson section</a>}</div>}
            </fieldset>
          );
        })}
      </div>

      <div className="pharmacy-assessment__actions">
        {!submitted ? <button type="button" disabled={answered !== displayQuestions.length} onClick={submitAttempt}>Submit answers</button> : <button type="button" onClick={randomize ? beginAttempt : () => { setAnswers({}); setSubmitted(false); }}>Start another attempt</button>}
        <span>{answered !== displayQuestions.length && !submitted ? "Answer every question to submit." : submitted ? `${Math.round((score / displayQuestions.length) * 100)}% complete` : "Ready to score."}</span>
      </div>
    </div>
  );
}
