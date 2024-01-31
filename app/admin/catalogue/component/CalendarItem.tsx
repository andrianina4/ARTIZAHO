import React from "react";

export default function CalendarItem({item}: {item: any}) {
	const cssClasse = `min-h-[31px] flex items-center justify-center font-bold bg-${item.textColor} bg-opacity-30 text-${item.textColor} cursor-pointer rounded-[4px]`;
	return <div className={cssClasse}>{item.title}</div>;
}
