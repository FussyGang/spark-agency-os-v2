import { Sparkles } from "lucide-react";

export default function AuthLogo() {
  return (
    <div className="flex flex-col items-center">

      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-2xl">

        <Sparkles className="h-8 w-8 text-white"/>

      </div>

      <h1 className="text-3xl font-bold">

        Spark AgencyOS

      </h1>

      <p className="mt-2 text-zinc-400 text-center">

        AI Operating System for Digital Agencies

      </p>

    </div>
  );
}