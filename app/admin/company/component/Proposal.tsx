"use client";

import {FlowerOne} from "@/constants/link/icons";
import {IProposalCompany} from "@/types/ICompany";
import React, {useState} from "react";
import ProposalItem from "./component/ProposalItem";

const headerList = ["Name", "Date Proposed", "Time", "Workshop", "Participants"];

const companies: IProposalCompany[] = [
	{
		company_id: 1,
		company_name: "Company 1",
		company_image: "/temp/vase.png",
		company_date_proposed: new Date(),
		company_time_proposed: "10:00 AM",
		company_workshop: {name: "Workshop 1", icon: <FlowerOne />, color: "bronze"},
		company_participants: 11,
	},
	{
		company_id: 2,
		company_name: "Company 2",
		company_image: "/temp/vase.png",
		company_date_proposed: new Date(),
		company_time_proposed: "11:00 AM",
		company_workshop: {name: "Workshop 2", icon: <FlowerOne />, color: "blue"},
		company_participants: 7,
	},
	{
		company_id: 3,
		company_name: "Company 3",
		company_image: "/temp/vase.png",
		company_date_proposed: new Date(),
		company_time_proposed: "12:00 PM",
		company_workshop: {name: "Workshop 3", icon: <FlowerOne />, color: "green"},
		company_participants: 5,
	},
	{
		company_id: 4,
		company_name: "Company 4",
		company_image: "/temp/vase.png",
		company_date_proposed: new Date(),
		company_time_proposed: "01:00 PM",
		company_workshop: {name: "Workshop 4", icon: <FlowerOne />, color: "blue"},
		company_participants: 14,
	},
	{
		company_id: 5,
		company_name: "Company 5",
		company_image: "/temp/vase.png",
		company_date_proposed: new Date(),
		company_time_proposed: "02:00 PM",
		company_workshop: {name: "Workshop 5", icon: <FlowerOne />, color: "bronze"},
		company_participants: 6,
	},
];

export default function Proposal() {
	const [Data, setData] = useState(companies);
	return (
		<>
			<div className="grid grid-cols-custom-8 ml-4">
				{headerList.map((item, index) => (
					<span className="text-gray-60% font-bold text-sm" key={index}>
						{item}
					</span>
				))}
			</div>
			<div>
				{Data.map((company, index) => (
					<ProposalItem key={index} company={company} />
				))}
			</div>
		</>
	);
}
