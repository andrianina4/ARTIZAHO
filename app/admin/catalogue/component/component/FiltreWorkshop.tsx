"use client";

import {Line, Plus} from "@/constants/link/icons";
import {IWorkShop} from "@/types/IWorkshop";
import React, {useContext, useState} from "react";
import WorkshopItem from "./WorkshopItem";
import {CalendarEventsContext} from "../provider/CalendarEventsProvider";
import {getWorkShopAdmin} from "@/services/admin/adminWorkshop.service";
import {useQuery} from "@tanstack/react-query";
import LoadingComponent from "@/app/_global/loading";
import ErrorComponent from "@/app/_global/error";

export default function FiltreWorkshop() {
	const {data, isLoading, isError} = useQuery({
		queryKey: ["adminWorkshop"],
		queryFn: () => getWorkShopAdmin(),
	});

	const EventsFromContext = useContext(CalendarEventsContext);
	// *  Control the checkboxes
	const [checked, setChecked] = useState<{[key: number]: boolean}>({});
	const handleChecked = (key: number) => {
		setChecked({
			...checked,
			[key]: !checked[key],
		});
		if (checked[key]) {
			EventsFromContext.removeFilterByWorkshop(key);
		} else {
			EventsFromContext.filterByWorkshop(key);
		}
	};

	// TODO : asiana effet mba tsaratsara
	const [Show, setShow] = useState(false);
	const switchShow = () => {
		setShow(!Show);
	};

	if (isLoading) return <LoadingComponent />;
	if (isError) return <ErrorComponent />;

	return (
		<div className="w-52">
			<div className="flex items-center justify-between font-bold mt-7 mb-3">
				<div>List of all workshops</div>
				<div className="w-4 h-4 bg-white rounded-full cursor-pointer" onClick={switchShow}>
					{Show ? <Line style={{transform: "rotate(90deg)"}} /> : <Plus />}
				</div>
			</div>
			{Show && (
				<div className="flex flex-col gap-1">
					{data?.map((item: IWorkShop, index) => (
						<div key={index} className="flex flex-row items-center gap-2">
							<input
								key={index}
								className="checkbox border-[#917155] checked:border-bronze [--chkbg:theme(colors.bronze)] [--chkfg:white]"
								type="checkbox"
								id={item.id.toString()}
								checked={checked[item.id]}
								onChange={() => handleChecked(item.id)}
							/>
							<WorkshopItem workshop={item} />
						</div>
					))}
				</div>
			)}
		</div>
	);
}
