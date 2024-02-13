import {formatToDMY} from "@/utils/Format";
import React from "react";

type Tprops = {
	label: string;
	value: string | Date | number | undefined;
	icon: React.ReactNode;
};

export default function NotifItem({label, value = "Valeur", icon}: Tprops) {
	if (typeof value === "number") {
		value = value.toString();
	} else if (typeof value != "string") {
		value = formatToDMY(value);
	}
	return (
		<div className="flex gap-4">
			<div>
				<div className="w-7 h-7 p-1 flex border-2 border-brown text-brown rounded-full">{icon}</div>
			</div>
			<div>
				<div className="font-bold">{label}</div>
				<div>{value}</div>
			</div>
		</div>
	);
}
