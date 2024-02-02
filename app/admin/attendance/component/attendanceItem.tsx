"use client";

import Button from "@/components/button";
import Select from "@/components/select";
import {Heart, Users} from "@/constants/link/icons";
import {IAttendance} from "@/types/IAttendance";
import {ISelect} from "@/types/IField";
import Image from "next/image";
import React from "react";

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
	const formattedDate: string = new Intl.DateTimeFormat("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
		// hour: "numeric",
		// minute: "numeric",
		// second: "numeric",
	}).format(attendance.att_date_reservation);

	return (
		<div className="grid grid-cols-custom text-sm font-bold bg-white items-center rounded-lg h-14 pl-4 my-1 ">
			<span className="opacity-70">{attendance.att_id}</span>
			<div className="flex items-center gap-2">
				<div className="w-[30px] h-[30px] relative rounded-full bg-slate-500">
					<Image src={attendance.att_image} alt="" fill className="rounded-full" />
				</div>
				<div className="flex flex-col items-center ">
					<p className="text-black-default font-bold">{attendance.att_name}</p>
				</div>
			</div>
			<div className="flex items-center gap-2">
				<div
					className={`w-7 h-7 flex items-center justify-center text-${attendance.att_workshop.workshop_color} bg-${attendance.att_workshop.workshop_color} bg-opacity-30 rounded-lg`}>
					{attendance.att_workshop.workshop_icon}
				</div>
				<p className="opacity-50">{attendance.att_workshop.workshop_name}</p>
			</div>
			<div className="flex gap-2 items-center">
				<Users className="opacity-70" />
				<div className="opacity-70">{attendance.att_nb_part}</div>
			</div>
			<div className="opacity-70">
				{attendance.att_type == "company" ? "Company" : "Individuals"}
			</div>
			<div className="opacity-70">{formattedDate}</div>
			<Select values={selectItem} className="!select-xs" />
		</div>
	);
}

export default AttendanceItem;
