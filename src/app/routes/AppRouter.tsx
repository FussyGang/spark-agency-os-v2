import { Routes, Route } from "react-router-dom";

import LoginPage from "@/features/auth/pages/LoginPage";
import DashboardLayout from "@/features/dashboard/layouts/DashboardLayout";
import LeadDetailsPage from "@/features/crm/pages/LeadDetailsPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
      <Route path="/leads/:id" element={<LeadDetailsPage />} />
    </Routes>
  );
}