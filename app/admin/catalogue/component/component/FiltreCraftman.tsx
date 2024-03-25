"use client";

import {Line, Plus} from "@/constants/link/icons";
import {IPanelCraftmen} from "@/types/IWorkshop";
import React, {useContext, useState} from "react";
import CraftmanItem from "./CraftmanItem";
import {CalendarEventsContext} from "../provider/CalendarEventsProvider";
import {getArtisan} from "@/services/artisan.service";
import {useQuery} from "@tanstack/react-query";
import {ICraftman} from "@/types/ICraftman";
import ErrorComponent from "@/app/_global/error";
import LoadingComponent from "@/app/_global/loading";

export default function FiltreCraftman() {
	const {data, isLoading, isError} = useQuery({
		queryKey: ["AdminCraftman"],
		queryFn: () => getArtisan(),
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
			EventsFromContext.removeFilterByCraftsman(key);
		} else {
			EventsFromContext.filterByCraftsman(key);
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
				<div>List of all craftmen</div>
				<div className="w-4 h-4 bg-white rounded-full cursor-pointer" onClick={switchShow}>
					{Show ? <Line style={{transform: "rotate(90deg)"}} /> : <Plus />}
				</div>
			</div>
			{Show && (
				<div className="flex flex-col gap-1">
					{data?.map((item: ICraftman, index: number) => (
						<div key={index} className="flex flex-row items-center gap-2">
							<input
								key={index}
								className="checkbox border-[#917155] checked:border-bronze [--chkbg:theme(colors.bronze)] [--chkfg:white]"
								type="checkbox"
								id={item.id.toString()}
								checked={checked[item.id]}
								onChange={() => handleChecked(item.id)}
							/>
							<CraftmanItem craftman={item} />
						</div>
					))}
				</div>
			)}
		</div>
	);
}
