'use client';
import { useState, useRef, useEffect } from "react";
import { HiSparkles } from 'react-icons/hi2';
import { FiArrowUp } from "react-icons/fi";
import suggestedPrompts from '@/data/suggestedPrompts';

export default function NicoleChat({ initialPrompt = "", userName = null }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hello! I’m Nicole. What can I help you explore today?' },
    { role: 'user', text: 'Could you explain the nitrogen cycle in simple terms?' },
    { role: 'assistant', text: 'Certainly! The nitrogen cycle describes how nitrogen moves between the atmosphere, soil, plants, animals, and microbes…' }
  ]);
  const [input, setInput] = useState(initialPrompt);
  const endRef = useRef(null);
  const isEmpty = messages.length === 0;
  const greetingText = userName ? `Hello, ${userName}` : "Hello, I’m Nicole";

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSend() {
    if (!input.trim()) return;
    const userMsg = { role: "user",  text: input };
    setMessages(m => [...m, userMsg]);
    setInput("");

    // hit your /ask endpoint
    const res = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input, k: 3 }),
    }).then(r => r.json());

    const botMsg  = { role: "assistant", text: res.answer };
    setMessages(m => [...m, botMsg]);
  }

  return (
    <div className="flex flex-col h-screen bg-black text-white overflow-hidden">
      {/* Chat history or welcome splash */}
      <div
        className={`flex-1 pt-20 bg-black w-full max-w-5xl mx-auto px-4 ${
          isEmpty
            ? 'flex flex-col items-center justify-center overflow-hidden'
            : 'pt-32 pb-24 overflow-y-auto space-y-4'
        }`}
      >
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center h-full select-none">
            <h1 className="text-4xl sm:text-5xl font-semibold bg-[linear-gradient(90deg,#d4b074_0%,#c7a069_40%,#b48a4f_100%)] bg-clip-text text-transparent mb-2 text-center">
              {greetingText}
            </h1>
            <p className="text-neutral-400 text-center max-w-md">
              To get started, type your question, share your research focus, or tell me about a clinical topic you’d like to explore.
            </p>
            {/* Inline input bubble */}
            <div className="w-11/12 sm:w-full max-w-2xl relative mt-6">
              <input
                className="w-full bg-neutral-900/70 border border-neutral-700 rounded-2xl px-6 py-6 pr-14 focus:outline-none focus:ring-[#c7a069] focus:border-[#c7a069] text-base placeholder:text-neutral-500"
                placeholder="Ask Nicole…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={handleSend}
                className="w-9 h-9 flex items-center justify-center text-neutral-400 hover:text-white transition bg-neutral-700 rounded-full disabled:opacity-40 absolute right-5 top-1/2 -translate-y-[60%] cursor-pointer"
                disabled={!input.trim()}
              >
                <FiArrowUp className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {Object.keys(suggestedPrompts).map((label) => (
                <button
                  key={label}
                  onClick={() => {
                    const options = suggestedPrompts[label];
                    const prompt = options[Math.floor(Math.random() * options.length)];
                    setInput(prompt);
                  }}
                  className="border border-neutral-700 rounded-full px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  {label}
                </button>
              ))}
            </div>
            <p className="mt-6 text-xs text-neutral-500 text-center">
              Nicole may generate content that reflects current scientific understanding but is not a substitute for professional judgment.
            </p>
          </div>
        ) : (
          messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} mb-6`}
            >
              {/* Assistant icon on left messages */}
              {m.role === 'assistant' && (
                <HiSparkles className="text-[#c7a069] w-5 h-5 mt-3 mr-2 shrink-0" />
              )}

              <div
                className={`px-4 py-3 rounded-xl whitespace-pre-wrap leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-neutral-700 text-white max-w-[60%]'
                    : 'bg-transparent text-neutral-100 max-w-4xl'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))
        )}
        <div ref={endRef} />
      </div>

      {/* Input bar */}
      {!isEmpty && (
        <div className="w-full sticky bottom-4 bg-black">
          <div className="max-w-3xl mx-auto relative p-4">
            <input
              className="w-full bg-neutral-900/70 border border-neutral-700 rounded-2xl px-6 py-6 pr-14 focus:outline-none focus:ring-[#c7a069] focus:border-[#c7a069] text-base placeholder:text-neutral-500"
              placeholder="Ask Nicole…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="w-9 h-9 flex items-center justify-center text-neutral-400 hover:text-white transition bg-neutral-700 rounded-full cursor-pointer disabled:opacity-40 absolute right-6 top-1/2 -translate-y-[70%]"
              disabled={!input.trim()}
            >
              <FiArrowUp className="w-4 h-4" />
            </button>
            <p className="mt-6 text-xs text-neutral-500 text-center">
              Nicole may generate content that reflects current scientific understanding but is not a substitute for professional judgment.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}