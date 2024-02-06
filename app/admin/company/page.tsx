"use client";

import Button from "@/components/button";
import Divider from "@/components/divider";
import Select from "@/components/select";
import {IClient} from "@/types/IClient";
import {ISelect} from "@/types/IField";
import React, {useState} from "react";
import ClientItem from "../client/component/clientItem";
import {HomeAdd} from "@/constants/link/icons";
import ModalLayout from "@/components/modal";
import FormEntreprise from "./component/FormEntreprise";

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

const headerList = ["Name", "Email", "Phone", "Location", "Created at"];

const data: Array<IClient> = [
	{
		client_name: "Antonio Hery",
		client_image: "/temp/vase.png",
		client_mail: "antonio@gmail.com",
		client_tel: "0343403434",
		client_location: "Antananarivo",
		client_created_at: new Date(),
		client_type: "company",
	},
	{
		client_name: "Nick Steven",
		client_image: "/temp/vase.png",
		client_mail: "nick@gmail.com",
		client_tel: "0343403434",
		client_location: "Antananarivo",
		client_created_at: new Date(),
		client_type: "individuals",
	},
	{
		client_name: "Onja Nirina",
		client_image: "/temp/vase.png",
		client_mail: "onja@gmail.com",
		client_tel: "0343403434",
		client_location: "Antananarivo",
		client_created_at: new Date(),
		client_type: "company",
	},
];

export default function page() {
	const [Data, setData] = useState<IClient[]>(data);

	const [open, setOpen] = useState(false);
	const handleToogle = () => {
		setOpen(!open);
	};

	return (
		<div className="flex flex-col">
			<div className="flex justify-between items-center">
				<div className="flex gap-2 items-center">
					<Button content="Add Company" leftIcon={<HomeAdd />} onClick={handleToogle} />
				</div>
				<div className="flex flex-row items-center w-60 gap-7">
					<div className="font-bold w-2/3">Filter by</div>
					<Select values={selectItem} className="!bg-white !h-10 !rounded-xl" />
				</div>
			</div>
			<Divider />
			<div className="grid grid-cols-custom-3 ml-4">
				{headerList.map((item, index) => (
					<span className="text-gray-60% font-bold text-sm" key={index}>
						{item}
					</span>
				))}
			</div>
			<div>
				{Data.map((client, index) => (
					<ClientItem key={index} client={client} />
				))}
			</div>
      <ModalLayout open={open} onClick={handleToogle} className="w-1/2 h-2/3">
				<FormEntreprise />
			</ModalLayout>
		</div>
	);
}
