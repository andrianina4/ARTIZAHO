import React from "react";
import {FlowerOne} from "@/constants/link/icons";
import { colorBackground, colorText } from "@/types/IColor";

type Atelier = {
	id: number;
	title: string;
	color: string;
};

export default function AtelierItem({atelier}: {atelier: Atelier}) {
  const bg: string = colorBackground[atelier.color];
	const txt: string = colorText[atelier.color];

	return (
		<div className="flex flex-row w-40 h-14 items-center gap-2 px-2 bg-white rounded-lg">
			<div className={`w-7 h-7 flex items-center justify-center ${txt} ${bg} bg-opacity-30 rounded-lg`}>
				<FlowerOne />
			</div>
			<div className="opacity-60 text-sm">{atelier.title}</div>
		</div>
	);
}
