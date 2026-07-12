import {
  LayoutDashboard,
  Users,
  FolderKanban,
  Briefcase,
  CheckSquare,
  CalendarDays,
  BarChart3,
  Bot,
  Settings,
} from "lucide-react";

const items = [
  { icon: LayoutDashboard, title: "Dashboard" },
  { icon: Users, title: "Leads" },
  { icon: Briefcase, title: "Clients" },
  { icon: FolderKanban, title: "Projects" },
  { icon: CheckSquare, title: "Tasks" },
  { icon: CalendarDays, title: "Calendar" },
  { icon: BarChart3, title: "Analytics" },
  { icon: Bot, title: "AI Assistant" },
  { icon: Settings, title: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 border-r bg-white">
      <div className="border-b p-6">

        <h1 className="text-2xl font-bold">

          Spark AgencyOS

        </h1>

      </div>

      <div className="p-3">

        {items.map((item) => {

          const Icon = item.icon;

          return (

            <button
              key={item.title}
              className="mb-2 flex w-full items-center gap-3 rounded-xl p-4 text-left transition hover:bg-gray-100"
            >

              <Icon size={20} />

              <span>{item.title}</span>

            </button>

          );

        })}

      </div>

    </aside>
  );
}