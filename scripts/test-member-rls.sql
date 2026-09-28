-- Run only in a disposable PostgreSQL database with Supabase roles/auth.uid and
-- two auth.users fixtures ending in 001 and 002. Transaction is rolled back.
begin;
set local role authenticated;
select set_config('request.jwt.claim.sub','00000000-0000-0000-0000-000000000001',true);
select public.update_member_item('/test/module','note','{"section":"","text":"Private note"}');
select public.update_member_item('/test/module','progress','{"section":"first"}');
select public.update_member_item('/test/module','progress','{"section":"second"}');
select public.update_member_item('/test/module','practice','{"id":"quiz","state":{"answers":{"q1":2}}}');
select public.update_member_item('/test/module','save','{"saved":true}');
do $$ begin
 if not exists(select 1 from public.member_items where saved and notes->>''='Private note' and progress->>'lastSection'='second' and jsonb_array_length(progress->'visited')=2 and not (progress ? 'completed') and practices->'quiz'->'answers'->>'q1'='2') then raise exception 'Merge/resume failed'; end if;
end $$;
select set_config('request.jwt.claim.sub','00000000-0000-0000-0000-000000000002',true);
do $$ begin
 if exists(select 1 from public.member_items) then raise exception 'Cross-account read leaked'; end if;
 begin
  insert into public.member_items(user_id,path) values('00000000-0000-0000-0000-000000000001','/forbidden');
  raise exception 'Cross-account write allowed';
 exception when insufficient_privilege then null; end;
end $$;
select public.update_member_item('/test/module','save','{"saved":false}');
select set_config('request.jwt.claim.sub','00000000-0000-0000-0000-000000000001',true);
do $$ begin
 if (select count(*) from public.member_items) <> 1 then raise exception 'Account isolation failed'; end if;
 if not (select saved from public.member_items where path='/test/module') then raise exception 'Other user overwrote saved item'; end if;
end $$;
reset role;
set local role anon;
do $$ begin
 begin
  perform * from public.member_items;
  raise exception 'Anonymous read allowed';
 exception when insufficient_privilege then null; end;
 begin
  perform public.update_member_item('/test/module','save','{"saved":true}');
  raise exception 'Anonymous RPC allowed';
 exception when insufficient_privilege then null; end;
end $$;
rollback;
