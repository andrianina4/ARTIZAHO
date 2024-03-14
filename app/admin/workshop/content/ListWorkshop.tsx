import ListHeader from "@/components/ListHeader";
import {IWorkShop} from "@/types/IWorkshop";
import React, {useContext, useEffect, useState} from "react";
import WorkshopItem from "../component/WorkshopItem";
import {SearchContext} from "../../provider/SearchProvider";
import {getWorkShop} from "@/services/workshop.service";
import {useQuery} from "@tanstack/react-query";

const headerList = [
	{id: 1, name: "workshop", label: "Workshop"},
	{id: 2, name: "know_how", label: "Know-How"},
	{id: 4, name: "participants", label: "Participants"},
];

export default function ListWorkshop() {
	// * VALEURS PAR DEFAUT
	const {data, isLoading, isError} = useQuery({
		queryKey: ["adminWorkshop"],
		queryFn: () => getWorkShop(),
	});

	// * FILTRE PAR SEARCH BAR
	const [FilteredData, setFilteredData] = useState<IWorkShop[]>([]);
	const searchContext = useContext(SearchContext);
	useEffect(() => {
		if (!isLoading) {
			const filteredValues = data!.filter((value: IWorkShop) => {
				if (value.title?.toLocaleLowerCase().includes(searchContext.Value.toLocaleLowerCase())) {
					return value;
				}
			});
			setFilteredData(filteredValues);
		}
	}, [searchContext.Value, isLoading, data]);

	if (isLoading) {
		return <div>Loading</div>;
	}
	if (isError) {
		return <div>Error</div>;
	}

	return (
		<>
			<ListHeader headerList={headerList} gridStyle="grid-cols-custom-9 ml-4 mt-10 mb-4" />
			<div>
				{FilteredData.map((item) => (
					<WorkshopItem key={item.id} workshop={item} />
				))}
			</div>
		</>
	);
}
