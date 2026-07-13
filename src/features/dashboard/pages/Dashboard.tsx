import StatsCards from "../widgets/StatsCards";
import PipelineBoard from "../widgets/PipelineBoard";
import ActivityFeed from "../widgets/ActivityFeed";
import TodayTasks from "../widgets/TodayTasks";
import QuickActions from "../widgets/QuickActions";

export default function Dashboard() {
    return (

        <div className="space-y-8 p-8">

            <StatsCards />

            <QuickActions />

            <PipelineBoard />

            <div className="grid gap-6 lg:grid-cols-2">

                <ActivityFeed />

                <TodayTasks />

            </div>

        </div>

    );
}