import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "@/features/auth/pages/LoginPage";
import DashboardLayout from "@/features/dashboard/layouts/DashboardLayout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/dashboard" element={<DashboardLayout />} />
      </Routes>
    </BrowserRouter>
  );
}