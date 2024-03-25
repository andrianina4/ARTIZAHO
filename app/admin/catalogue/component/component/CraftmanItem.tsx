import React from "react";
import {IPanelCraftmen} from "@/types/IWorkshop";
import Image from "next/image";
import {ICraftman} from "@/types/ICraftman";
import {getImgUrl} from "@/services/index.service";

export default function CraftmanItem({craftman}: {craftman: ICraftman}) {
	return (
		<div className="flex items-center w-full h-12 gap-2 px-2 bg-white rounded-lg">
			<div className="w-[30px] h-[30px] rounded-full bg-slate-500 relative flex items-center justify-center text-neutral-content">
				{craftman?.images?.length > 0 ? (
					<Image src={getImgUrl(craftman?.images)} className="rounded-full" alt="acc_image" fill />
				) : (
					<span className="text-lg uppercase">{craftman.name[0]}</span>
				)}
			</div>
			<div className="flex flex-col">
				<p className="font-bold">{craftman.name}</p>
				<p className="font-normal opacity-50">{craftman.expertise}</p>
			</div>
		</div>
	);
}
