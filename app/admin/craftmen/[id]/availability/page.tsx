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
import {IAvailability, IHour} from "@/types/ICraftman";
import {convertTime, formatDateForAvailability} from "@/utils/Format";

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
				<span className="text-brown-80% font-bold w-3/5">Avalaibility date</span>
				<span className="text-brown-80% font-bold w-full">Hour</span>
			</div>

			{data?.availabilities.map((item: IAvailability, index: number) => (
				<div className="w-full flex flex-raw gap-3 " key={index}>
					<div className="w-3/5">
						<ModalItem
							leftIcon={<DateToday className="w-5 h-5" />}
							text={
								item.start_date === item.end_date
									? formatDateForAvailability(item.start_date)
									: formatDateForAvailability(item.start_date) + " - " + formatDateForAvailability(item.end_date)
							}
						/>
					</div>
					<div className="w-full flex flex-row gap-2">
						{item.hours.map((hour: IHour, index: number) => (
							<div className="w-full gap-2" key={index}>
								<ModalItem
									leftIcon={<TimeFill className="w-5 h-5" />}
									text={convertTime(hour.start_time) + " - " + convertTime(hour.end_time)}
								/>
							</div>
						))}
					</div>
				</div>
			))}

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
