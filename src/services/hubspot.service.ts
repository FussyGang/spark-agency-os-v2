import { hubspot } from "@/integrations/hubspot/client";

class HubspotService{

    async getDeals(){

        return await hubspot.get("/crm/v3/objects/deals");

    }

    async getContacts(){

        return await hubspot.get("/crm/v3/objects/contacts");

    }

    async getCompanies(){

        return await hubspot.get("/crm/v3/objects/companies");

    }

}

export default new HubspotService();