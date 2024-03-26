"use client";

import Select from "@/components/Select";
import {FlowerOne, PeopleFill} from "@/constants/link/icons";
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
	// const bg: string = colorBackground[attendance.att_workshop.workshop_color];
	// const txt: string = colorText[attendance.att_workshop.workshop_color];

	// State pour gérer le SELECT
	const [Status, setStatus] = useState<string>(attendance.payment_status);
	const handleSelectChange = async (event: ChangeEvent<HTMLInputElement>) => {
		setStatus(event.target.value);
		changeStatus(attendance.id);
	};

	// Fonction pour lancer un changement de statut vers le back
	const changeStatus = (id: string | number) => {
		console.log(`Changement du status de ${id} pour ${Status}`);
	};

	return (
		<div className="grid grid-cols-custom text-sm font-bold bg-white items-center rounded-lg h-14 pl-4 my-1 ">
			{/* ID */}
			<span className="opacity-70">{formatNumber(attendance.id)}</span>
			{/* NOM et IMAGE */}
			<div className="flex items-center gap-2">
				<div className="w-[30px] h-[30px] relative rounded-full bg-slate-500">
					<span className="text-lg uppercase"></span>
				</div>
				<div className="flex flex-col items-center ">
					<p className="text-black-default font-bold">{}</p>
				</div>
			</div>
			{/* WORKSHOP */}
			<div className="flex items-center gap-2">
				<div className={`w-7 h-7 flex items-center justify-center text-bronze bg-bronze bg-opacity-30 rounded-lg`}>
					{/* {attendance.workshop_bookable.workshop_icon} */}
					<FlowerOne />
				</div>
				<p className="opacity-50">{attendance.workshop_bookable.workshop.title}</p>
			</div>
			{/* NB PARTICIPANT */}
			<div className="flex gap-2 items-center">
				<PeopleFill className="opacity-70" />
				<div className="opacity-70">{attendance.number_of_participants}</div>
			</div>
			{/* TYPE CLIENT */}
			<div className="opacity-70">{attendance.custom_workshop ? "Individuals" : "Company"}</div>
			{/* DATE RESERVATION */}
			<div className="opacity-70">{formatToDMY(attendance.workshop_bookable.created_at)}</div>
			{/* STATUS */}
			<Select
				options={selectItem}
				className="!select-xs"
				// value={Status}
				// onChange={handleSelectChange}
			/>
		</div>
	);
}

export default AttendanceItem;
