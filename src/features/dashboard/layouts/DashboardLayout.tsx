import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Dashboard from "../pages/Dashboard";

export default function DashboardLayout(){

    return(

        <div className="flex min-h-screen bg-gray-100">

            <Sidebar/>

            <div className="flex-1">

                <Topbar/>

                <Dashboard/>

            </div>

        </div>

    )

}