create table if not exists clients (

    id uuid primary key default gen_random_uuid(),

    company_name text not null,

    contact_name text not null,

    email text,

    phone text,

    status text default 'Lead',

    source text default 'Manual',

    budget numeric default 0,

    notes text,

    created_at timestamptz default now(),

    updated_at timestamptz default now()

);