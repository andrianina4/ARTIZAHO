import {Heart, PeopleFill, Time} from "@/constants/link/icons";
import {colorBackground, colorText} from "@/types/IColor";
import React, {ReactNode} from "react";

type ASD = {
	[key: string]: string;
};

type CIProps = {
	atelier_id: number;
	atelier_name: string;
	atelier_icon: ReactNode;
	atelier_color: string;
	atelier_nb_member: number;
	atelier_date: Date;
	atelier_heure_debut: string;
	atelier_status: string | "paid" | "inprogress" | "refunded";
};

const BG: ASD = {
	paid: "bg-greenLight",
	inprogress: "bg-orange-300",
	refunded: "bg-red-300",
};
const TXT: ASD = {
	paid: "text-green",
	inprogress: "text-orange-700",
	refunded: "text-red-700",
};
const Status: ASD = {
	paid: "Paid",
	inprogress: "In Progress",
	refunded: "Refunded",
};

export default function CompanyItem({item}: {item: CIProps}) {
	const formattedDate: string = new Intl.DateTimeFormat("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
		// hour: "numeric",
		// minute: "numeric",
		// second: "numeric",
	}).format(item.atelier_date);

	const bg: string = colorBackground[item.atelier_color];
	const txt: string = colorText[item.atelier_color];

	return (
		<div className="grid grid-cols-custom-6 font-bold bg-white-40% items-center rounded-lg h-14 pl-4 my-1 ml-8">
			<div className="flex gap-2">
				<div
					className={`w-7 h-7 flex items-center justify-center ${txt} ${bg} bg-opacity-30 rounded-lg`}>
					{item.atelier_icon}
				</div>
				<span className="opacity-50">{item.atelier_name}</span>
			</div>
			<div className="flex items-center gap-2 opacity-70">
				<PeopleFill className="w-4 h-4 opacity-70" /> {item.atelier_nb_member}
			</div>
			<div className="opacity-70">
				{formattedDate}
				<div className="flex items-center gap-1 opacity-50">
					<Time /> {item.atelier_heure_debut}
				</div>
			</div>
			<div className={`badge ${BG[item.atelier_status]} ${TXT[item.atelier_status]} border-0`}>
				{Status[item.atelier_status]}
			</div>
		</div>
	);
}
