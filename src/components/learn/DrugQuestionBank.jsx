"use client";

import { useMemo, useState } from "react";
import { drugQuestions, questionCategories } from "@/data/drugQuestions";

function displayName(name) {
  return name.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default function DrugQuestionBank() {
  const [category, setCategory] = useState("All categories");
  const [index, setIndex] = useState(0);
  const [selection, setSelection] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);

  const questions = useMemo(
    () => category === "All categories" ? drugQuestions : drugQuestions.filter((question) => question.category === category),
    [category],
  );
  const question = questions[index];
  const complete = index >= questions.length;

  function chooseCategory(nextCategory) {
    setCategory(nextCategory);
    setIndex(0);
    setSelection(null);
    setRevealed(false);
    setScore(0);
    setAnswered(0);
  }

  function checkAnswer() {
    if (selection === null || revealed) return;
    setRevealed(true);
    setAnswered((value) => value + 1);
    if (selection === question.answer) setScore((value) => value + 1);
  }

  function nextQuestion() {
    setIndex((value) => value + 1);
    setSelection(null);
    setRevealed(false);
  }

  function reset() {
    setIndex(0);
    setSelection(null);
    setRevealed(false);
    setScore(0);
    setAnswered(0);
  }

  return (
    <section className="drug-questions" aria-labelledby="drug-questions-title">
      <header className="drug-questions__header">
        <div>
          <p className="nas-section-label">Practice questions</p>
          <h2 id="drug-questions-title">Recall the card. Apply the knowledge.</h2>
        </div>
        <p>Practice the same knowledge domains used in drug-card study: class, indication, mechanism, safety, monitoring, and counseling.</p>
      </header>

      <div className="drug-questions__categories" aria-label="Question category">
        {questionCategories.map((item) => (
          <button type="button" className={category === item ? "is-active" : ""} onClick={() => chooseCategory(item)} key={item}>{item}</button>
        ))}
      </div>

      {complete ? (
        <div className="drug-questions__complete" aria-live="polite">
          <span>Set complete</span>
          <strong>{score} / {questions.length}</strong>
          <h3>{score === questions.length ? "Every connection held." : "Review the cards, then run it again."}</h3>
          <button type="button" onClick={reset}>Restart this set</button>
        </div>
      ) : (
        <article className="drug-question">
          <div className="drug-question__meta">
            <span>{String(index + 1).padStart(2, "0")} / {String(questions.length).padStart(2, "0")}</span>
            <div><strong>{displayName(question.drug)}</strong><i>{question.topic}</i></div>
            <span>Score {score}</span>
          </div>

          <h3>{question.prompt}</h3>
          <div className="drug-question__choices" role="radiogroup" aria-label="Answer choices">
            {question.choices.map((choice, choiceIndex) => {
              const isSelected = selection === choiceIndex;
              const isCorrect = revealed && choiceIndex === question.answer;
              const isIncorrect = revealed && isSelected && choiceIndex !== question.answer;
              return (
                <button
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  className={`${isSelected ? "is-selected" : ""} ${isCorrect ? "is-correct" : ""} ${isIncorrect ? "is-incorrect" : ""}`}
                  onClick={() => !revealed && setSelection(choiceIndex)}
                  key={choice}
                >
                  <span>{String.fromCharCode(65 + choiceIndex)}</span>
                  <strong>{choice}</strong>
                  {isCorrect && <i>Correct</i>}
                  {isIncorrect && <i>Review</i>}
                </button>
              );
            })}
          </div>

          {revealed && (
            <div className="drug-question__rationale" aria-live="polite">
              <span>{selection === question.answer ? "Correct" : "Not quite"}</span>
              <p>{question.rationale}</p>
            </div>
          )}

          <footer className="drug-question__actions">
            <span>{answered} answered</span>
            {!revealed ? (
              <button type="button" disabled={selection === null} onClick={checkAnswer}>Check answer</button>
            ) : (
              <button type="button" onClick={nextQuestion}>{answered === questions.length ? "View results" : "Next question"}</button>
            )}
          </footer>
        </article>
      )}

      <p className="drug-questions__note">Questions are original NaS study material based on current official labeling. They are educational and do not replace patient specific clinical judgment.</p>
    </section>
  );
}
