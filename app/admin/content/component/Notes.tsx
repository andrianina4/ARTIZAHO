import React from "react";
import {Down, FlowerOne} from "@/constants/link/icons";
import ProgressBar from "@/components/progress-bar";

const bestAtelier = [
	{
		color: "bronze",
		leftIcon: <FlowerOne />,
		title: "Bouquet en vase",
		number: 12,
	},
	{
		color: "green",
		leftIcon: <FlowerOne />,
		title: "Bouquet en mousse",
		number: 4,
	},
	{
		color: "blue",
		leftIcon: <FlowerOne />,
		title: "Couronne de fleurs",
		number: 12,
	},
];

export default function Notes() {
	return (
		<div id="Note atelier" className="p-6 bg-white rounded-3xl">
			<div className="flex flex-row justify-between">
				<div className="text-brown font-bold">Best Workshops</div>
				<div className="flex flex-row items-center gap-2 opacity-50">
					Mois <Down className="w-4 h-4 text-brown" />
				</div>
			</div>
			<div>
				{bestAtelier.map((atelier, index) => (
					<ProgressBar
						key={index}
						color={atelier.color}
						leftIcon={atelier.leftIcon}
						text={atelier.title}
						number={atelier.number}
					/>
				))}
			</div>
		</div>
	);
}
