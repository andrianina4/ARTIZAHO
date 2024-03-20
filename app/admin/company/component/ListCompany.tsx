"use client";

import React, {useContext, useEffect, useState} from "react";
import {ICompany} from "@/types/ICompany";
import CompanyItem from "./component/CompanyItem";
import {SearchContext} from "../../provider/SearchProvider";
import ListHeader from "@/components/ListHeader";
import {useQuery} from "@tanstack/react-query";
import LoadingComponent from "@/app/_global/loading";
import ErrorComponent from "@/app/_global/error";

const data: ICompany[] = [
	{
		company_name: "Codeo Travel",
		company_image: "/temp/vase.png",
		company_mail: "codeo@gmail.com",
		company_tel: "0343403434",
		company_location: "Antananarivo",
		company_created_at: new Date("2024-02-20T09:01:01.000Z"),
		company_type: "company",
	},
	{
		company_name: "Baobab Travel",
		company_image: "/temp/vase.png",
		company_mail: "baobab@gmail.com",
		company_tel: "0343403434",
		company_location: "Antananarivo",
		company_created_at: new Date("2024-02-20T09:01:01.000Z"),
		company_type: "individuals",
	},
	{
		company_name: "Travel Life",
		company_image: "/temp/vase.png",
		company_mail: "life@gmail.com",
		company_tel: "0343403434",
		company_location: "Antananarivo",
		company_created_at: new Date("2024-02-20T09:01:01.000Z"),
		company_type: "company",
	},
];

const headerList = [
	{id: 1, name: "name", label: "Name"},
	{id: 2, name: "email", label: "Email"},
	{id: 3, name: "phone", label: "Phone"},
	{id: 4, name: "location", label: "Location"},
	{id: 5, name: "created_at", label: "Created at"},
];

export default function ListCompany() {
	// TODO : create custom hook for Company
	// * React Query
	// const {isLoading, data, isError, error, isFetching, refetch} = useQuery({
	// 	queryFn: () => getAllCompany(),
	// 	queryKey: ["listCompany"],
	// 	retryOnMount: false,
	// });

	// * FILTRE PAR SEARCH BAR
	const [FilteredData, setFilteredData] = useState<ICompany[]>(data);
	const searchContext = useContext(SearchContext);
	useEffect(() => {
		if (data) {
			const filteredValues = data?.filter((value: ICompany) => {
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

	// if (isError) {
	// 	console.error((error as Error).message);
	// 	return <ErrorPage  />;
	// }

	// if (isLoading) {
	// 	return <LoadingComponent />;
	// }
	// if (isError) {
	// 	return <ErrorComponent />;
	// }

	return (
		<>
			<ListHeader headerList={headerList} gridStyle="grid-cols-custom-3 ml-4" />
			<div>
				{FilteredData?.map((company, index) => (
					<CompanyItem key={index} company={company} />
				))}
			</div>
		</>
	);
}
