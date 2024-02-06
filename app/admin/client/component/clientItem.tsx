import React from "react";
import {RoundPlace} from "@/constants/link/icons";
import Image from "next/image";
import {IClient} from "@/types/IClient";

function ClientItem({client}: {client: IClient}) {

	const formattedDate: string = new Intl.DateTimeFormat("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
		// hour: "numeric",
		// minute: "numeric",
		// second: "numeric",
	}).format(client.client_created_at);
	return (
		<div className="grid grid-cols-custom-3 text-sm font-bold bg-white items-center rounded-lg h-14 pl-4 my-1 hover:mt-1 ">
			<div className="flex items-center gap-2">
				<div className="w-[30px] h-[30px] rounded-full bg-slate-500 relative">
					<Image src={client.client_image} alt={`shopping-1`} fill className="rounded-full" />
				</div>
				<p className="text-black-default font-bold opacity-90">{client.client_name}</p>
			</div>
			<div className="opacity-90">{client.client_mail}</div>
			<div className="opacity-90">{client.client_tel}</div>
			<div className="font-normal text-gray-60% flex items-center gap-2">
				<RoundPlace /> {client.client_location}
			</div>
			<div className="flex gap-2 items-center opacity-80">{formattedDate}</div>
			<button>...</button>
		</div>
	);
}

export default ClientItem;
