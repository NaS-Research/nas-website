"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { useMember } from "@/components/member/MemberProvider";
import { snapshotPractice, restorePractice } from "@/lib/member/practice.mjs";

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
  return question.conceptGroup || question.concept || String(question.id || question.question || question.prompt).replace(/-(principle|application|failure|safety|case)$/, "");
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
  const previous = new Set(previousIds ? previousIds.split("|") : []);
  const freshQuestions = questions.filter((question) => !previous.has(question.id));
  const pool = freshQuestions.length >= count ? freshQuestions : questions;
  let selected = sampleDistinctConcepts(pool, count);
  const selectionKey = selected.map((question) => question.id).sort().join("|");
  if (pool.length > count && selectionKey === previousIds) {
    const remainingGroups = new Set(selected.slice(1).map(questionGroup));
    const replacement = shuffle(pool.filter((question) => !selected.includes(question) && !remainingGroups.has(questionGroup(question))))[0];
    selected = replacement ? [...selected.slice(1), replacement] : sampleDistinctConcepts(pool, count);
  }
  return shuffle(selected.map(prepareQuestion));
}

export default function PharmacyAssessment({ questions, compact = false, moduleId = "pharmacy-review", questionCount, randomize = false }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [attempt, setAttempt] = useState(randomize ? [] : questions);
  const [previousIds, setPreviousIds] = useState("");
  const [attemptNumber, setAttemptNumber] = useState(0);

  const member = useMember();
  const restored = useRef('');
  const busy = member?.status === 'loading';
  useEffect(() => {
    if (member?.status !== 'ready') return;
    const key = `${member.pathname}:${moduleId}`;
    if (restored.current === key) return;
    restored.current = key;
    const stored = member.items.find(r => r.path === member.pathname)?.practices?.[moduleId];
    const resumed = restorePractice(questions, stored);
    if (resumed) {
      setAttempt(resumed.attempt); setAnswers(resumed.answers); setSubmitted(resumed.submitted);
      setAttemptNumber(resumed.attemptNumber); setPreviousIds(resumed.previousIds);
    }
  }, [member?.status, member?.pathname, moduleId, questions]);
  function persist(nextAttempt, nextAnswers, done, number, ids) {
    if (member?.status === 'ready') member.save(member.pathname, 'practice', { id: moduleId, state: snapshotPractice(questions, nextAttempt, nextAnswers, done, number, ids) });
  }

  const displayQuestions = useMemo(() => attempt, [attempt]);

  const answered = Object.keys(answers).length;

  function beginAttempt() {
    const nextAttempt = createAttempt(questions, questionCount || questions.length, previousIds);
    setAttempt(nextAttempt);
    setPreviousIds(nextAttempt.map((question) => question.id).sort().join("|"));
    setAnswers({});
    setSubmitted(false);
    setAttemptNumber((current) => current + 1);
    persist(nextAttempt, {}, false, attemptNumber + 1, nextAttempt.map(q => q.id).sort().join("|"));
  }

  function submitAttempt() {
    setSubmitted(true);
    persist(attempt, answers, true, attemptNumber, previousIds);
  }

  if (randomize && displayQuestions.length === 0) {
    return (
      <div className={`pharmacy-assessment pharmacy-assessment--launch ${compact ? "pharmacy-assessment--compact" : ""}`}>
        <span>{questions.length} questions in this module bank</span>
        <strong>{Math.min(questionCount || questions.length, questions.length)} questions per attempt</strong>
        <p>Each attempt draws a fresh set and rearranges the answer choices.</p>
        <button type="button" disabled={busy} onClick={beginAttempt}>Begin practice</button>
      </div>
    );
  }

  return (
    <div className={`pharmacy-assessment ${compact ? "pharmacy-assessment--compact" : ""}`}>
      <div className="pharmacy-assessment__status">
        <span>{answered} of {displayQuestions.length} answered</span>
        {submitted && <strong>Feedback ready · No formal grade</strong>}
      </div>

      <div className="pharmacy-assessment__questions">
        {displayQuestions.map((question, index) => {
          const selected = answers[question.id];
          const isCorrect = selected === question.answer;
          return (
            <fieldset className="pharmacy-question" key={question.id}>
              <legend><span>{String(index + 1).padStart(2, "0")}</span>{question.question || question.prompt}</legend>
              {question.case && <p className="pharmacy-question__case">{question.case}</p>}
              <div className="pharmacy-question__choices">
                {question.choices.map((choice, choiceIndex) => (
                  <label className={submitted && choiceIndex === question.answer ? "is-answer" : submitted && choiceIndex === selected ? "is-incorrect" : ""} key={`${question.id}-${choiceIndex}`}>
                    <input type="radio" name={question.id} checked={selected === choiceIndex} disabled={submitted || busy} onChange={() => { const next = { ...answers, [question.id]: choiceIndex }; setAnswers(next); persist(attempt, next, false, attemptNumber, previousIds); }} />
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

      <p role="status">{member?.status === "ready" ? member.message : busy ? "Checking for saved practice…" : member?.status === "error" ? "Account storage is unavailable. This practice has not been saved." : "Sign in to keep your practice across devices."}</p>
      {member?.saveError && <button disabled={member.saving} onClick={() => persist(attempt, answers, submitted, attemptNumber, previousIds)}>Retry saving practice</button>}
      <div className="pharmacy-assessment__actions">
        {!submitted ? <button type="button" disabled={busy || answered !== displayQuestions.length} onClick={submitAttempt}>Review answers</button> : <button type="button" onClick={randomize ? beginAttempt : () => { setAnswers({}); setSubmitted(false); persist(attempt, {}, false, attemptNumber + 1, previousIds); }}>Start another attempt</button>}
        <span>{answered !== displayQuestions.length && !submitted ? "Answer every question to submit." : submitted ? "Review the explanations below each question." : "Ready for feedback."}</span>
      </div>
    </div>
  );
}
