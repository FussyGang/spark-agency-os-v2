interface Props{

    company_name:string;

    contact_name:string;

}

export default function LeadCard({

    company_name,

    contact_name

}:Props){

    return(

        <div className="rounded-xl border bg-white p-5 shadow">

            <h2 className="text-lg font-semibold">

                {company_name}

            </h2>

            <p className="mt-2 text-sm text-gray-500">

                {contact_name}

            </p>

        </div>

    )

}