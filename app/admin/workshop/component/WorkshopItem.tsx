import {CalendarIcon, Duration, FlowerOne, PeopleFill} from "@/constants/link/icons";
import {DeleteWorkshop} from "@/hook/AdminWorkshop/DeleteWorkshop";
import {colorBackground, colorText} from "@/types/IColor";
import {IWorkShop, IWrokshopItem} from "@/types/IWorkshop";
import Image from "next/image";
import Link from "next/link";
import React, {MouseEventHandler} from "react";

export default function WorkshopItem({workshop}: {workshop: IWorkShop}) {
	const {handleDelete} = DeleteWorkshop(workshop.id);

	// const bg: string = colorBackground[workshop.shop_color];
	// const txt: string = colorText[workshop.shop_color];
	const bg = "bg-bronze";
	const txt = "text-bronze";

	return (
		<div className="grid grid-cols-custom-9 text-sm font-bold hover:bg-white items-center rounded-lg h-14 pl-4 my-1">
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
			{/* TSY AIKO LOATRA FA LE ZAVATRA INY */}
			<details className="dropdown">
				<summary className="btn bg-transparent border-none shadow-none hover:bg-transparent">...</summary>
				<ul className="p-2 shadow menu dropdown-content z-[1] right-1/2 bg-base-100 rounded-box w-40">
					<li>
						<Link href={`/admin/workshop/${workshop.id}/about`} className="opacity-75">
							See more
						</Link>
					</li>
					<li onClick={handleDelete}>
						<a className="opacity-75 text-red-600">Delete</a>
					</li>
				</ul>
			</details>
		</div>
	);
}
