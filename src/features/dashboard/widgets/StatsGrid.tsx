import StatCard from "./StatCard";

export default function StatsGrid(){

    return(

        <div className="grid grid-cols-4 gap-6">

            <StatCard
                title="Revenue"
                value="₹0"
            />

            <StatCard
                title="Leads"
                value="0"
            />

            <StatCard
                title="Clients"
                value="0"
            />

            <StatCard
                title="Projects"
                value="0"
            />

        </div>

    )

}