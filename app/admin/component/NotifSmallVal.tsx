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
	let formattedDate: string;
	if (typeof value !== "string") {
		formattedDate = new Intl.DateTimeFormat("en-US", {
			day: "numeric",
			month: "long",
			year: "numeric",
			// hour: "numeric",
			// minute: "numeric",
			// second: "numeric",
		}).format(value);
	} else {
		formattedDate = value;
	}
	return (
		<div className="w-72 flex items-center gap-2">
			<div >{icon}</div>
			<div className="opacity-50">{label}</div>
			<div>{formattedDate}</div>
		</div>
	);
}
