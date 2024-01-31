import React from "react";
import Divider from "@/components/divider";
import AttendanceItem from "../attendance/component/attendanceItem";
import ClientItem from "./component/clientItem";
import Select from "@/components/select";
import {ISelect} from "@/types/IField";

type Props = {};

const headerList = ["Nom", "Email", "Phone", "Location", "Participants"];

const selectItem: Array<ISelect> = [
	{
		value: "name", 
		label: "Name"
	},
	{
		value: "participants",
		label: "Partipants",
	},
];

function Page({}: Props) {
	return (
		<div className="flex flex-col  ">
			<div className="flex justify-between items-center">
				<div className="bg-white text-brown px-2.5 py-2 rounded-lg h-10">Reservations</div>
				<div className="flex flex-row items-center w-60 gap-7">
					<div className="font-bold w-2/3   ">Filter by</div>
					<Select values={selectItem} className="!bg-white !h-10 !rounded-xl" />
				</div>
			</div>
			<Divider />
			<div className="grid grid-cols-custom-3 ml-4">
				{headerList.map((item, index) => {
					return (
						<span className="text-gray-60% font-bold text-sm" key={index}>
							{item}
						</span>
					);
				})}
			</div>
			<div>
				<ClientItem img={"/temp/vase.png"} />
				<ClientItem img={"/temp/vase.png"} />
			</div>
		</div>
	);
}

export default Page;
