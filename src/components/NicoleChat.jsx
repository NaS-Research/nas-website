'use client';
import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { HiSparkles } from 'react-icons/hi2';
import { FiArrowUp } from 'react-icons/fi';
import suggestedPrompts from '@/data/suggestedPrompts';

const API = process.env.NEXT_PUBLIC_NICOLE_API ?? '/api'; // backend base URL

export default function NicoleChat({ initialPrompt = '', userName = null }) {
  // Start with an empty history; the splash screen appears until the user sends
  // a message and Nicole responds.
  const [messages, setMessages] = useState([]);
  const [input,   setInput]   = useState(initialPrompt);
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);
  const thinkingTimer = useRef(null); // animates “Nicole is thinking…”
  const autoSentRef  = useRef(false);   // prevents double‑send in React StrictMode

  const isEmpty      = messages.length === 0;
  const greetingText = userName ? `Hello, ${userName}` : 'Hello, I’m Nicole';

  const searchParams = useSearchParams();
  const promptFromURL = searchParams?.get?.('prompt') ?? '';

  /* Auto-scroll on new messages */
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  /* Send prompt */
  async function handleSend(override = null) {
    const raw = override ?? input;
    if (!raw.trim()) return;
    const text = raw.trim();

    const userMsg = { id: Date.now(), role: 'user', text };
    setMessages(m => [...m, userMsg]);
    if (override === null) setInput('');
    setLoading(true);

    /* Placeholder bubble */
    const thinkingId = Date.now() + 1;
    setMessages(m => [...m, { id: thinkingId, role: 'assistant', text: 'Nicole is thinking …' }]);

    /* Animate dots */
    let dots = 0;
    thinkingTimer.current = setInterval(() => {
      dots = (dots + 1) % 4;
      setMessages(m =>
        m.map(msg =>
          msg.id === thinkingId
            ? { ...msg, text: `Nicole is thinking${'.'.repeat(dots)}` }
            : msg
        )
      );
    }, 400);

    try {
      const res = await fetch(`${API}/ask`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, k: 3 })
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();

      /* Swap placeholder for real answer */
      setMessages(m =>
        m.map(msg =>
          msg.id === thinkingId ? { ...msg, text: data.answer } : msg
        )
      );
      clearInterval(thinkingTimer.current);
    } catch (err) {
      console.error(err);
      setMessages(m =>
        m.map(msg =>
          msg.id === thinkingId
            ? { ...msg, text: 'Sorry, Nicole ran into an error. Please try again.' }
            : msg
        )
      );
      clearInterval(thinkingTimer.current);
    } finally {
      setLoading(false);
    }
  }

  /* ------------------------------------------------------------------ */

  // Auto‑submit the seed prompt exactly once (StrictMode mounts twice in dev)
  useEffect(() => {
    if (
      !autoSentRef.current &&
      initialPrompt &&
      initialPrompt.trim() !== '' &&
      messages.length === 0
    ) {
      handleSend(initialPrompt);
      setInput('');
      autoSentRef.current = true; // mark as done
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Clean up the thinking‑dots interval when the component unmounts
  useEffect(() => {
    return () => clearInterval(thinkingTimer.current);
  }, []);

  // If a different prompt appears in the URL, start a fresh conversation
  useEffect(() => {
    if (
      promptFromURL &&
      promptFromURL.trim() !== '' &&
      promptFromURL !== initialPrompt
    ) {
      setMessages([]);
      handleSend(promptFromURL);
      setInput('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [promptFromURL]);

  return (
    <div className="flex flex-col h-screen bg-black text-white overflow-hidden">
      {/* Chat history or welcome splash */}
      <div
        className={`flex-1 pt-20 bg-black w-full max-w-5xl mx-auto px-4 ${
          isEmpty
            ? 'flex flex-col items-center justify-center overflow-hidden'
            : 'pt-24 pb-24 overflow-y-auto space-y-4'
        }`}
      >
        {isEmpty ? (
          /* ---------- Splash panel ---------- */
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
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={handleSend}
                className="w-9 h-9 flex items-center justify-center text-neutral-400 hover:text-white transition bg-neutral-700 rounded-full disabled:opacity-40 absolute right-5 top-1/2 -translate-y-[60%]"
                disabled={!input.trim()}
              >
                <FiArrowUp className="w-4 h-4" />
              </button>
            </div>

            {/* Suggested prompts – 3 on first row, 2 on second */}
            <div className="flex flex-col items-center gap-3 mt-4">
              {/* Row 1 */}
              <div className="flex justify-center gap-3">
                {Object.keys(suggestedPrompts)
                  .slice(0, 3)
                  .map(label => (
                    <button
                      key={label}
                      onClick={() => {
                        const options = suggestedPrompts[label];
                        setInput(options[Math.floor(Math.random() * options.length)]);
                      }}
                      className="border border-neutral-700 rounded-full px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 transition-colors"
                    >
                      {label}
                    </button>
                  ))}
              </div>
              {/* Row 2 */}
              <div className="flex justify-center gap-3">
                {Object.keys(suggestedPrompts)
                  .slice(3, 5)
                  .map(label => (
                    <button
                      key={label}
                      onClick={() => {
                        const options = suggestedPrompts[label];
                        setInput(options[Math.floor(Math.random() * options.length)]);
                      }}
                      className="border border-neutral-700 rounded-full px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 transition-colors"
                    >
                      {label}
                    </button>
                  ))}
              </div>
            </div>

            <p className="mt-6 text-xs text-neutral-500 text-center">
              Nicole may generate content that reflects current scientific understanding but is not a substitute for professional judgment.
            </p>
          </div>
        ) : (
          /* ---------- Conversation panel ---------- */
          messages.map(m => (
            <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} mb-6`}>
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

      {/* Input bar (visible after first send) */}
      {!isEmpty && (
        <div className="w-full sticky bottom-4 bg-black">
          <div className="max-w-3xl mx-auto relative p-4">
            <input
              className="w-full bg-neutral-900/70 border border-neutral-700 rounded-2xl px-6 py-6 pr-14 focus:outline-none focus:ring-[#c7a069] focus:border-[#c7a069] text-base placeholder:text-neutral-500"
              placeholder="Ask Nicole…"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="w-9 h-9 flex items-center justify-center text-neutral-400 hover:text-white transition bg-neutral-700 rounded-full cursor-pointer disabled:opacity-40 absolute right-6 top-1/2 -translate-y-[70%]"
              disabled={!input.trim() || loading}
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