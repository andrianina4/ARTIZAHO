import React from "react";
import {FlowerOne} from "@/constants/link/icons";

export default function AtelierItem({title, color = "pink"}: {title: string; color?: string}) {
	const iconBackground = color == "green" ? "bg-greenLight" : "bg-saumon";
	const iconColor = color == "green" ? "text-green" : "text-bronze";
	const cssClasse = `min-w-[26px] min-h-[26px] flex items-center justify-center ${iconBackground} ${iconColor} rounded-[8px]`;
	return (
		<div className="flex flex-row items-center gap-[8px] p-[10px] bg-white rounded-[8px]">
			<div className={cssClasse}>
				<FlowerOne />
			</div>
			<div>{title}</div>
		</div>
	);
}
