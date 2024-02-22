import {FlowerOne} from "@/constants/link/icons";
import {IParticipantWorkshop} from "@/types/IWorkshop";
import React from "react";
import ParticipantItem from "./component/ParticipantItem";

const header = [
	{label: "ID"},
	{label: "Client Name"},
	{label: "Workshop"},
	{label: "Participants"},
	{label: "Client Type"},
	{label: "Reservation Date"},
];

const Data: IParticipantWorkshop[] = [
	{
		part_id: 1,
		part_name: "John Doe",
		part_image: "/temp/vase.png",
		part_workshop: {
			icon: <FlowerOne />,
			color: "bronze",
			name: "Workshop 1",
		},
		part_nb_part: 5,
		part_type: "individual",
		part_date: new Date("2024-02-07"),
	},
	{
		part_id: 2,
		part_name: "Jane Smith",
		part_image: "/temp/vase.png",
		part_workshop: {
			icon: <FlowerOne />,
			color: "blue",
			name: "Workshop 2",
		},
		part_nb_part: 3,
		part_type: "company",
		part_date: new Date("2024-02-08"),
	},
	{
		part_id: 3,
		part_name: "Alice Johnson",
		part_image: "/temp/vase.png",
		part_workshop: {
			icon: <FlowerOne />,
			color: "green",
			name: "Workshop 3",
		},
		part_nb_part: 1,
		part_type: "individual",
		part_date: new Date("2024-02-09"),
	},
];

export default function page({params}: {params: {id: string}}) {
	return (
		<div className="flex flex-col w-full px-4">
			<div className="grid grid-cols-custom-7 ml-12 my-3">
				{header.map((item, index) => (
					<span className="text-sm text-gray-60% font-bold" key={index}>
						{item.label}
					</span>
				))}
			</div>
			<div>
				{Data.map((participant, index) => (
					<ParticipantItem key={index} item={participant} />
				))}
			</div>
		</div>
	);
}
