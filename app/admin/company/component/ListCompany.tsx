"use client";

import React, {useContext, useEffect, useState} from "react";
import {ICompany} from "@/types/ICompany";
import CompanyItem from "./component/CompanyItem";
import {SearchContext} from "../../provider/SearchProvider";
import {getAllCompany} from "./Call/Company";
import ErrorPage from "./status/ErrorPage";
import Waiter from "./status/Waiter";
import ListHeader from "@/components/ListHeader";
import {useQuery} from "@tanstack/react-query";

const headerList = [
	{id: 1, name: "name", label: "Name"},
	{id: 2, name: "email", label: "Email"},
	{id: 3, name: "phone", label: "Phone"},
	{id: 4, name: "location", label: "Location"},
	{id: 5, name: "created_at", label: "Created at"},
];

export default function ListCompany() {
	// * React Query
	const {isLoading, data, isError, error, isFetching, refetch} = useQuery({
		queryFn: () => getAllCompany(),
		queryKey: ["listCompany"],
		retryOnMount: false,
	});
	const refresh = () => {
		refetch();
	};

	// * FILTRE PAR SEARCH BAR
	const [FilteredData, setFilteredData] = useState<ICompany[]>(data?.data);
	const searchContext = useContext(SearchContext);
	useEffect(() => {
		if (data) {
			const filteredValues = data?.data.filter((value: ICompany) => {
				if (
					value.company_name?.toLocaleLowerCase().includes(searchContext.Value.toLocaleLowerCase()) ||
					value.company_mail?.toLocaleLowerCase().includes(searchContext.Value.toLocaleLowerCase())
				) {
					return value;
				}
			});
			setFilteredData(filteredValues);
		}
	}, [searchContext.Value, data]);

	if (isError) {
		console.error((error as Error).message);
		return <ErrorPage refresh={refresh} />;
	}

	return (
		<>
			<ListHeader headerList={headerList} gridStyle="grid-cols-custom-3 ml-4" />
			{!isLoading || !isFetching ? (
				<div>
					{FilteredData?.map((company, index) => (
						<CompanyItem key={index} company={company} />
					))}
				</div>
			) : (
				<Waiter />
			)}
		</>
	);
}
