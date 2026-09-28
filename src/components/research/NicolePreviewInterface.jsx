"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "./nicole-preview-interface.css";

const examples = ["Help me explore the human heart", "Find research I can build on", "Where should I begin learning?", "Show me around the workspace"];
const responses = [
  { title: "Start with a different perspective.", text: "Open the Human Atlas and rotate a structure to see how its parts fit together. Start with the heart, then connect what you see to the mechanisms you’re studying.", links: [{ href: "/learn/pharmacy/atlas", label: "Explore the Human Atlas", detail: "Interactive anatomy" }, { href: "/learn/pharmacy/drugs", label: "Browse the Drug Library", detail: "Medicines and mechanisms" }] },
  { title: "Follow the question back to the evidence.", text: "A useful starting point is the NaS research library. Read the question and methods first, then examine the findings and limitations. Where available, the accompanying data and analysis let you look more closely at the work.", links: [{ href: "/research", label: "Browse published research", detail: "Reports, notes, and white papers" }, { href: "/research/pam50-technical-repeatability", label: "PAM50 technical repeatability", detail: "Explore a study and its methods" }] },
  { title: "Build understanding, one connection at a time.", text: "Choose a topic in the learning library, work through the explanation, then revisit it with Knowledge Review. The initial collection focuses on pharmacy and clinical topics, with more life-science material to come.", links: [{ href: "/learn", label: "Open the Learning Library", detail: "Find a place to begin" }, { href: "/learn/pharmacy/review", label: "Try Knowledge Review", detail: "Revisit what you’ve learned" }] },
  { title: "There’s more than one way to begin.", text: "The workspace brings together tools, learning, and published research. Explore a structure, study a mechanism, or follow a question through the evidence. Choose a starting point below.", links: [{ href: "/workspace", label: "Explore the workspace", detail: "Tools, knowledge, and research" }, { href: "/learn", label: "Find something to learn", detail: "Build your foundation" }] },
];

export default function NicolePreviewInterface() {
  const [example, setExample] = useState(0);
  const [input, setInput] = useState("");
  const [followup, setFollowup] = useState("");
  const [focused, setFocused] = useState(false);
  const [messages, setMessages] = useState([]);
  const dialog = useRef(null);
  const conversation = useRef(null);
  useEffect(() => {
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    if (focused || input || motion.matches) return;
    const timer = setInterval(() => {
      if (!document.hidden && !motion.matches && !dialog.current?.open) setExample(value => (value + 1) % examples.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [focused, input]);
  useEffect(() => {
    if (conversation.current) conversation.current.scrollTop = conversation.current.scrollHeight;
  }, [messages]);
  function respond(text) {
    const question = text.trim();
    if (!question) return;
    const topic = /heart|anatom|body|organ|atlas/i.test(question) ? 0 : /research|paper|study|evidence|method/i.test(question) ? 1 : /learn|begin|lesson|review|course/i.test(question) ? 2 : 3;
    setMessages(current => [...current, { question, ...responses[topic] }]);
    setInput(""); setFollowup("");
    if (!dialog.current.open) dialog.current.showModal();
  }
  function enter(event, text) {
    if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) { event.preventDefault(); respond(text); }
  }
  return <section className="nicole-interface" aria-labelledby="nicole-interface-title">
    <div className="nicole-interface__status">Nicole <span>Preview</span></div>
    <h3 id="nicole-interface-title">Where will your curiosity take you?</h3>
    <form onSubmit={event => { event.preventDefault(); respond(input || examples[example]); }}>
      <label className="nicole-interface__label" htmlFor="nicole-preview-question">Your question for Nicole</label>
      <textarea id="nicole-preview-question" value={input} maxLength={500} rows={1}
        placeholder={examples[example]} onChange={event => setInput(event.target.value)}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        onKeyDown={event => enter(event, input || examples[example])} />
      <button type="submit" className="nicole-interface__send" aria-label="Ask Nicole">↑</button>
    </form>
    <div className="nicole-interface__suggestions" aria-label="Try an example question">
      {examples.slice(0,3).map((text, index) => <button type="button" key={text} onClick={() => respond(text)}>{["Explore anatomy", "Find research", "Start learning"][index]}</button>)}
    </div>
    <p className="nicole-interface__note">An early look at Nicole.</p>
    <dialog ref={dialog} className="nicole-chat" aria-labelledby="nicole-chat-title" onClick={event => { if (event.target === dialog.current) dialog.current.close(); }}>
      <div className="nicole-chat__panel">
        <header><div><strong id="nicole-chat-title">Nicole</strong><span>Early preview</span></div><button type="button" autoFocus onClick={() => dialog.current.close()} aria-label="Close Nicole chat">×</button></header>
        <div className="nicole-chat__conversation" ref={conversation} role="log" aria-label="Conversation with Nicole" aria-live="polite">
          {messages.map((message,index) => <div className="nicole-chat__turn" key={index}>
            <p className="nicole-chat__question"><span className="nicole-interface__label">You: </span>{message.question}</p>
            <div className="nicole-chat__reply"><span>Nicole</span><h4>{message.title}</h4><p>{message.text}</p>
              <div className="nicole-chat__resources">{message.links.map(link => <Link href={link.href} key={link.href}><strong>{link.label} ↗</strong><span>{link.detail}</span></Link>)}</div>
            </div>
          </div>)}
        </div>
        <form onSubmit={event => { event.preventDefault(); respond(followup); }}>
          <label className="nicole-interface__label" htmlFor="nicole-followup">Follow-up question</label>
          <textarea id="nicole-followup" rows={1} maxLength={500} value={followup} placeholder="Keep exploring…" onChange={event => setFollowup(event.target.value)} onKeyDown={event => enter(event,followup)} />
          <button className="nicole-interface__send" type="submit" disabled={!followup.trim()} aria-label="Send follow-up">↑</button>
        </form>
      </div>
    </dialog>
  </section>;
}
