-- Account-owned chat library. No model, key, or quota configuration changes.
create table public.nicole_libraries (
 user_id uuid primary key references auth.users(id) on delete cascade,
 library jsonb not null default '{"folders":[],"conversations":[]}'::jsonb,
 revision integer not null default 0 check (revision >= 0),
 updated_at timestamptz not null default now(),
 constraint nicole_library_bounds check (
  jsonb_typeof(library->'folders')='array' and jsonb_array_length(library->'folders')<=30
  and jsonb_typeof(library->'conversations')='array' and jsonb_array_length(library->'conversations')<=100
  and octet_length(library::text)<=1800000
 )
);
alter table public.nicole_libraries enable row level security;
revoke all on public.nicole_libraries from anon, authenticated;
grant select,insert,update,delete on public.nicole_libraries to authenticated;
create policy nicole_library_select on public.nicole_libraries for select to authenticated using ((select auth.uid())=user_id);
create policy nicole_library_insert on public.nicole_libraries for insert to authenticated with check ((select auth.uid())=user_id);
create policy nicole_library_update on public.nicole_libraries for update to authenticated using ((select auth.uid())=user_id) with check ((select auth.uid())=user_id);
create policy nicole_library_delete on public.nicole_libraries for delete to authenticated using ((select auth.uid())=user_id);
create function public.save_nicole_library(p_library jsonb,p_revision integer) returns integer
language plpgsql security invoker set search_path='' as $$
declare next_revision integer;
begin
 if auth.uid() is null then raise exception 'Authentication required'; end if;
 insert into public.nicole_libraries(user_id) values (auth.uid()) on conflict do nothing;
 update public.nicole_libraries set library=p_library,revision=revision+1,updated_at=now()
 where user_id=auth.uid() and revision=p_revision returning revision into next_revision;
 return next_revision;
end; $$;
revoke all on function public.save_nicole_library(jsonb,integer) from public,anon;
grant execute on function public.save_nicole_library(jsonb,integer) to authenticated;
