import ListHeader from "@/components/ListHeader";
import {FlowerOne} from "@/constants/link/icons";
import {IWorkShop, IWrokshopItem} from "@/types/IWorkshop";
import React, {useContext, useEffect, useState} from "react";
import WorkshopItem from "../component/WorkshopItem";
import {SearchContext} from "../../provider/SearchProvider";
import {WorkshopContext} from "../provider";

const headerList = [
	{id: 1, name: "workshop", label: "Workshop"},
	{id: 2, name: "know_how", label: "Know-How"},
	{id: 4, name: "participants", label: "Participants"},
];

export default function ListWorkshop() {
	// * VALEURS PAR DEFAUT
	const {WorshopItems, isLoading, isError} = useContext(WorkshopContext);

	// * FILTRE PAR SEARCH BAR
	const [FilteredData, setFilteredData] = useState<IWorkShop[]>([]);
	const searchContext = useContext(SearchContext);
	useEffect(() => {
		if (!isLoading) {
			const filteredValues = WorshopItems.filter((value: IWorkShop) => {
				if (value.title?.toLocaleLowerCase().includes(searchContext.Value.toLocaleLowerCase())) {
					return value;
				}
			});
			setFilteredData(filteredValues);
		}
	}, [searchContext.Value, isLoading]);

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
