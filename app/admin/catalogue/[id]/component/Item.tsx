import React, {ReactNode} from "react";

export default function Item({
	label,
	name,
	rightIcon,
	image,
}: {
	label: string;
	name: string;
	rightIcon?: ReactNode;
	image?: string;
}) {
	let styleBox = "w-4/5 h-16 bg-white-40% flex items-center px-6 rounded-2xl gap-2";
	image ? (styleBox = styleBox + " font-bold") : null;
	return (
		<div className="flex flex-row">
			<div className="w-1/5 flex items-center opacity-60">{label}</div>
			<div className="w-4/5 h-16 bg-white-40% flex items-center px-6 rounded-2xl">
				<div className={styleBox}>
					{image ? <img src={image} className="w-9 h-9 rounded-full bg-black" /> : null}
					{name}
				</div>
			</div>
			<div className="flex items-center justify-center w-14">{rightIcon}</div>
		</div>
	);
}
