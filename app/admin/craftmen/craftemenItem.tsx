import React from "react";
import {PeopleFill} from "@/constants/link/icons";
import StarScore from "@/components/star-score";
import Image from "next/image";
import {ICraftmanItem} from "@/types/ICraftman";
import {colorBackground, colorText} from "@/types/IColor";

function CraftemenItem({craftman}: {craftman: ICraftmanItem}) {
	const bg: string = colorBackground[craftman.craftman_workshop.color];
	const txt: string = colorText[craftman.craftman_workshop.color];

	return (
		<div className="grid grid-cols-custom-2 text-sm font-bold bg-white items-center rounded-lg h-14 pl-4 my-1">
			{/* NOM et IMAGE */}
			<div className="flex items-center gap-2">
				<div className="w-[30px] h-[30px] rounded-full bg-slate-500 relative">
					<Image src={craftman.craftman_image} alt={`shopping-1`} fill className="rounded-full" />
				</div>
				<div className="flex flex-col">
					<p className="font-bold">{craftman.craftman_name}</p>
					<p className="font-normal opacity-50">{craftman.craftman_domaine}</p>
				</div>
			</div>
			{/* DOMAINE */}
			<div>{craftman.craftman_domaine}</div>
			{/* WORKSHOP */}
			<div className="flex items-center gap-2">
				<div
					className={`w-7 h-7 flex items-center justify-center ${txt} ${bg} bg-opacity-30 rounded-lg`}>
					{craftman.craftman_workshop.icon}
				</div>
				<p className="opacity-50">{craftman.craftman_workshop.name}</p>
			</div>
			{/* NB CLIENT */}
			<div className="flex gap-2 items-center">
				<PeopleFill className="opacity-70" />
				<div className="opacity-70">{craftman.craftman_nb_client}</div>
			</div>
			{/* STAR */}
			<StarScore /> 	
			{/* DON'T KNOW */}
			<button>See</button>
		</div>
	);
}

export default CraftemenItem;
