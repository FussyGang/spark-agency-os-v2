import { supabase } from "@/integrations/supabase";

export const LeadDetailsService = {
    async getById(id: string) {
        return await supabase
            .from("clients")
            .select("*")
            .eq("id", id)
            .single();
    },
};