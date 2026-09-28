-- Private per-account workspace. Apply using the Supabase SQL editor or migration CLI.
create table if not exists public.member_items (
 user_id uuid not null references auth.users(id) on delete cascade,
 path text not null check (length(path) <= 500 and path like '/%'),
 saved boolean not null default false,
 notes jsonb not null default '{}'::jsonb,
 progress jsonb not null default '{}'::jsonb,
 practices jsonb not null default '{}'::jsonb,
 updated_at timestamptz not null default now(),
 primary key(user_id,path),
 check (octet_length(notes::text) <= 150000),
 check (octet_length(practices::text) <= 500000)
);
alter table public.member_items enable row level security;
revoke all on public.member_items from anon;
grant select, insert, update, delete on public.member_items to authenticated;
create policy "Own workspace only" on public.member_items for all to authenticated
 using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

create or replace function public.update_member_item(p_path text,p_action text,p_data jsonb)
returns public.member_items language plpgsql security invoker set search_path = '' as $$
declare result public.member_items; current_progress jsonb;
begin
 if auth.uid() is null then raise exception 'Authentication required'; end if;
 if p_action not in ('save','note','progress','practice') then raise exception 'Unknown action'; end if;
 if octet_length(p_data::text) > 70000 then raise exception 'Request too large'; end if;
 insert into public.member_items(user_id,path) values(auth.uid(),p_path) on conflict do nothing;
 select progress into current_progress from public.member_items where user_id=auth.uid() and path=p_path for update;
 if p_action='save' then
  update public.member_items set saved=(p_data->>'saved')::boolean where user_id=auth.uid() and path=p_path;
 elsif p_action='note' then
  update public.member_items set notes=case when p_data->>'text'='' then notes-(p_data->>'section') else notes || jsonb_build_object(p_data->>'section',p_data->>'text') end where user_id=auth.uid() and path=p_path;
 elsif p_action='practice' then
  update public.member_items set practices=practices || jsonb_build_object(p_data->>'id',p_data->'state') where user_id=auth.uid() and path=p_path;
 elsif p_action='progress' then
  if p_data ? 'section' then
   current_progress=current_progress || jsonb_build_object('lastSection',p_data->>'section','visited',
    (select coalesce(jsonb_agg(distinct v),'[]'::jsonb) from jsonb_array_elements(coalesce(current_progress->'visited','[]'::jsonb) || jsonb_build_array(p_data->>'section')) t(v)));
  end if;
  if p_data ? 'completed' then
   current_progress=current_progress || jsonb_build_object('completed',(p_data->>'completed')::boolean,'completedAt',case when (p_data->>'completed')::boolean then to_jsonb(now()) else 'null'::jsonb end);
  end if;
  update public.member_items set progress=current_progress where user_id=auth.uid() and path=p_path;
 end if;
 update public.member_items set updated_at=now() where user_id=auth.uid() and path=p_path returning * into result;
 return result;
end $$;
revoke all on function public.update_member_item(text,text,jsonb) from public,anon;
grant execute on function public.update_member_item(text,text,jsonb) to authenticated;
