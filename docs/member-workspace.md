# Personal workspace

/account is authenticated and titled Your workspace. Nicole is the system, not the user's name.

Implemented:
- Saved modules, papers, articles, and tools, with content filters and removal.
- Module section tracking, explicit completion, resume links, and learning history.
- Private item/section notes with an explicit save button.
- Practice answers, shuffled question/choice order, and feedback state saved together.
- Practice restores only when its question-bank version matches. No formal grade or leaderboard.
- Server-verified identity, same-origin writes, bounded payloads, private/no-store responses.
- Database row-level security and an atomic per-user update function. No service-role key.
- No account content cached in localStorage. Signed-out use cannot read saved account data.

## Activation
Follow auth-setup.md for Supabase configuration and verified sign-in. Apply
supabase/migrations/20260919_personal_workspace.sql to the intended Supabase project.
Never commit secrets. Then verify with two real test accounts: save/unsave, notes,
section resume, completion, partially answered practice, logout, and another device.
Verify that account B never sees account A's items. Test expired sessions and failed saves.
This integration step is pending; local SQL tests do not establish live synchronization.

## Local checks
Run scripts/test-member-workspace.mjs with Node 22.
scripts/test-member-rls.sql exercises merges, account isolation, and anonymous denial
in a disposable PostgreSQL database with the Supabase role/auth fixtures noted in the script.
/account/preview is a development-only UI using explicitly labeled sample entries.
Its bookmark controls affect only the in-memory preview. It returns 404 in production.
