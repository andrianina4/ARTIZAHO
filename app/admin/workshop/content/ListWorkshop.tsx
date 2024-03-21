import ListHeader from "@/components/ListHeader";
import {IWorkShop} from "@/types/IWorkshop";
import React, {useContext, useEffect, useState} from "react";
import WorkshopItem from "../component/WorkshopItem";
import {SearchContext} from "../../provider/SearchProvider";
import {useQuery} from "@tanstack/react-query";
import {getWorkShopAdmin} from "@/services/admin/adminWorkshop.service";
import ErrorComponent from "@/app/_global/error";
import LoadingComponent from "@/app/_global/loading";

const headerList = [
	{id: 1, name: "workshop", label: "Workshop"},
	{id: 2, name: "know_how", label: "Know-How"},
	{id: 3, name: "participants", label: "Participants"},
];

export default function ListWorkshop() {
	const {data, isLoading, isError} = useQuery({
		queryKey: ["adminWorkshop"],
		queryFn: () => getWorkShopAdmin(),
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
		return <LoadingComponent />;
	}
	if (isError) {
		return <ErrorComponent />;
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
