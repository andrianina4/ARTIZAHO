import React from "react";
import {IPanelCraftmen} from "@/types/IWorkshop";
import Image from "next/image";

export default function CraftmanItem({craftman}: {craftman: IPanelCraftmen}) {
	return (
		<div className="flex items-center w-full h-12 gap-2 px-2 bg-white rounded-lg">
			<div className="w-[30px] h-[30px] rounded-full bg-slate-500 relative">
				<Image src={craftman.craft_image} alt="" fill className="rounded-full" />
			</div>
			<div className="flex flex-col">
				<p className="font-bold">{craftman.craft_name}</p>
				<p className="font-normal opacity-50">{craftman.craft_domain}</p>
			</div>
		</div>
	);
}
