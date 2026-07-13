export default function QuickActions() {

    return (

        <div className="rounded-2xl border bg-white p-6">

            <h2 className="text-xl font-semibold mb-5">

                Quick Actions

            </h2>

            <div className="flex gap-3 flex-wrap">

                <button className="rounded-lg bg-black px-4 py-2 text-white">

                    New Lead

                </button>

                <button className="rounded-lg bg-black px-4 py-2 text-white">

                    New Client

                </button>

                <button className="rounded-lg bg-black px-4 py-2 text-white">

                    New Project

                </button>

            </div>

        </div>

    );

}