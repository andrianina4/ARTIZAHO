import {MiniCalendar} from "@/constants/link/icons";
import {IPlanningItem} from "@/types/IWorkshop";
import Image from "next/image";
import React from "react";

export default function PlanningItem({item}: {item: IPlanningItem}) {
	return (
		<div className="grid grid-cols-custom-10 font-bold bg-white-40% items-center rounded-lg h-14 pl-4 my-1 ml-8">
			{/* DATE */}
			<div className="flex gap-2 items-center">
				<MiniCalendar />
				<div className="opacity-70">{item.date}</div>
			</div>
			{/* HEURE */}
			<div className="flex gap-3 items-center opacity-70">
				<div>{item.time_start}</div>
				<div>|</div>
				<div>{item.time_end}</div>
			</div>
			{/* NOM et IMAGE */}
			<div className="flex items-center gap-2">
				<div className="w-[30px] h-[30px] relative rounded-full bg-slate-500">
					<Image src={item.craftsman.img} alt="" fill className="rounded-full" />
				</div>
				<div className="flex flex-col items-center ">
					<p className="text-black-default font-bold">{item.craftsman.name}</p>
				</div>
			</div>
			{/* NB PARTICIPANT */}
			<div className="flex gap-2 items-center">
				<div className="opacity-70">{item.location}</div>
			</div>
			{/* TYPE CLIENT */}
			<div className="opacity-70">{item.price} €</div>
		</div>
	);
}
