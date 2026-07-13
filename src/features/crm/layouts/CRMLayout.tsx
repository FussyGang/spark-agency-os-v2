import { NavLink, Outlet } from "react-router-dom";

const links = [

    {
        title:"Leads",
        path:"/dashboard"
    },

    {
        title:"Clients",
        path:"/clients"
    },

    {
        title:"Projects",
        path:"/projects"
    },

    {
        title:"Tasks",
        path:"/tasks"
    },

    {
        title:"Activities",
        path:"/activities"
    }

];

export default function CRMLayout(){

    return(

        <div className="space-y-8">

            <div className="flex gap-3 flex-wrap">

                {links.map(link=>(

                    <NavLink

                        key={link.title}

                        to={link.path}

                        className="rounded-xl border bg-white px-5 py-3"

                    >

                        {link.title}

                    </NavLink>

                ))}

            </div>

            <Outlet/>

        </div>

    )

}