
create schema if not exists nas_private;
revoke all on schema nas_private from public, anon, authenticated;
create table public.admin_members (
 user_id uuid primary key references auth.users(id) on delete cascade,
 role text not null default 'admin' check (role='admin'),
 created_at timestamptz not null default now()
);
alter table public.admin_members enable row level security;
revoke all on public.admin_members from anon, authenticated;
grant select on public.admin_members to authenticated;
create policy admin_members_self on public.admin_members for select to authenticated using (user_id=(select auth.uid()));
create or replace function public.is_nas_admin() returns boolean language sql stable security invoker set search_path='' as $$
 select exists(select 1 from public.admin_members where user_id=(select auth.uid()));
$$;
revoke all on function public.is_nas_admin() from public,anon;
grant execute on function public.is_nas_admin() to authenticated;
create table public.admin_activity_snapshots (
 source text primary key check(source in ('website','research','video')),
 device text not null,
 received_at timestamptz not null default now(),
 payload jsonb not null check(jsonb_typeof(payload)='object' and octet_length(payload::text)<=65536)
);
alter table public.admin_activity_snapshots enable row level security;
revoke all on public.admin_activity_snapshots from anon, authenticated;
grant select on public.admin_activity_snapshots to authenticated;
create policy admin_activity_admin_read on public.admin_activity_snapshots for select to authenticated using ((select public.is_nas_admin()));
