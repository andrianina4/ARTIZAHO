"use client";

import {FlowerOne} from "@/constants/link/icons";
import React, {useState} from "react";
import ProposalItem from "./component/ProposalItem";
import {INotif} from "@/types/INotif";

const headerList = ["Name", "Date Proposed", "Time", "Workshop", "Participants"];

const companies: INotif[] = [
	{
		notif_id: 1,
		notif_company: {
			name: "Codeo Travel",
			image: "/temp/vase.png",
		},
		notif_workshop: {
			name: "Workshop A",
			icon: <FlowerOne />,
			color: "blue",
		},
		notif_date_proposed: new Date("2024-02-13"),
		notif_time_proposed: "10:00 AM",
		notif_duration: "2 hours",
		notif_location: "Conference Room 1",
		notif_nb_participant: 15,
		notif_request: "Please confirm your attendance.",
	},
	{
		notif_id: 2,
		notif_company: {
			name: "Travelllll",
			image: "/temp/vase.png",
		},
		notif_workshop: {
			name: "Workshop B",
			icon: <FlowerOne />,
			color: "green",
		},
		notif_date_proposed: new Date("2024-02-15"),
		notif_time_proposed: "2:00 PM",
		notif_duration: "2 hours",
		notif_location: "Meeting Room 2",
		notif_nb_participant: 10,
		notif_request: "Please RSVP by tomorrow.",
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
				{Data.map((item, index) => (
					<ProposalItem key={index} company={item} />
				))}
			</div>
		</>
	);
}
