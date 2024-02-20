import React from "react";
import Divider from "@/components/divider";
import Select from "@/components/select";
import {ISelect} from "@/types/IField";
import ListClient from "./content/ListClient";
import ListHeader from "@/components/ListHeader";

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

const headerList = [
	{id: 1, name: "name", label: "Name"},
	{id: 2, name: "email", label: "Email"},
	{id: 3, name: "phone", label: "Phone"},
	{id: 4, name: "location", label: "Location"},
	{id: 5, name: "created_at", label: "Created at"},
];

export default function Page() {
	return (
		<div className="flex flex-col">
			<div className="flex justify-between items-center">
				<div className="flex gap-2 items-center">
					<span className="text-brown bg-white py-2 px-3 rounded-md cursor-default">
						Individuals
					</span>
				</div>
				<div className="flex flex-row items-center w-60 gap-7">
					<div className="font-bold w-2/3">Filter by</div>
					<Select values={selectItem} className="!bg-white !h-10 !rounded-xl" />
				</div>
			</div>
			<Divider />
			<ListHeader headerList={headerList} gridStyle="grid-cols-custom-3 ml-4 mb-4" />
			<ListClient />
		</div>
	);
}
