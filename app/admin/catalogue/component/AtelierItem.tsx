import React from "react";
import {FlowerOne} from "@/constants/link/icons";

type Atelier = {
	id: number;
	title: string;
	color: string;
};

export default function AtelierItem({atelier}: {atelier: Atelier}) {
	const cssClasse = `w-7 h-7 flex items-center justify-center bg-${atelier.color} bg-opacity-30 text-${atelier.color} rounded-lg`;
	return (
		<div className="flex flex-row w-40 h-14 items-center gap-2 px-2 bg-white rounded-lg">
			<div className={cssClasse}>
				<FlowerOne />
			</div>
			<div className="opacity-60 text-sm">{atelier.title}</div>
		</div>
	);
}
