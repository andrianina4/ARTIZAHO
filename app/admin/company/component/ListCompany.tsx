"use client";

import React, {useContext, useEffect, useState} from "react";
import {ICompany} from "@/types/ICompany";
import CompanyItem from "./component/CompanyItem";
import {SearchContext} from "../../provider/SearchProvider";
import {getAllCompany} from "./Call/Company";
import {useQuery} from "react-query";
import ErrorPage from "./status/ErrorPage";
import Waiter from "./status/Waiter";

const headerList = ["Name", "Email", "Phone", "Location", "Created at"];

const data: Array<ICompany> = [
	{
		company_name: "Codeo Travel",
		company_image: "/temp/vase.png",
		company_mail: "codeo@gmail.com",
		company_tel: "0343403434",
		company_location: "Antananarivo",
		company_created_at: new Date(),
		company_type: "company",
	},
	{
		company_name: "Baobab Travel",
		company_image: "/temp/vase.png",
		company_mail: "baobab@gmail.com",
		company_tel: "0343403434",
		company_location: "Antananarivo",
		company_created_at: new Date(),
		company_type: "individuals",
	},
	{
		company_name: "Travel Life",
		company_image: "/temp/vase.png",
		company_mail: "life@gmail.com",
		company_tel: "0343403434",
		company_location: "Antananarivo",
		company_created_at: new Date(),
		company_type: "company",
	},
];

export default function ListCompany() {
	// * React Query
	const {isLoading, data, isError, error, isFetching, refetch} = useQuery("getCompany", getAllCompany);
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
			<div className="grid grid-cols-custom-3 ml-4">
				{headerList.map((item, index) => (
					<span className="text-gray-60% font-bold text-sm" key={index}>
						{item}
					</span>
				))}
			</div>
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
