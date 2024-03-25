"use client";

import Button from "@/components/button";
import {CalendarIcon, UserAddFill} from "@/constants/link/icons";
import React, {useState} from "react";
import ModalLayout from "@/components/modal";
import ListSection from "./content/listSection";
import {ISelect} from "@/types/IField";
import Content_one from "./modalContent/content_one";
import Content_two from "./modalContent/content_two";
import SelectCustom from "@/components/Select";
import {ArtisanIdContextProvider} from "../provider/ArtisanIdProvider";

type Props = {};

interface Range {
	startDate: Date;
	endDate: Date;
	key: string;
}

const selectItem: Array<ISelect> = [
	{value: "name", label: "Name"},
	{
		value: "note",
		label: "Note",
	},
];

function Page({}: Props) {
	const [open, setOpen] = useState(false);
	const handleToogle = () => setOpen(!open);

	return (
		<>
			<div className="h-full flex flex-col">
				<div className="flex flex-row justify-between items-center">
					<div className="">
						<Button leftIcon={<UserAddFill />} content="Add craftman" className="" onClick={handleToogle} />
					</div>
					<div className="flex flex-row items-center w-60 gap-7">
						<div className="font-bold w-2/3">Filter by</div>
						<SelectCustom options={selectItem} className="!bg-white !h-10 !rounded-xl" />
					</div>
					{/* Modal craftmen */}
					<ModalLayout open={open} onClick={handleToogle} className="h-[650px] w-[830px]">
						<ArtisanIdContextProvider>
							<Content_one onClick={handleToogle} />
						</ArtisanIdContextProvider>
					</ModalLayout>
				</div>
				<div className="h-[90%]">
					<ListSection />
				</div>
			</div>
		</>
	);
}

export default Page;
