import StatsGrid from "../widgets/StatsGrid";

import LeadsPage from "@/features/crm/pages/LeadsPage";

export default function Dashboard(){

    return(

        <div className="space-y-8 p-8">

            <StatsGrid/>

            <LeadsPage/>

        </div>

    )

}