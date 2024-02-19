"use client";

import Select from "@/components/select";
import {PeopleFill} from "@/constants/link/icons";
import {IAttendance} from "@/types/IAttendance";
import {colorBackground, colorText} from "@/types/IColor";
import {ISelect} from "@/types/IField";
import {formatNumber, formatToDMY} from "@/utils/Format";
import Image from "next/image";
import React, {ChangeEvent, useState} from "react";

const selectItem: Array<ISelect> = [
	{
		value: "paid",
		label: "Paid",
	},
	{
		value: "inprogress",
		label: "In Progress",
	},
	{
		value: "refunded",
		label: "Refunded",
	},
];

function AttendanceItem({attendance}: {attendance: IAttendance}) {
	const bg: string = colorBackground[attendance.att_workshop.workshop_color];
	const txt: string = colorText[attendance.att_workshop.workshop_color];

	// State pour gérer le SELECT
	const [Status, setStatus] = useState<string>(attendance.att_status);
	const handleSelectChange = async (event: ChangeEvent<HTMLInputElement>) => {
		setStatus(event.target.value);
		changeStatus(attendance.att_id);
	};

	// Fonction pour lancer un changement de statut vers le back
	const changeStatus = (id: string | number) => {
		console.log(`Changement du status de ${id} pour ${Status}`);
	};

	return (
		<div className="grid grid-cols-custom text-sm font-bold bg-white items-center rounded-lg h-14 pl-4 my-1 ">
			{/* ID */}
			<span className="opacity-70">{formatNumber(attendance.att_id)}</span>
			{/* NOM et IMAGE */}
			<div className="flex items-center gap-2">
				<div className="w-[30px] h-[30px] relative rounded-full bg-slate-500">
					<Image src={attendance.att_image} alt="" fill className="rounded-full" />
				</div>
				<div className="flex flex-col items-center ">
					<p className="text-black-default font-bold">{attendance.att_name}</p>
				</div>
			</div>
			{/* WORKSHOP */}
			<div className="flex items-center gap-2">
				<div
					className={`w-7 h-7 flex items-center justify-center ${txt} ${bg} bg-opacity-30 rounded-lg`}>
					{attendance.att_workshop.workshop_icon}
				</div>
				<p className="opacity-50">{attendance.att_workshop.workshop_name}</p>
			</div>
			{/* NB PARTICIPANT */}
			<div className="flex gap-2 items-center">
				<PeopleFill className="opacity-70" />
				<div className="opacity-70">{attendance.att_nb_part}</div>
			</div>
			{/* TYPE CLIENT */}
			<div className="opacity-70">
				{attendance.att_type == "company" ? "Company" : "Individuals"}
			</div>
			{/* DATE RESERVATION */}
			<div className="opacity-70">{formatToDMY(attendance.att_date_reservation)}</div>
			{/* STATUS */}
			<Select
				values={selectItem}
				className="!select-xs"
				value={Status}
				onChange={handleSelectChange}
			/>
		</div>
	);
}

export default AttendanceItem;
