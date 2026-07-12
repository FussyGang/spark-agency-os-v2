import SupabaseService from "./supabase.service";

class TaskService{

    async getAll(){

        return await SupabaseService.client
            .from("tasks")
            .select("*");

    }

}

export default new TaskService();