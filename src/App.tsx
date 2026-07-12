import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold">
          Spark AgencyOS
        </h1>

        <p className="mt-4 text-zinc-400">
          AI Operating System for Digital Agencies
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}