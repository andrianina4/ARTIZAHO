import React from "react";
import {RoundPlace} from "@/constants/link/icons";
import Image from "next/image";
import {IClient} from "@/types/IClient";
import {formatToDMY} from "@/utils/Format";
import {getImgUrl} from "@/services/index.service";

function ClientItem({client}: {client: IClient}) {
	return (
		<div className="grid grid-cols-custom-3 text-sm font-bold bg-white items-center rounded-lg h-14 pl-4 my-1 hover:mt-1 ">
			<div className="flex items-center gap-2">
				<div className="w-[30px] h-[30px] rounded-full bg-slate-500 relative flex items-center justify-center text-neutral-content">
					{client?.images?.length > 0 ? (
						<Image src={getImgUrl(client?.images)} className="rounded-full" alt="acc_image" fill />
					) : (
						<span className="text-lg uppercase">{client.username[0]}</span>
					)}
				</div>
				<p className="text-black-default font-bold opacity-90">
					{client.first_name} {client.last_name}
				</p>
			</div>
			<div className="opacity-90">{client.email}</div>
			<div className="opacity-90">{client.phone_number}</div>
			<div className="font-normal text-gray-60% flex items-center gap-2">
				{/* <RoundPlace /> {client.client_location} */}
			</div>
			<div className="flex gap-2 items-center opacity-80">{formatToDMY(client.date_joined)}</div>
			<button>...</button>
		</div>
	);
}

export default ClientItem;
