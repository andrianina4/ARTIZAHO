import {CalendarIcon, Duration, FlowerOne, PeopleFill} from "@/constants/link/icons";
import {colorBackground, colorText} from "@/types/IColor";
import {IWorkShop, IWrokshopItem} from "@/types/IWorkshop";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WorkshopItem({workshop}: {workshop: IWorkShop}) {
	// const bg: string = colorBackground[workshop.shop_color];
	// const txt: string = colorText[workshop.shop_color];
	const bg = "bg-bronze";
	const txt = "text-bronze";

	return (
		<Link
			href={`/admin/workshop/${workshop.id}/about`}
			className="grid grid-cols-custom-9 text-sm font-bold bg-white items-center rounded-lg h-14 pl-4 my-1">
			{/* WORKSHOP */}
			<div className="font-bold opacity-90">{workshop.title}</div>
			{/* KNOW-HOW */}
			<div className="flex items-center gap-2">
				<div className={`w-7 h-7 flex items-center justify-center ${txt} ${bg} bg-opacity-30 rounded-lg`}>
					{/* {workshop.shop_icon} */}
					<FlowerOne />
				</div>
				<p className="opacity-50">{workshop.category}</p>
			</div>
			{/* NB PARTICIPANT */}
			<div className="flex gap-2 items-center">
				<PeopleFill className="opacity-70" />
				<div className="opacity-70">{workshop.workshop_info.max_participants}</div>
			</div>
			<div className="">
				<div className="px-2 py-2 flex gap-2 items-center badge-lg bg-white-40% opacity-70">
					<CalendarIcon className="w-5 h-5" />
					Planning
				</div>
			</div>
			<div>...</div>
		</Link>
	);
}
