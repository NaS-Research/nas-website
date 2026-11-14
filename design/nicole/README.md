# Integrated Nicole review candidate

Nicole is a single assistant across NaS. The account greeting uses the signed-in account name. The workspace input opens the expanded /nicole route; the global Ask Nicole control opens the same conversation in a side panel. Current-tab conversation state is keyed by authenticated user ID, survives full article document navigation, and clears on sign-out/account change. It does not sync across devices.

The real server-side OpenAI Responses integration uses OPENAI_API_KEY and the fixed gpt-6-luna model only; there is no model override or fallback. No key is bundled into client code. Authentication, canonical/host-bound preview origin checks, account identity checks, bounded input/output and atomic per-account usage counters precede paid API requests. The model receives only the conversation, public search metadata and an optional explicitly selected public page excerpt. Saved notes and account data are not sent. Responses use store:false; this is not a promise of zero provider retention.

The private quota table stores no conversations. Limits are 20 requests per five minutes and 100 per day per account. Only the private, fixed-purpose function can change counters; callers cannot read or reset them. The public RPC wrapper is SECURITY INVOKER. Authenticated scope and auth.uid() are checked before quota updates. Schema changes were installed on NaS Workspace; rollback-only tests verified caps and grants. Existing unrelated database advisor findings remain unchanged.

/account/preview contains sample account content and is available only for local development or Netlify deploy-preview builds. Production returns 404. Real /account remains authenticated. The preview does not bypass authentication for paid Nicole requests. No production release is authorized by this candidate.

Validation: scripts/test-nicole.mjs; scripts/test-member-workspace.mjs; changed JSX parse; two initial real OpenAI requests verified multi-turn context before the user selected Luna. Luna verification is recorded separately. Hosted visual and authenticated browser checks must be recorded separately.
