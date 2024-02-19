"use client";

import React, {useContext} from "react";
import {formatToDMY} from "@/utils/Format";
import Image from "next/image";
import {colorBackground, colorText} from "@/types/IColor";
import {PeopleFill} from "@/constants/link/icons";
import {NotifContext} from "@/app/admin/provider/NotificationProvider";
import {INotif} from "@/types/INotif";

export default function ProposalItem({company}: {company: INotif}) {
	const bg: string = colorBackground[company.notif_workshop.color];
	const txt: string = colorText[company.notif_workshop.color];

	const context = useContext(NotifContext);

	const handleClick = (value: INotif) => {
		context.togglePopup();
		context.setValueInPopup(value);
	};

	return (
		<div
			className="grid grid-cols-custom-8 text-sm font-bold hover:bg-white transition-all ease-linear duration-75 cursor-pointer items-center rounded-lg h-14 pl-4 my-1"
			onClick={() => handleClick(company)}>
			{/* NOM et IMAGE */}
			<div className="flex items-center gap-2">
				<div className="w-[30px] h-[30px] relative rounded-full bg-slate-500">
					<Image src={company.notif_company.image} alt="" fill className="rounded-full" />
				</div>
				<div className="flex flex-col items-center ">
					<p className="text-black-default font-bold">{company.notif_company.name}</p>
				</div>
			</div>
			{/* DATE PROPOSED */}
			<div className="opacity-70 badge bg-white border-0">
				{formatToDMY(company.notif_date_proposed)}
			</div>
			{/* TIME PROPOSED */}
			<div className="opacity-70 badge bg-white border-0">{company.notif_time_proposed}</div>
			{/* WORKSHOP */}
			<div className="flex items-center gap-2">
				<div
					className={`w-7 h-7 flex items-center justify-center ${txt} ${bg} bg-opacity-30 rounded-lg`}>
					{company.notif_workshop.icon}
				</div>
				<p className="opacity-50">{company.notif_workshop.name}</p>
			</div>
			{/* NB PARTICIPANT */}
			<div className="flex gap-3 items-center">
				<PeopleFill className="opacity-50" />
				<div className="opacity-60">{company.notif_nb_participant}</div>
			</div>
			{/* ACTION BUTTON */}
			{/* <div className="flex gap-4">
				<ActionsButtons />
			</div> */}
		</div>
	);
}
