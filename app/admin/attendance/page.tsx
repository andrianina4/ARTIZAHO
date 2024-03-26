"use client";

import Divider from "@/components/divider";
import React, {useContext, useEffect, useState} from "react";
import AttendanceItem from "./component/attendanceItem";
import Select from "@/components/Select";
import {ISelect} from "@/types/IField";
import {IAttendance} from "@/types/IAttendance";
import {SearchContext} from "../provider/SearchProvider";
import {useQuery} from "@tanstack/react-query";
import {getAttendanceAdmin} from "@/services/admin/adminAttendance.service";
import LoadingComponent from "@/app/_global/loading";
import ErrorComponent from "@/app/_global/error";

const headerList = ["ID", "Client Name", "Workshop", "Participants", "Client Type", "Reservation Date", "Status"];

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

function Page() {
	// * VALEURS PAR DEFAUT
	const {data, isLoading, isError} = useQuery({
		queryKey: ["adminAttendance"],
		queryFn: () => getAttendanceAdmin(),
	});

	// * FILTRE PAR SEARCH BAR
	const [FilteredData, setFilteredData] = useState<IAttendance[]>([]);
	const searchContext = useContext(SearchContext);
	useEffect(() => {
		if (!isLoading) {
			const filteredValues = data!.filter((value) =>
				value?.workshop_bookable?.workshop?.title?.toLocaleLowerCase().includes(searchContext.Value.toLocaleLowerCase())
			);
			setFilteredData(filteredValues);
		}
	}, [searchContext.Value, isLoading, data]);

	if (isLoading) return <LoadingComponent />;

	if (isError) return <ErrorComponent />;

	return (
		<div className="flex flex-col max-screen overflow-x-auto ">
			<div className="flex justify-between items-center">
				<div className="bg-white text-brown px-2.5 py-2 rounded-lg h-10">Reservations</div>
				<div className="flex flex-row items-center w-60 gap-7">
					<div className="font-bold w-2/3   ">Filter by</div>
					<Select options={selectItem} className="!bg-white !h-10 !rounded-xl" />
				</div>
			</div>
			<Divider />
			<div className=" w-[980px] xl:w-full ">
				<div className="grid grid-cols-custom ml-4 mb-4">
					{headerList.map((item, index) => {
						return (
							<span className="text-gray-60% font-bold text-sm" key={index}>
								{item}
							</span>
						);
					})}
				</div>
				<div>
					{FilteredData?.map((item: IAttendance, index) => (
						<AttendanceItem key={index} attendance={item} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Page;
