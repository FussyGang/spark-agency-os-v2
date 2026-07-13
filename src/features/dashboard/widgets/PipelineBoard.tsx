const columns = [
    "New Lead",
    "Qualified",
    "Proposal",
    "Won",
];

export default function PipelineBoard() {
    return (

        <div className="grid gap-5 lg:grid-cols-4">

            {columns.map((column) => (

                <div
                    key={column}
                    className="rounded-2xl border bg-white p-5 min-h-[260px]"
                >

                    <h3 className="font-semibold mb-5">
                        {column}
                    </h3>

                    <div className="rounded-xl border border-dashed p-5 text-center text-gray-400">

                        Empty

                    </div>

                </div>

            ))}

        </div>

    );
}