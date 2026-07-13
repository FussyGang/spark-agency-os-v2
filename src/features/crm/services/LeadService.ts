import { supabase } from "@/integrations/supabase";

class LeadService {
  async getAll() {
    return await supabase
      .from("clients")
      .select("*")
      .order("created_at", { ascending: false });
  }
}

export default new LeadService();