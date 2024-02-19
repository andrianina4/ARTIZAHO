import {formatToDMY} from "@/utils/Format";
import React, {ReactNode} from "react";

export default function NotifSmallVal({
	icon,
	label,
	value,
}: {
	icon: ReactNode;
	label: string;
	value: string | Date;
}) {
	const stringDate: string = typeof value != "string" ? formatToDMY(value) : value;

	return (
		<div className="w-72 flex items-center gap-2">
			<div>{icon}</div>
			<div className="opacity-50">{label}</div>
			<div>{stringDate}</div>
		</div>
	);
}
