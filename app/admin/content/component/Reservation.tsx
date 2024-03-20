import React from "react";
import ItemReserv from "./component/ItemReserv";
import {FlowerOne} from "@/constants/link/icons";

const items = [
	{
		id: 1,
		name: "Cody Fisher",
		domaine: "Floral",
		image: "/temp/vase.png",
		title: "Bouquet en vase",
		icon: <FlowerOne className="w-3 h-3 text-bronze" />,
		nombre: 4,
		type: "Particulier",
		date: "21 Dec 2023",
		paid: true,
	},
	{
		id: 2,
		name: "Esther Howard",
		domaine: "Floral",
		image: "/temp/vase.png",
		title: "Bouquet en vase",
		icon: <FlowerOne className="w-3 h-3 text-bronze" />,
		nombre: 6,
		type: "Particulier",
		date: "25 Jan 2024",
		paid: true,
	},
];

export default function Reservation() {
	return (
		<>
			<div className="text-brown font-bold flex flex-row gap-2 w-full">
				<div>New Accounts</div>
				<div className="bg-white-10% w-7 h-7 flex items-center justify-center rounded-full">{items.length}</div>
			</div>
			<div className="flex flex-col gap-1 w-full">
				{items.map((item, index) => (
					<ItemReserv key={index} item={item} />
				))}
			</div>
		</>
	);
}
