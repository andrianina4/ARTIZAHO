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
	{id: 3, name: "craftsman", label: "Craftsman"},
	{id: 4, name: "participants", label: "Participants"},
	{id: 5, name: "duration", label: "Duration"},
];

const data: Array<IWrokshopItem> = [
	{
		shop_id: 1,
		shop_name: "Sculpture sur bois",
		shop_know_how: "Sculpture",
		shop_color: "bronze",
		shop_icon: <FlowerOne />,
		shop_craftsman: {name: "Jean Dupont", image: "/temp/trainer-1.jpeg"},
		shop_nb_participants: 10,
		shop_duration: "2h",
	},
	{
		shop_id: 2,
		shop_name: "Poterie",
		shop_know_how: "Poterie",
		shop_color: "blue",
		shop_icon: <FlowerOne />,
		shop_craftsman: {name: "Marie Martin", image: "/temp/trainer-1.jpeg"},
		shop_nb_participants: 8,
		shop_duration: "1h30",
	},
	{
		shop_id: 3,
		shop_name: "Peinture à l'huile",
		shop_know_how: "Peinture",
		shop_color: "green",
		shop_icon: <FlowerOne />,
		shop_craftsman: {name: "Jacques Tremblay", image: "/temp/trainer-1.jpeg"},
		shop_nb_participants: 12,
		shop_duration: "3h",
	},
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
