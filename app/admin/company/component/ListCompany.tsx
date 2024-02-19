"use client";

import React, {useContext, useEffect, useState} from "react";
import {ICompany} from "@/types/ICompany";
import CompanyItem from "./component/CompanyItem";
import {SearchContext} from "../../provider/SearchProvider";
import {getAllCompany} from "./Call/Company";

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
	const [Data, setData] = useState<ICompany[]>(data);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchAllCompany = async () => {
			return await getAllCompany(setError);
		};
		const data = fetchAllCompany();
		console.log(error);
	}, []);

	// if (loading) {
	// 	return <div>Loading...</div>;
	// }

	// * FILTRE PAR SEARCH BAR
	const [FilteredData, setFilteredData] = useState<ICompany[]>([]);
	const searchContext = useContext(SearchContext);
	useEffect(() => {
		const filteredValues = Data.filter((value) =>
			value.company_name?.toLocaleLowerCase().includes(searchContext.Value.toLocaleLowerCase())
		);
		setFilteredData(filteredValues);
	}, [searchContext.Value]);

	// if (error) {
	// 	// console.log(error);
	// 	return <div>Error: {error.message}</div>;
	// }
	return (
		<>
			<div className="grid grid-cols-custom-3 ml-4">
				{headerList.map((item, index) => (
					<span className="text-gray-60% font-bold text-sm" key={index}>
						{item}
					</span>
				))}
			</div>
			{error ? (
				<div className="w-full h-full grow flex justify-center items-center">
					<div className="opacity-50">An error has occurred</div>
				</div>
			) : (
				<div>
					{FilteredData.map((company, index) => (
						<CompanyItem key={index} company={company} />
					))}
				</div>
			)}
		</>
	);
}
