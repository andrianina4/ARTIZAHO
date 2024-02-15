"use client";

import Button from "@/components/button";
import ModalLayout from "@/components/modal";
import Select from "@/components/select";
import {FlowerOne, UserAddFill} from "@/constants/link/icons";
import {ISelect} from "@/types/IField";
import React, {useState} from "react";
import FormWorkshop from "./component/FormWorkshop";
import {IWrokshopItem} from "@/types/IWorkshop";
import WorkshopItem from "./component/WorkshopItem";

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

const headerList = ["Workshop", "Know-How", "Craftsman", "Participants", "Duration"];

const listWorkshop: Array<IWrokshopItem> = [
	{
		shop_id: 1,
		shop_name: "Sculpture sur bois",
		shop_know_how: "Sculpture",
		shop_color: "bronze",
		shop_icon: <FlowerOne />,
		shop_craftsman: {name: "Jean Dupont", image: "/temp/trainer-1.jpeg"},
		shop_nb_participants: 10,
		shop_duration: "2h",
	},
	{
		shop_id: 2,
		shop_name: "Poterie",
		shop_know_how: "Poterie",
		shop_color: "blue",
		shop_icon: <FlowerOne />,
		shop_craftsman: {name: "Marie Martin", image: "/temp/trainer-1.jpeg"},
		shop_nb_participants: 8,
		shop_duration: "1h30",
	},
	{
		shop_id: 3,
		shop_name: "Peinture à l'huile",
		shop_know_how: "Peinture",
		shop_color: "green",
		shop_icon: <FlowerOne />,
		shop_craftsman: {name: "Jacques Tremblay", image: "/temp/trainer-1.jpeg"},
		shop_nb_participants: 12,
		shop_duration: "3h",
	},
];

export default function Page() {
	// * Popup add Atelier
	const [open, setOpen] = useState(false);
	const handleToogle = () => {
		setOpen(!open);
	};

	return (
		<div className="flex flex-col">
			<div className="flex justify-between items-center">
				<div className="flex gap-2 items-center">
					<Button content="Add Workshop" leftIcon={<UserAddFill />} onClick={handleToogle} />
				</div>
				<div className="flex flex-row items-center w-60 gap-7">
					<div className="font-bold w-2/3">Filter by</div>
					<Select values={selectItem} className="!bg-white !h-10 !rounded-xl" />
				</div>
			</div>
			{/* CONTENU */}
			<div className="grid grid-cols-custom-9 ml-4 mt-10 mb-4">
				{headerList.map((item, index) => {
					return (
						<span className="text-gray-60% font-bold text-sm" key={index}>
							{item}
						</span>
					);
				})}
			</div>
			<div>
				{listWorkshop.map((item, index) => (
					<WorkshopItem key={index} workshop={item} />
				))}
			</div>
			{/* POPUP ADD WORKSHOP */}
			<ModalLayout open={open} onClick={handleToogle} className="w-auto h-4/5">
				<FormWorkshop />
			</ModalLayout>
		</div>
	);
}
