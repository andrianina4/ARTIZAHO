import {CheckMaterial, Close} from "@/constants/link/icons";
import React, {MouseEventHandler} from "react";

type Tprops = {
	label: string;
	type: string | "OK" | "NOK";
	onClick?: MouseEventHandler<HTMLDivElement>;
};

export default function ButtonForNotif({label, type, onClick}: Tprops) {
	const bgColor = type === "OK" ? "bg-[#19D67B]" : "bg-[#E33629]";
	const icon =
		type === "OK" ? <CheckMaterial className="w-7 h-7" /> : <Close className="w-7 h-7" />;
	return (
		<div
			className={`py-2 px-4 flex items-center gap-4 ${bgColor} text-white rounded-xl cursor-pointer hover:bg-opacity-75 transition-all ease-linear duration-100`}
			onClick={onClick}>
			{icon}
			<div>{label}</div>
		</div>
	);
}
