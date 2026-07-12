import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#09090B] text-white">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-600/25 blur-[140px]" />

        <div className="absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[170px]" />

        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      </div>

      <Card className="relative z-10 w-[430px] rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">

        <div className="mb-10 flex flex-col items-center">

          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 shadow-xl">

            <Sparkles className="h-8 w-8" />

          </div>

          <h1 className="text-3xl font-bold">

            Spark AgencyOS

          </h1>

          <p className="mt-2 text-center text-sm text-zinc-400">

            AI Operating System for Digital Agencies

          </p>

        </div>

        <div className="space-y-5">

          <div>

            <Label>Email</Label>

            <Input
              placeholder="john@company.com"
              className="mt-2 h-12 border-white/10 bg-white/5"
            />

          </div>

          <div>

            <Label>Password</Label>

            <Input
              type="password"
              placeholder="••••••••"
              className="mt-2 h-12 border-white/10 bg-white/5"
            />

          </div>

          <Button
            className="mt-3 h-12 w-full rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-base"
          >
            Login

            <ArrowRight className="ml-2 h-5 w-5" />

          </Button>

        </div>

        <div className="mt-8 flex items-center justify-between text-sm text-zinc-400">

          <button className="transition hover:text-white">

            Activate Client

          </button>

          <button className="transition hover:text-white">

            Forgot Password?

          </button>

        </div>

      </Card>

    </main>
  );
}