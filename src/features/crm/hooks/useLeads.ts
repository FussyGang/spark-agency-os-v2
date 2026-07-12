import { useEffect, useState } from "react";
import type { Lead } from "../types/Lead";
import LeadService from "../services/LeadService";

export function useLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data, error } = await LeadService.getAll();

      if (!error) {
        setLeads((data as Lead[]) ?? []);
      }

      setLoading(false);
    }

    load();
  }, []);

  return {
    leads,
    loading,
  };
}