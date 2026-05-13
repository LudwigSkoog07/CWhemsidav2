create extension if not exists pgcrypto;

create table if not exists public.portfolio_mail_submits (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(trim(name)) between 2 and 120),
  email text not null check (
    email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'
  ),
  subject text not null check (char_length(trim(subject)) between 2 and 160),
  message text not null check (char_length(trim(message)) between 5 and 5000),
  consent boolean not null default false check (consent = true),
  page_path text,
  user_agent text,
  status text not null default 'new' check (status in ('new', 'read', 'archived'))
);

alter table public.portfolio_mail_submits enable row level security;

drop policy if exists "Allow public portfolio mail inserts"
on public.portfolio_mail_submits;

create policy "Allow public portfolio mail inserts"
on public.portfolio_mail_submits
for insert
to anon
with check (
  consent = true
  and char_length(trim(name)) between 2 and 120
  and email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'
  and char_length(trim(subject)) between 2 and 160
  and char_length(trim(message)) between 5 and 5000
);

revoke all on table public.portfolio_mail_submits from anon, authenticated;
grant insert on table public.portfolio_mail_submits to anon;
grant all on table public.portfolio_mail_submits to service_role;
