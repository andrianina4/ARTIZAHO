import {DateToday, MiniCalendar} from "@/constants/link/icons";
import {IScheduleWorkshop} from "@/types/IWorkshop";
import {getEndTime} from "@/utils/Format";
import Image from "next/image";
import React from "react";

export default function PlanningItem({item}: {item: IScheduleWorkshop}) {
	return (
		<div className="grid grid-cols-custom-10 font-bold bg-white-40% items-center rounded-lg h-14 pl-4 my-1 ml-8">
			{/* DATE */}
			<div className="flex gap-2 items-center">
				<DateToday className="w-5 h-5 text-brown" />
				<div className="opacity-70">{item.start_date}</div>
			</div>
			{/* HEURE */}
			<div className="flex gap-3 items-center opacity-70">
				<div>{item.time}</div>
				<div>|</div>
				<div>{getEndTime(item.time, item.duration)}</div>
			</div>
			{/* NOM et IMAGE */}
			<div className="flex items-center gap-2">
				<div className="w-[30px] h-[30px] relative rounded-full bg-slate-500">
					<Image src={item.artisan?.images[0]?.base_url} alt="" fill className="rounded-full" />
				</div>
				<div className="flex flex-col items-center ">
					<p className="text-black-default font-bold">{item.artisan?.name}</p>
				</div>
			</div>
			{/* NB PARTICIPANT */}
			<div className="flex gap-2 items-center">
				<div className="opacity-70">{item.location}</div>
			</div>
			{/* TYPE CLIENT */}
			<div className="opacity-70">{item.workshop?.workshop_info.base_price} €</div>
		</div>
	);
}
