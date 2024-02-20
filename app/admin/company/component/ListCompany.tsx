"use client";

import React, {useContext, useEffect, useState} from "react";
import {ICompany} from "@/types/ICompany";
import CompanyItem from "./component/CompanyItem";
import {SearchContext} from "../../provider/SearchProvider";
import {getAllCompany} from "./Call/Company";
import {useQuery} from "react-query";

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
	// * VALEURS PAR DEFAUT
	// const [Data, setData] = useState<ICompany[]>(data);
	// const [error, setError] = useState<Error | null>(null);

	// useEffect(() => {
	// 	const fetchAllCompany = async () => {
	// 		return await getAllCompany(setError);
	// 	};
	// 	const data = fetchAllCompany();
	// 	console.log(error);
	// }, []);

	// * React Query
	const {isLoading, data} = useQuery("getCompany", getAllCompany);

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

	return (
		<>
			<div className="grid grid-cols-custom-3 ml-4">
				{headerList.map((item, index) => (
					<span className="text-gray-60% font-bold text-sm" key={index}>
						{item}
					</span>
				))}
			</div>
			{/* {error ? (
        <div className="w-full h-full grow flex justify-center items-center">
          <div className="opacity-50">An error has occurred</div>
        </div>
      ) : ( */}
			{FilteredData ? (
				<div>
					{FilteredData?.map((company, index) => (
						<CompanyItem key={index} company={company} />
					))}
				</div>
			) : (
				<div>Loading...</div>
			)}

			{/* )} */}
		</>
	);
}
