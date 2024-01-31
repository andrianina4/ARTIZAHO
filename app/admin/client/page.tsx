"use client";

import React, {useState} from "react";
import Divider from "@/components/divider";
import ClientItem from "./component/clientItem";
import Select from "@/components/select";
import {ISelect} from "@/types/IField";
import {IClient} from "@/types/IClient";

const headerList = ["Nom", "Email", "Phone", "Location", "Created at"];

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
function Page() {
	const [content, setContent] = useState("company");
	const switchContent = () => {
		setContent(content === "company" ? "individuals" : "company");
	};
	return (
		<div className="flex flex-col  ">
			<div className="flex justify-between items-center">
				<div className="flex gap-2 items-center">
					{content == "company" ? (
						<span className="text-brown bg-white py-2 px-3 rounded-md cursor-default">Company</span>
					) : (
						<span className="opacity-50 py-2 px-3 cursor-pointer" onClick={switchContent}>
							Company
						</span>
					)}
					{content == "individuals" ? (
						<span className="text-brown bg-white py-2 px-3 rounded-md cursor-default">
							Individuals
						</span>
					) : (
						<span className="opacity-50 py-2 px-3 cursor-pointer" onClick={switchContent}>
							Individuals
						</span>
					)}
				</div>
				<div className="flex flex-row items-center w-60 gap-7">
					<div className="font-bold w-2/3">Filter by</div>
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
				{data.map((client, index) => {
					if (content === client.client_type) return <ClientItem key={index} client={client} />;
				})}
			</div>
		</div>
	);
}

export default Page;
