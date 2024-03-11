import {PeopleFill} from "@/constants/link/icons";
import {IParticipantWorkshop} from "@/types/IWorkshop";
import {colorBackground, colorText} from "@/types/IColor";
import {formatNumber, formatToDMY} from "@/utils/Format";
import Image from "next/image";
import React from "react";

export default function ParticipantItem({item}: {item: IParticipantWorkshop}) {
	const bg: string = colorBackground[item.part_workshop.color];
	const txt: string = colorText[item.part_workshop.color];

	return (
		<div className="grid grid-cols-custom-7 font-bold bg-white-40% items-center rounded-lg h-14 pl-4 my-1 ml-8">
			{/* ID */}
			<span className="opacity-70">{formatNumber(item.part_id)}</span>
			{/* NOM et IMAGE */}
			<div className="flex items-center gap-2">
				<div className="w-[30px] h-[30px] relative rounded-full bg-slate-500">
					<Image src={item.part_image} alt="" fill className="rounded-full" />
				</div>
				<div className="flex flex-col items-center ">
					<p className="text-black-default font-bold">{item.part_name}</p>
				</div>
			</div>
			{/* WORKSHOP */}
			<div className="flex items-center gap-2">
				<div
					className={`w-7 h-7 flex items-center justify-center ${txt} ${bg} bg-opacity-30 rounded-lg`}>
					{item.part_workshop.icon}
				</div>
				<p className="opacity-50">{item.part_workshop.name}</p>
			</div>
			{/* NB PARTICIPANT */}
			<div className="flex gap-2 items-center">
				<PeopleFill className="opacity-70" />
				<div className="opacity-70">{item.part_nb_part}</div>
			</div>
			{/* TYPE CLIENT */}
			<div className="opacity-70">{item.part_type == "company" ? "Company" : "Individuals"}</div>
			{/* DATE RESERVATION */}
			<div className="opacity-70">{formatToDMY(item.part_date)}</div>
		</div>
	);
}