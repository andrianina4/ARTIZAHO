import React from "react";

export default function CalendarItem({title, color = "pink"}: {title: string; color?: string}) {
	const background = color == "green" ? "bg-greenLight" : "bg-saumon";
	const textColor = color == "green" ? "text-green" : "text-bronze";

	const cssClasse = `min-h-[31px] flex items-center justify-center font-bold cursor-pointer ${background} ${textColor} rounded-[4px]`;

	return <div className={cssClasse}>{title}</div>;
}
