"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export default function ComingSoonModal({ open, onClose }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!open || !mounted) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-70 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-neutral-900 rounded-2xl px-8 py-10 shadow-2xl text-center border border-neutral-700 max-w-xl mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
        <p className="text-neutral-400 mb-8">
          NaS is creating a specialized model for the life sciences. Full
          details will be shared soon. For now, call her&nbsp;Nicole.
        </p>
        <button
          className="px-8 py-2 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition"
          onClick={onClose}
        >
          Understood
        </button>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}