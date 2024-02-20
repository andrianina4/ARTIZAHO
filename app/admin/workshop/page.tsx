"use client";

import Button from "@/components/button";
import ModalLayout from "@/components/modal";
import Select from "@/components/select";
import {UserAddFill} from "@/constants/link/icons";
import {ISelect} from "@/types/IField";
import React, {useState} from "react";
import FormWorkshop from "./component/FormWorkshop";
import ListWorkshop from "./content/ListWorkshop";

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
			<ListWorkshop />
			{/* POPUP ADD WORKSHOP */}
			<ModalLayout open={open} onClick={handleToogle} className="w-auto h-4/5">
				<FormWorkshop />
			</ModalLayout>
		</div>
	);
}
