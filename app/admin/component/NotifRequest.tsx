import React from "react";

export default function NotifRequest({text}: {text: string | undefined}) {
	return (
		<div className="flex flex-col gap-2">
			<div className="font-bold">Special Request</div>
			<div className="py-3 px-4 bg-white-40% rounded-2xl items-center">{text}</div>
		</div>
	);
}
