import React, {useContext, useEffect, useState} from "react";
import CraftemenItem from "../craftemenItem";
import {ICraftmanItem} from "@/types/ICraftman";
import {FlowerOne} from "@/constants/link/icons";
import ListHeader from "@/components/ListHeader";
import {SearchContext} from "../../provider/SearchProvider";

const headerList = [
	{id: 1, name: "name", label: "Name"},
	{id: 2, name: "know-how", label: "Know-how"},
	{id: 3, name: "workshop", label: "Workshop"},
	{id: 4, name: "clients", label: "Clients"},
	{id: 5, name: "rating", label: "Rating"},
];

const data: ICraftmanItem[] = [
	{
		craftman_name: "Mahefa",
		craftman_image: "/temp/vase.png",
		craftman_domaine: "Floral",
		craftman_workshop: {
			name: "Bouquet en vase et 3 autres",
			icon: <FlowerOne />,
			color: "bronze",
		},
		craftman_nb_client: 47,
	},
	{
		craftman_name: "Maeva",
		craftman_image: "/temp/vase.png",
		craftman_domaine: "Floral",
		craftman_workshop: {
			name: "Bouquet sur mousse et 1 autre ",
			icon: <FlowerOne />,
			color: "blue",
		},
		craftman_nb_client: 52,
	},
];

export default function ListSection() {
	// * VALEURS PAR DEFAUT
	const [Data, setData] = useState<ICraftmanItem[]>(data);

	// * FILTRE PAR SEARCH BAR
	const [FilteredData, setFilteredData] = useState<ICraftmanItem[]>([]);
	const searchContext = useContext(SearchContext);
	useEffect(() => {
		const filteredValues = Data.filter((value) => {
			if (
				value.craftman_name
					?.toLocaleLowerCase()
					.includes(searchContext.Value.toLocaleLowerCase()) ||
				value.craftman_domaine
					?.toLocaleLowerCase()
					.includes(searchContext.Value.toLocaleLowerCase()) ||
				value.craftman_workshop?.name
					?.toLocaleLowerCase()
					.includes(searchContext.Value.toLocaleLowerCase())
			) {
				return value;
			}
		});
		setFilteredData(filteredValues);
	}, [searchContext.Value]);

	return (
		<>
			<ListHeader headerList={headerList} gridStyle="grid-cols-custom-2 ml-4 mt-10 mb-4" />
			<div>
				{FilteredData.map((craftman, index) => (
					<CraftemenItem key={index} craftman={craftman} />
				))}
			</div>
		</>
	);
}
