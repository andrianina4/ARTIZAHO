"use client";

import ListHeader from "@/components/ListHeader";
import Button from "@/components/button";
import {Add} from "@/constants/link/icons";
import {IPlanningItem, IScheduleWorkshop} from "@/types/IWorkshop";
import React, {useState} from "react";
import PlanningItem from "./component/PlanningItem";
import ModalLayout from "@/components/modal";
import FormPlanning from "./component/FormPlanning";
import {useQuery} from "@tanstack/react-query";
import {getScheduleWorkshop} from "@/services/admin/adminWorkshop.service";
import LoadingComponent from "@/app/_global/loading";
import ErrorComponent from "@/app/_global/error";

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
	const {id} = params;
	const {data, isLoading, isError} = useQuery({
		queryKey: ["adminWorkshopSchedule"],
		queryFn: () => getScheduleWorkshop(Number(id)),
	});
	// * Popup add Atelier
	const [open, setOpen] = useState(false);
	const handleToogle = () => {
		setOpen(!open);
	};

	if (isLoading) {
		return <LoadingComponent />;
	} else if (isError) {
		return <ErrorComponent />;
	}

	return (
		<div className="flex flex-col w-full px-4">
			<ListHeader headerList={headerList} gridStyle="grid-cols-custom-10 ml-12 my-3" />
			<div>
				{data?.map((item: IScheduleWorkshop, index: number) => (
					<PlanningItem key={index} item={item} />
				))}
			</div>
			<div className="mt-8 flex justify-center">
				<div>
					<Button leftIcon={<Add />} content="Add a date for this workshop" onClick={handleToogle} />
				</div>
			</div>
			<ModalLayout open={open} onClick={handleToogle} className="w-auto h-2/3">
				<FormPlanning id={Number(id)} close={handleToogle} />
			</ModalLayout>
		</div>
	);
}
