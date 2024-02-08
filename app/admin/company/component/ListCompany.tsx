"use client";

import React, {useState} from "react";
import {ICompany} from "@/types/ICompany";
import CompanyItem from "./component/CompanyItem";

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
	const [Data, setData] = useState<ICompany[]>(data);

	return (
		<>
			<div className="grid grid-cols-custom-3 ml-4">
				{headerList.map((item, index) => (
					<span className="text-gray-60% font-bold text-sm" key={index}>
						{item}
					</span>
				))}
			</div>
			<div>
				{Data.map((company, index) => (
					<CompanyItem key={index} company={company} />
				))}
			</div>
		</>
	);
}
