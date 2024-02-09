import React from "react";
import {FlowerOne} from "@/constants/link/icons";
import ProgressBar from "@/components/progress-bar";

const bestAtelier = [
	{
		color: "bronze",
		leftIcon: <FlowerOne />,
		title: "Bouquet en vase",
		number: 5,
	},
	{
		color: "green",
		leftIcon: <FlowerOne />,
		title: "Bouquet en mousse",
		number: 3,
	},
	{
		color: "blue",
		leftIcon: <FlowerOne />,
		title: "Couronne de fleurs",
		number: 3.5,
	},
];

export default function Notes() {
	return (
		<div>
			<div id="Note atelier" className="p-6 h-auto bg-white rounded-3xl">
				<div className="flex flex-row">
					<div className="text-brown font-bold">Best Workshops</div>
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
		</div>
	);
}
