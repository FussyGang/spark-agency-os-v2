create extension if not exists "pgcrypto";

create table clients (

    id uuid primary key default gen_random_uuid(),

    hubspot_contact_id text,

    company_name text not null,

    contact_name text,

    email text,

    phone text,

    activation_code text unique,

    portal_slug text unique,

    created_at timestamptz default now()

);

create table projects (

    id uuid primary key default gen_random_uuid(),

    client_id uuid references clients(id) on delete cascade,

    hubspot_deal_id text,

    name text not null,

    project_type text,

    status text default 'Planning',

    progress integer default 0,

    budget numeric default 0,

    budget_spent numeric default 0,

    budget_remaining numeric default 0,

    current_milestone text,

    next_milestone text,

    health text default 'Good',

    created_at timestamptz default now()

);

create table tasks (

    id uuid primary key default gen_random_uuid(),

    project_id uuid references projects(id) on delete cascade,

    title text,

    description text,

    status text default 'Todo',

    assignee text,

    due_date date,

    created_at timestamptz default now()

);

create table updates (

    id uuid primary key default gen_random_uuid(),

    project_id uuid references projects(id) on delete cascade,

    title text,

    content text,

    progress integer,

    created_at timestamptz default now()

);

create table reports (

    id uuid primary key default gen_random_uuid(),

    project_id uuid references projects(id) on delete cascade,

    report_type text,

    report_data jsonb,

    created_at timestamptz default now()

);

create table portal_users (

    id uuid primary key default gen_random_uuid(),

    client_id uuid references clients(id) on delete cascade,

    email text unique,

    password_hash text,

    created_at timestamptz default now()

);