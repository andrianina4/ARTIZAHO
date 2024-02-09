import React from "react";

export default function CalendarItem({item}: {item: any}) {
	const cssClasse = `mb-1 h-8 flex items-center pl-3 font-bold bg-${item.textColor} bg-opacity-30 text-${item.textColor} cursor-pointer rounded-md`;
	return <div className={cssClasse}>{item.title}</div>;
}
