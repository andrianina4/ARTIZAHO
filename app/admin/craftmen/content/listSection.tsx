import React, {useContext, useEffect, useState} from "react";
import CraftemenItem from "../craftemenItem";
import {ICraftman, ICraftmanItem} from "@/types/ICraftman";
import {FlowerOne} from "@/constants/link/icons";
import ListHeader from "@/components/ListHeader";
import {SearchContext} from "../../provider/SearchProvider";
import axios from "axios";
import {useQuery} from "react-query";
import {getArtisan} from "@/services/artisan.service";
import ErrorComponent from "@/app/_global/error";
import LoadingComponent from "@/app/_global/loading";

const headerList = [
	{id: 1, name: "name", label: "Name"},
	{id: 2, name: "know-how", label: "Know-how"},
	{id: 3, name: "workshop", label: "Workshop"},
	{id: 4, name: "clients", label: "Clients"},
	{id: 5, name: "rating", label: "Rating"},
];

export default function ListSection() {
	const {isLoading, isError, data} = useQuery({
		queryKey: ["Craftman"],
		queryFn: () => getArtisan(),
	});
	// * VALEURS PAR DEFAUT

	// * FILTRE PAR SEARCH BAR
	const [FilteredData, setFilteredData] = useState<ICraftman[]>([]);
	const searchContext = useContext(SearchContext);
	useEffect(() => {
		console.log(data);
		const filteredValues = data?.filter((value: ICraftman) => {
			if (
				value.name?.toLocaleLowerCase().includes(searchContext.Value.toLocaleLowerCase()) ||
				value.expertise?.toLocaleLowerCase().includes(searchContext.Value.toLocaleLowerCase())
			) {
				return value;
			}
		});
		if (filteredValues) {
			setFilteredData(filteredValues);
		}
	}, [searchContext.Value, isLoading, data]);

	if (isLoading) {
		return <LoadingComponent />;
	}
	if (isError) {
		return <ErrorComponent />;
	}

	return (
		<>
			<ListHeader headerList={headerList} gridStyle="grid-cols-custom-2 ml-4 mt-10 mb-4" />
			<div>
				{FilteredData?.map((craftman, index) => (
					<CraftemenItem key={index} craftman={craftman} />
				))}
			</div>
		</>
	);
}
