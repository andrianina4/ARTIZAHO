"use client";

import React, {useState} from "react";
import ModalItem from "./components/modalItem";
import {DateToday, TimeFill} from "@/constants/link/icons";
import ModalLayout from "@/components/modal";
import Content_two from "../../modalContent/content_two";
import {useQuery} from "@tanstack/react-query";
import {getArtisanDetail} from "@/services/artisan.service";
import ErrorComponent from "@/app/_global/error";
import LoadingComponent from "@/app/_global/loading";

export default function Page({params}: {params: {id: string}}) {
	// * Popup add Atelier
	const [open, setOpen] = useState(false);
	const handleToogle = () => {
		setOpen(!open);
	};

	const {id} = params;
	const {data, isLoading, isError} = useQuery({
		queryKey: ["Craftman"],
		queryFn: () => getArtisanDetail(id),
	});

	if (isLoading) return <LoadingComponent />;
	if (isError) return <ErrorComponent />;

	return (
		<div className="pt-4 px-4 flex flex-col w-3/4 gap-3">
			<div className="flex w-full gap-4">
				<span className="text-brown-80% font-bold w-1/2">Avalaibility date</span>
				<span className="text-brown-80% font-bold w-1/2">Hour</span>
			</div>
			<div className="flex w-full gap-2">
				<ModalItem leftIcon={<DateToday className="w-5 h-5" />} text="06/04/24" className="w-1/2" />
				<div className="flex w-1/2 gap-2">
					<ModalItem leftIcon={<TimeFill className="w-5 h-5" />} text="14:00-15:00" className="w-full" />
				</div>
			</div>
			<div className="flex w-full gap-2">
				<ModalItem leftIcon={<DateToday className="w-5 h-5" />} text="06/04/24" className="w-1/2" />
				<div className="flex w-1/2 gap-2">
					<ModalItem leftIcon={<TimeFill className="w-5 h-5" />} text="14:00-15:00" className="w-full" />
					<ModalItem leftIcon={<TimeFill className="w-5 h-5" />} text="14:00-15:00" className="w-full" />
				</div>
			</div>
			<div className="py-4 pl-10 text-brown">
				<span className="px-4 py-2 rounded-2xl hover:bg-white-40% cursor-pointer" onClick={handleToogle}>
					+ Add Availability
				</span>
			</div>
			<ModalLayout open={open} onClick={handleToogle} className="h-3/4 w-[830px]">
				<Content_two id={Number(id)} closePopup={handleToogle} />
			</ModalLayout>
		</div>
	);
}
