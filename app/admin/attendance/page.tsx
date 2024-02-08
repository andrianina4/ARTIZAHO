import Divider from "@/components/divider";
import React from "react";
import AttendanceItem from "./component/attendanceItem";
import Select from "@/components/select";
import {ISelect} from "@/types/IField";
import {FlowerOne} from "@/constants/link/icons";
import {IAttendance} from "@/types/IAttendance";

const headerList = [
	"ID",
	"Client Name",
	"Workshop",
	"Participants",
	"Client Type",
	"Reservation Date",
	"Status",
];

const selectItem: Array<ISelect> = [
	{
		value: "name",
		label: "Name",
	},
	{
		value: "participants",
		label: "Partipants",
	},
];

const listAttendance: Array<IAttendance> = [
	{
		att_id: 1,
		att_image: "/temp/vase.png",
		att_name: "Mahefasoa",
		att_workshop: {
			workshop_icon: <FlowerOne />,
			workshop_name: "Bouquet de vase",
			workshop_color: "bronze",
		},
		att_nb_part: 3,
		att_type: "company",
		att_date_reservation: new Date(),
		att_status: "paid",
	},
	{
		att_id: 2,
		att_image: "/temp/vase.png",
		att_name: "Ma Hefa",
		att_workshop: {
			workshop_icon: <FlowerOne />,
			workshop_name: "Bouquet de vase",
			workshop_color: "blue",
		},
		att_nb_part: 3,
		att_type: "company",
		att_date_reservation: new Date(),
		att_status: "paid",
	},
	{
		att_id: 3,
		att_image: "/temp/vase.png",
		att_name: "Mahe Fa",
		att_workshop: {
			workshop_icon: <FlowerOne />,
			workshop_name: "Bouquet de vase",
			workshop_color: "green",
		},
		att_nb_part: 3,
		att_type: "company",
		att_date_reservation: new Date(),
		att_status: "paid",
	},
];

function page() {
	return (
		<div className="flex flex-col max-screen overflow-x-auto ">
			<div className="flex justify-between items-center">
				<div className="bg-white text-brown px-2.5 py-2 rounded-lg h-10">Reservations</div>
				<div className="flex flex-row items-center w-60 gap-7">
					<div className="font-bold w-2/3   ">Filter by</div>
					<Select values={selectItem} className="!bg-white !h-10 !rounded-xl" />
				</div>
			</div>
			<Divider />
			<div className=" w-[980px] xl:w-full ">
				<div className="grid grid-cols-custom ml-4 mb-4">
					{headerList.map((item, index) => {
						return (
							<span className="text-gray-60% font-bold text-sm" key={index}>
								{item}
							</span>
						);
					})}
				</div>
				<div>
					{listAttendance.map((item, index) => (
						<AttendanceItem key={index} attendance={item} />
					))}
				</div>
			</div>
		</div>
	);
}

export default page;
