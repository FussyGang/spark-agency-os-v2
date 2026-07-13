export default function StatsCards() {
    const stats = [
        {
            title: "Revenue",
            value: "₹0",
        },
        {
            title: "Clients",
            value: "0",
        },
        {
            title: "Projects",
            value: "0",
        },
        {
            title: "Tasks",
            value: "0",
        },
    ];

    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {stats.map((card) => (

                <div
                    key={card.title}
                    className="rounded-2xl border bg-white p-6 shadow-sm"
                >

                    <p className="text-sm text-gray-500">
                        {card.title}
                    </p>

                    <h2 className="mt-4 text-4xl font-bold">
                        {card.value}
                    </h2>

                </div>

            ))}

        </div>
    );
}