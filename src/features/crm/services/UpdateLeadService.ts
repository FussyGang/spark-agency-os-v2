import { supabase } from "@/integrations/supabase";

export interface UpdateLeadPayload {
    company_name: string;
    contact_name: string;
    email: string;
    phone: string;
}

export const UpdateLeadService = {
    async update(id: string, values: UpdateLeadPayload) {
        return await supabase
            .from("clients")
            .update(values)
            .eq("id", id)
            .select()
            .single();
    },
};