import Image from "next/image";
import React from "react";

export default function AboutItem({
	name,
	desc = 0,
	pic = "",
}: {
	name: string;
	desc: number | string;
	pic: string;
}) {
	let sous_titre = "";
	if (typeof desc === "number" && desc > 0) sous_titre = desc + " members";
	else if (typeof desc === "string") sous_titre = desc;

	return (
		<div className="flex flex-col gap-2 pl-2">
			<div className="flex flex-row gap-2 items-center">
				<div className="relative h-8 w-8">
					<Image src={pic} alt="" fill className="rounded-full" />
				</div>
				<div className="flex flex-col gap-[1px]">
					<div className="text-xs font-bold">{name}</div>
					{sous_titre && <div className="text-xs text-[#030229] text-opacity-50">{sous_titre}</div>}
				</div>
			</div>
		</div>
	);
}
