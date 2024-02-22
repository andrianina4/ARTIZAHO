import ListHeader from "@/components/ListHeader";
import Button from "@/components/button";
import {Add} from "@/constants/link/icons";
import {IPlanningItem} from "@/types/IWorkshop";
import React from "react";
import PlanningItem from "./component/PlanningItem";

const headerList = [
	{id: 1, name: "date", label: "Date"},
	{id: 2, name: "time", label: "Time"},
	{id: 3, name: "craftsman", label: "Craftsman"},
	{id: 4, name: "location", label: "Location"},
	{id: 5, name: "price", label: "Price"},
];

const data: IPlanningItem[] = [
	{
		id: 1,
		date: "2024-02-22",
		time_start: "09:00 AM",
		time_end: "11:00 AM",
		craftsman: {name: "John Doe", img: "/temp/trainer-1.jpeg"},
		location: "123 Main Street",
		price: 50,
	},
	{
		id: 2,
		date: "2024-02-23",
		time_start: "10:00 AM",
		time_end: "12:00 PM",
		craftsman: {name: "Jane Smith", img: "/temp/trainer-1.jpeg"},
		location: "456 Elm Street",
		price: 60,
	},
	{
		id: 3,
		date: "2024-02-24",
		time_start: "11:00 AM",
		time_end: "01:00 PM",
		craftsman: {name: "David Johnson", img: "/temp/trainer-1.jpeg"},
		location: "789 Oak Street",
		price: 70,
	},
	{
		id: 4,
		date: "2024-02-25",
		time_start: "01:00 PM",
		time_end: "03:00 PM",
		craftsman: {name: "Emily Williams", img: "/temp/trainer-1.jpeg"},
		location: "101 Pine Street",
		price: 80,
	},
];

export default function page({params}: {params: {id: string}}) {
	return (
		<div className="flex flex-col w-full px-4">
			<ListHeader headerList={headerList} gridStyle="grid-cols-custom-10 ml-12 my-3" />
			<div>
				{data.map((participant, index) => (
					<PlanningItem key={index} item={participant} />
				))}
			</div>
			<div className="flex justify-center">
				<div>
					<Button leftIcon={<Add />} content="Add a date for this workshop" />
				</div>
			</div>
		</div>
	);
}
