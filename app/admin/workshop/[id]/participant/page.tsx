import {FlowerOne} from "@/constants/link/icons";
import {IParticipantWorkshop} from "@/types/IWorkshop";
import React from "react";
import ParticipantItem from "./component/ParticipantItem";
import ListHeader from "@/components/ListHeader";

const headerList = [
	{id: 1, name: "id", label: "ID"},
	{id: 2, name: "client_name", label: "Client Name"},
	{id: 3, name: "workshop", label: "Workshop"},
	{id: 4, name: "participants", label: "Participants"},
	{id: 5, name: "client_type", label: "Client Type"},
	{id: 6, name: "reservation_date", label: "Reservation Date"},
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
			<ListHeader headerList={headerList} gridStyle="grid-cols-custom-7 ml-12 my-3" />
			<div>
				{Data.map((participant, index) => (
					<ParticipantItem key={index} item={participant} />
				))}
			</div>
		</div>
	);
}
