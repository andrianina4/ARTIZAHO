import React, {useState} from "react";
import CraftemenItem from "../craftemenItem";
import {ICraftmanItem} from "@/types/ICraftman";
import {FlowerOne} from "@/constants/link/icons";

const headerList = ["Name", "Know-how", "Workshop", "Clients", "Rating"];

const data: ICraftmanItem[] = [
	{
		craftman_name: "Mahefa",
		craftman_image: "/temp/vase.png",
		craftman_domaine: "Floral",
		craftman_workshop: {
			name: "Bouquet en vase et 3 autres",
			icon: <FlowerOne />,
			color: "bronze",
		},
		craftman_nb_client: 47,
	},
	{
		craftman_name: "Maeva",
		craftman_image: "/temp/vase.png",
		craftman_domaine: "Floral",
		craftman_workshop: {
			name: "Bouquet sur mousse et 1 autre ",
			icon: <FlowerOne />,
			color: "blue",
		},
		craftman_nb_client: 52,
	},
];

export default function ListSection() {
	const [Data, setData] = useState<ICraftmanItem[]>(data);

	return (
		<>
			<div className="grid grid-cols-custom-2 ml-4 mt-10 mb-4">
				{headerList.map((item, index) => (
					<span className="text-gray-60% font-bold text-sm" key={index}>
						{item}
					</span>
				))}
			</div>
			<div>
				{Data.map((craftman, index) => (
					<CraftemenItem key={index} craftman={craftman} />
				))}
			</div>
		</>
	);
}
