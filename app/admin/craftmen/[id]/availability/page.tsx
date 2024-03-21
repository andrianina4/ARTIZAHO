"use client";

import React, {useState} from "react";
import ModalItem from "./components/modalItem";
import {CalendarIcon, Time} from "@/constants/link/icons";
import ModalLayout from "@/components/modal";
import Content_two from "../../modalContent/content_two";

export default function Page({params}: {params: {id: string}}) {
	// * Popup add Atelier
	const [open, setOpen] = useState(false);
	const handleToogle = () => {
		setOpen(!open);
	};

	return (
		<div className="flex flex-col w-3/4 gap-2">
			<div className="flex w-full gap-4">
				<span className="text-brown-80% font-bold w-1/2"> Avalaibility date</span>
				<span className="text-brown-80% font-bold w-1/2"> Hour</span>
			</div>
			<div className="flex w-full gap-2">
				<ModalItem leftIcon={<CalendarIcon />} text="06/04/24" className="w-1/2" />
				<div className="flex w-1/2 gap-2">
					<ModalItem leftIcon={<Time />} text="14:00-15:00" className="w-full" />
				</div>
			</div>
			<div className="flex w-full gap-2">
				<ModalItem leftIcon={<CalendarIcon />} text="06/04/24" className="w-1/2" />
				<div className="flex w-1/2 gap-2">
					<ModalItem leftIcon={<Time />} text="14:00-15:00" className="w-full" />
					<ModalItem leftIcon={<Time />} text="14:00-15:00" className="w-full" />
				</div>
			</div>
			<div className="py-4 pl-10 text-brown">
				<span className="px-4 py-2 rounded-2xl hover:bg-white-40% cursor-pointer" onClick={handleToogle}>
					+ Add Availability
				</span>
			</div>
			<ModalLayout open={open} onClick={handleToogle} className="w-auto h-2/3">
				<Content_two onClick={handleToogle} />
			</ModalLayout>
		</div>
	);
}
