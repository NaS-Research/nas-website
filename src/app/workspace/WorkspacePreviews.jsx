"use client";
import { useState } from "react";
import WorkspaceHeart from "./WorkspaceHeart";
import Link from "next/link";
export function AnatomyPreview() {
  return <div className="workspace-anatomy workspace-preview">
    <div className="workspace-preview-top"><span>Human heart</span><span>Visual Atlas</span></div>
    <WorkspaceHeart />
    <div className="workspace-preview-bottom"><Link href="/learn/pharmacy/atlas">Explore the interactive atlas ↗</Link><a href="/learn/models/README.md">neshallads · CC BY 4.0</a></div>
  </div>;
}
const mechanismNotes = ["Begin with the medicine. This example follows albuterol’s action in airway smooth muscle.", "Albuterol activates beta₂-adrenergic receptors, stimulating adenyl cyclase.", "The resulting rise in cyclic AMP carries the signal within the cell.", "Increased cyclic AMP is associated with relaxation of bronchial smooth muscle."];
export function MechanismPreview({ steps, source }) {
  const [step, setStep] = useState(0);
  return <div className="workspace-mechanism workspace-preview"><div className="workspace-preview-top"><span>Albuterol</span><span>Mechanism study</span></div>
    <div className="workspace-mechanism-stage" aria-live="polite"><span className="workspace-step-number">0{step + 1} / 04</span><h4>{steps[step]}</h4><p>{mechanismNotes[step]}</p></div>
    <div className="workspace-step-controls" aria-label="Mechanism steps">{["Medicine", "Receptor", "Signal", "Response"].map((name, i) => <button key={name} aria-pressed={i === step} onClick={() => setStep(i)}><span>0{i + 1}</span>{name}</button>)}</div>
    <div className="workspace-preview-bottom"><span>Simplified learning example</span><a href={source} target="_blank" rel="noreferrer">Prescribing information §12.1 ↗</a></div>
  </div>;
}
export function ResearchPreview({ title, question, primary, pdfUrl, reproducibilityUrl }) {
  const [tab, setTab] = useState("Question");
  return <div className="workspace-research-preview workspace-preview"><div className="workspace-preview-top"><span>NaS Research</span><span>NAS-BRCA-002</span></div><p className="workspace-study-title">{title}</p>
    <div className="workspace-research-tabs" aria-label="Study preview">{["Question", "Evidence", "Record"].map(t => <button key={t} aria-pressed={t === tab} onClick={() => setTab(t)}>{t}</button>)}</div>
    <div className="workspace-study-detail" aria-live="polite">{tab === "Question" ? <><span className="workspace-label">What was asked</span><p>{question}</p></> : tab === "Evidence" ? <><span className="workspace-label">{primary[0]}</span><strong>{primary[1]}</strong><p>Matching subtype labels / attempted technical-repeat pairs.</p><small>{primary[2]} agreement · 95% Wilson interval {primary[3]}. This measures repeatability, not clinical accuracy.</small></> : <><span className="workspace-label">Follow the record</span><p>Read the report and inspect the reproducibility package.</p><a href={pdfUrl}>Published report ↗</a><a href={reproducibilityUrl}>Reproducibility package ↗</a></>}</div>
    <div className="workspace-preview-bottom"><span>Public-data computational study</span><span>Published · September 2026</span></div></div>;
}
const nicoleSteps = [
  { name: "Ask a question", title: "What makes a result repeatable?", text: "Begin with what you want to understand. The proposed workspace would keep the question with the work it leads to.", label: "Your starting point" },
  { name: "Follow the evidence", title: "Keep the source within reach.", text: "Move from a question to relevant research and tools, with the original material available to inspect.", label: "Connected material" },
  { name: "Keep the context", title: "Pick up where you left off.", text: "A project could hold your question, selected sources, and notes together, ready for the next session.", label: "An ongoing project" },
];
export function NicolePreview() {
  const [step, setStep] = useState(0);const current = nicoleSteps[step];
  return <div className="workspace-nicole-example"><div className="workspace-preview-top"><span>Nicole</span><span>Concept walkthrough · In development</span></div>
    <div className="workspace-nicole-example-body"><div className="workspace-nicole-steps" aria-label="Nicole concept steps">{nicoleSteps.map((s, i) => <button key={s.name} aria-pressed={step === i} onClick={() => setStep(i)}><span>0{i + 1}</span>{s.name}<span aria-hidden="true">→</span></button>)}</div>
    <div className="workspace-nicole-example-detail" aria-live="polite"><span className="workspace-label">{current.label}</span><h3>{current.title}</h3><p>{current.text}</p>{step === 1 && <Link href="/research/pam50-technical-repeatability">Explore an example: PAM50 repeatability ↗</Link>}{step === 2 && <div className="workspace-project-outline"><span>Question</span><span>Sources</span><span>Notes</span></div>}</div></div>
  </div>;
}
