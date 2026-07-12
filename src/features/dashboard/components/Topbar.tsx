import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-8">

      <div className="relative">

        <Search
          size={18}
          className="absolute left-4 top-3 text-gray-400"
        />

        <input
          className="w-96 rounded-xl border bg-gray-50 py-2 pl-11 pr-4"
          placeholder="Search anything..."
        />

      </div>

      <div className="flex items-center gap-5">

        <Bell />

        <button className="rounded-xl bg-black px-4 py-2 text-white">

          + New Lead

        </button>

      </div>

    </header>
  );
}