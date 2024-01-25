import React, {ReactNode} from "react";

export default function Item({
	label,
	value,
	rightIcon,
	image,
	desc = false,
}: {
	label: string;
	value: string | number;
	rightIcon?: ReactNode;
	image?: string;
	desc?: boolean;
}) {
	let styleBox = "w-4/5 bg-white-40% flex items-center px-6 rounded-2xl gap-2";
	image ? (styleBox = styleBox + " font-bold") : null;
	desc ? (styleBox = styleBox + " h-auto p-5") : (styleBox = styleBox + " h-16");
	return (
		<div className="flex flex-row">
			<div className="w-1/5 flex items-center opacity-60 font-bold">{label}</div>
			<div className={styleBox}>
				{image ? <img src={image} className="w-9 h-9 rounded-full bg-black" /> : null}
				{value}
			</div>
			<div className="flex items-center justify-center w-14">{rightIcon}</div>
		</div>
	);
}
