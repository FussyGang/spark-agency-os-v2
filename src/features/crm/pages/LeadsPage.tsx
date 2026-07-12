import LeadCard from "../components/LeadCard";

import { useLeads } from "../hooks/useLeads";

export default function LeadsPage(){

    const{

        leads,

        loading

    }=useLeads();

    if(loading)

        return(

            <div className="p-10">

                Loading...

            </div>

        );

    return(

        <div className="grid grid-cols-3 gap-5">

            {leads.map((lead:any)=>(

                <LeadCard

                    key={lead.id}

                    company_name={lead.company_name}

                    contact_name={lead.contact_name}

                />

            ))}

        </div>

    )

}