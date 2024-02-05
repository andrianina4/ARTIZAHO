import React from "react";
import {Down, FlowerOne} from "@/constants/link/icons";
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
		number: 4,
	},
	{
		color: "blue",
		leftIcon: <FlowerOne />,
		title: "Couronne de fleurs",
		number: 3.5,
	},
];

export default function Notes() {
	// gerer popup dropdown
	// const [isOpen, setIsOpen] = useState(false);
	// const toggleDropdown = () => {
	// 	setIsOpen(!isOpen);
	// };
	return (
		<div id="Note atelier" className="p-6 bg-white rounded-3xl">
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
	);
}
