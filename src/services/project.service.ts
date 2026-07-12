import SupabaseService from "./supabase.service";

class ProjectService{

    async getAll(){

        return await SupabaseService.client
            .from("projects")
            .select("*");

    }

}

export default new ProjectService();