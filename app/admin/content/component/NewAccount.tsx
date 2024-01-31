import {Down} from "@/constants/link/icons";
import React from "react";
import People from "./component/People";

const newAcc = [
	{
		name: "Safidy",
		mail: "safidy@gmail.com",
		image: "temp/vase.png",
	},
	{
		name: "Antonio",
		mail: "antonio@gmail.com",
		image: "temp/vase.png",
	},
];

export default function NewAccount() {
	return (
		<div id="Nouveau compte" className="p-6 bg-white rounded-3xl w-96">
			<div className="flex flex-row justify-between">
				<div className="text-brown font-bold flex flex-row gap-2">
					<div>New Accounts</div>
					<div className="bg-white-10% rounded-full w-7 h-7 flex items-center justify-center">
						{newAcc.length}
					</div>
				</div>
				<div className="flex flex-row items-center gap-2 opacity-50">
					Particulier <Down className="w-4 h-4 text-brown" />
				</div>
			</div>
			<div className="flex flex-col gap-2">
				{newAcc.map((compte, index) => (
					<People compte={compte} key={index} />
				))}
			</div>
		</div>
	);
}
