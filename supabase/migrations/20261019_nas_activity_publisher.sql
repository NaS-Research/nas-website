create table nas_private.activity_publishers (
 device text primary key,
 token_hash text not null unique,
 enabled boolean not null default true,
 created_at timestamptz not null default now()
);
revoke all on nas_private.activity_publishers from public,anon,authenticated;
create or replace function public.publish_nas_activity(p_device text,p_token text,p_snapshot jsonb)
returns void language plpgsql security definer set search_path='' as $$
declare entry jsonb; report_source text;
begin
 if p_token is null or length(p_token)<40 or length(p_token)>256 or not exists(
  select 1 from nas_private.activity_publishers where device=p_device and enabled and token_hash=encode(extensions.digest(p_token,'sha256'),'hex')
 ) then raise exception 'Publisher authentication failed' using errcode='28000'; end if;
 if p_snapshot is null or jsonb_typeof(p_snapshot)<>'array' or jsonb_array_length(p_snapshot)<>3 or octet_length(p_snapshot::text)>65536 then
 raise exception 'Invalid activity snapshot'; end if;
 if (select count(distinct item->>'source') from jsonb_array_elements(p_snapshot) item)<>3 then raise exception 'Invalid sources'; end if;
 for entry in select * from jsonb_array_elements(p_snapshot) loop
  report_source=entry->>'source';
  if report_source not in ('website','research','video') or report_source is null or jsonb_typeof(entry->'jobs') is distinct from 'array' or jsonb_array_length(entry->'jobs')>100 then raise exception 'Invalid source report'; end if;
  insert into public.admin_activity_snapshots(source,device,received_at,payload) values(report_source,p_device,clock_timestamp(),entry)
  on conflict(source) do update set device=excluded.device,received_at=excluded.received_at,payload=excluded.payload;
 end loop;
end;
$$;
revoke all on function public.publish_nas_activity(text,text,jsonb) from public;
grant execute on function public.publish_nas_activity(text,text,jsonb) to anon;
