import React from "react";
import Image from "next/image";
import {IClient} from "@/types/IClient";
import {getImgUrl} from "@/services/index.service";

function SettingItem({client}: {client: IClient}) {
	return (
		<div className="grid grid-cols-custom-5 text-sm bg-white-40% items-center rounded-lg h-14 pl-4 my-1 w-full ">
			<div className="flex items-center gap-2">
				<div className="w-[30px] h-[30px] rounded-full bg-slate-500 relative flex items-center justify-center text-neutral-content font-bold">
					{client?.images?.length > 0 ? (
						<Image src={getImgUrl(client?.images)} className="rounded-full" alt="acc_image" fill />
					) : (
						<span className="text-lg uppercase">{client?.username[0]}</span>
					)}
				</div>
				<p className="font-bold">
					{client.first_name} {client.last_name}
				</p>
			</div>
			<div className="text-gray-60%">{client.email}</div>
			<div className="text-gray-60% font-bold">Administrator</div>
		</div>
	);
}

export default SettingItem;
