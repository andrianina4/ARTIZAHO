import {INewAccount} from "@/types/INewAccount";
import React from "react";

export default function People({compte}: {compte: INewAccount}) {
	return (
		<div className="flex flex-row items-center w-full h-11 gap-2 mt-4">
			<div className="bg-bronze w-[4px] h-full rounded-2xl"></div>
			<img src={compte.acc_image} className="w-11 h-11 rounded-full bg-slate-500" />
			<div>
				<p className="font-semibold text-brown">{compte.acc_name}</p>
				<p className="opacity-80"> {compte.acc_mail}</p>
			</div>
		</div>
	);
}
