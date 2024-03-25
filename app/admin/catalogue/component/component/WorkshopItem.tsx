import React from "react";
import {colorBackground, colorText} from "@/types/IColor";
import {IWorkShop} from "@/types/IWorkshop";
import {FlowerOne} from "@/constants/link/icons";

export default function WorkshopItem({workshop}: {workshop: IWorkShop}) {
	// const bg: string = colorBackground[workshop.shop_color];
	// const txt: string = colorText[workshop.shop_color];

	return (
		<div className="flex flex-row w-full h-12 items-center gap-2 px-2 bg-white rounded-lg">
			<div className={`w-7 h-7 flex items-center justify-center text-bronze bg-bronze bg-opacity-30 rounded-lg`}>
				<FlowerOne />
			</div>
			<div className="opacity-60 text-sm">{workshop.title}</div>
		</div>
	);
}
