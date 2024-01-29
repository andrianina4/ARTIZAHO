import React from "react";

export default function AboutItem({
	name,
	desc = "",
	pic = "",
}: {
	name: string;
	desc: string;
	pic: string;
}) {
	return (
		<div className="flex flex-col gap-2 pl-2">
			<div className="flex flex-row gap-2 items-center">
				<div>
					<img src={pic} className="bg-black w-8 h-8 rounded-full" />
				</div>
				<div className="flex flex-col gap-[1px]">
					<div className="text-xs font-bold">{name}</div>
					{desc == "" ? null : <div className="text-xs text-[#030229] text-opacity-50">{desc}</div>}
				</div>
			</div>
		</div>
	);
}
