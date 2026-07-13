import { supabase } from "@/integrations/supabase";

export async function createLead(values: {
  company_name: string;
  contact_name: string;
  email: string;
  phone: string;
}) {
  return await supabase.from("clients").insert([
    {
      company_name: values.company_name,
      contact_name: values.contact_name,
      email: values.email,
      phone: values.phone,
    },
  ]);
}