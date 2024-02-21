import {Duration, PeopleFill} from "@/constants/link/icons";
import {colorBackground, colorText} from "@/types/IColor";
import {IWrokshopItem} from "@/types/IWorkshop";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WorkshopItem({workshop}: {workshop: IWrokshopItem}) {
	const bg: string = colorBackground[workshop.shop_color];
	const txt: string = colorText[workshop.shop_color];

	return (
		<Link
			href={`/admin/workshop/${workshop.shop_id}`}
			className="grid grid-cols-custom-9 text-sm font-bold bg-white items-center rounded-lg h-14 pl-4 my-1">
			{/* WORKSHOP */}
			<div className="font-bold opacity-90">{workshop.shop_name}</div>
			{/* KNOW-HOW */}
			<div className="flex items-center gap-2">
				<div className={`w-7 h-7 flex items-center justify-center ${txt} ${bg} bg-opacity-30 rounded-lg`}>
					{workshop.shop_icon}
				</div>
				<p className="opacity-50">{workshop.shop_know_how}</p>
			</div>
			{/* NOM et IMAGE */}
			<div className="flex items-center gap-2">
				<div className="w-[30px] h-[30px] relative rounded-full bg-slate-500">
					<Image src={workshop.shop_craftsman.image} alt="" fill className="rounded-full" />
				</div>
				<div className="flex flex-col items-center ">
					<p className="text-black-default font-bold">{workshop.shop_craftsman.name}</p>
				</div>
			</div>
			{/* NB PARTICIPANT */}
			<div className="flex gap-2 items-center">
				<PeopleFill className="opacity-70" />
				<div className="opacity-70">{workshop.shop_nb_participants}</div>
			</div>
			<div>Planning</div>
			<div>...</div>
		</Link>
	);
}
