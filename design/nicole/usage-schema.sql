-- New Nicole-only usage counters. No user prompts or conversations are stored here.
create schema if not exists nas_private;
revoke all on schema nas_private from public, anon, authenticated;
create table if not exists nas_private.nicole_usage (
 user_id uuid primary key references auth.users(id) on delete cascade,
 day_start date not null default current_date,
 day_count integer not null default 0,
 window_start timestamptz not null default now(),
 window_count integer not null default 0
);
alter table nas_private.nicole_usage enable row level security;
revoke all on nas_private.nicole_usage from public, anon, authenticated;
-- A fixed, authenticated counter operation; callers cannot read/reset counters.
create or replace function nas_private.consume_nicole_request()
returns boolean language plpgsql security definer set search_path='' as $$
declare uid uuid:=auth.uid(); r nas_private.nicole_usage;
begin
 if uid is null then raise exception 'Authentication required'; end if;
 insert into nas_private.nicole_usage(user_id) values(uid) on conflict do nothing;
 select * into r from nas_private.nicole_usage where user_id=uid for update;
 if r.day_start<>current_date then r.day_start:=current_date;r.day_count:=0;end if;
 if r.window_start<now()-interval '5 minutes' then r.window_start:=now();r.window_count:=0;end if;
 if r.day_count>=100 or r.window_count>=20 then return false;end if;
 update nas_private.nicole_usage set day_start=r.day_start,day_count=r.day_count+1,window_start=r.window_start,window_count=r.window_count+1 where user_id=uid;
 return true;
end $$;
revoke all on function nas_private.consume_nicole_request() from public, anon;
grant usage on schema nas_private to authenticated;
grant execute on function nas_private.consume_nicole_request() to authenticated;
create or replace function public.consume_nicole_request() returns boolean language sql security invoker set search_path='' as $$ select nas_private.consume_nicole_request(); $$;
revoke all on function public.consume_nicole_request() from public, anon;
grant execute on function public.consume_nicole_request() to authenticated;
