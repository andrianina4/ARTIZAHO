import {SearchIcon} from "@/constants/link/icons";
import React from "react";

const searchTop = ["Mahefa", "Floral", "Bouquet en vase", "Couronne de fleurs"];

export default function Top() {
	return (
		<div id="Top search" className="p-6 bg-white rounded-3xl w-96">
			<div className="flex flex-row gap-2 items-center text-brown font-bold mb-4">
				Top search
				<SearchIcon />
			</div>
			<div className="flex flex-col gap-4">
				{searchTop.map((text, index) => (
					<div key={index}>
						<div className="mb-2">{text}</div>
						<hr />
					</div>
				))}
			</div>
		</div>
	);
}
