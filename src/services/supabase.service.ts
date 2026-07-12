import { supabase } from "@/integrations/supabase";

class SupabaseService {

    get client() {
        return supabase;
    }

}

export default new SupabaseService();