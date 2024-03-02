import React, {useContext, useEffect, useState} from "react";
import CraftemenItem from "../craftemenItem";
import {ICraftman, ICraftmanItem} from "@/types/ICraftman";
import {FlowerOne} from "@/constants/link/icons";
import ListHeader from "@/components/ListHeader";
import {SearchContext} from "../../provider/SearchProvider";
import axios from "axios";
import { useQuery } from "react-query";

const headerList = [
	{id: 1, name: "name", label: "Name"},
	{id: 2, name: "know-how", label: "Know-how"},
	{id: 3, name: "workshop", label: "Workshop"},
	{id: 4, name: "clients", label: "Clients"},
	{id: 5, name: "rating", label: "Rating"},
];

const getCraftmen = async () => {
	const response = await axios.get<ICraftmanItem[]>('');
	return response.data
  };


export default function ListSection() {
	
	const{isLoading, data}= useQuery('getCraftmen',getCraftmen)
	// * VALEURS PAR DEFAUT


	// * FILTRE PAR SEARCH BAR
	const [FilteredData, setFilteredData] = useState<ICraftmanItem[]>(data?.data || []);
	const searchContext = useContext(SearchContext);
	useEffect(() => {
		const filteredValues = data?.data.filter((value:any) => {
			if (
				value.name
					?.toLocaleLowerCase()
					.includes(searchContext.Value.toLocaleLowerCase()) ||
				value.expertise
					?.toLocaleLowerCase()
					.includes(searchContext.Value.toLocaleLowerCase()) 
				// value.craftman_workshop?.name
				// 	?.toLocaleLowerCase()
				// 	.includes(searchContext.Value.toLocaleLowerCase())
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
