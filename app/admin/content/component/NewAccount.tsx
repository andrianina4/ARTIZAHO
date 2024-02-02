import {Down} from "@/constants/link/icons";
import React, {ChangeEvent, useState} from "react";
import People from "./component/People";
import {INewAccount} from "@/types/INewAccount";

const ListNewAcc: Array<INewAccount> = [
	{
		acc_name: "Safidy",
		acc_mail: "safidy@gmail.com",
		acc_image: "temp/vase.png",
		acc_type: "company",
	},
	{
		acc_name: "Onja",
		acc_mail: "onja@gmail.com",
		acc_image: "temp/vase.png",
		acc_type: "individual",
	},
	{
		acc_name: "Nick",
		acc_mail: "nick@gmail.com",
		acc_image: "temp/vase.png",
		acc_type: "individual",
	},
	{
		acc_name: "Nick",
		acc_mail: "nick@gmail.com",
		acc_image: "temp/vase.png",
		acc_type: "individual",
	},
	{
		acc_name: "Nick",
		acc_mail: "nick@gmail.com",
		acc_image: "temp/vase.png",
		acc_type: "individual",
	},
	{
		acc_name: "Nick",
		acc_mail: "nick@gmail.com",
		acc_image: "temp/vase.png",
		acc_type: "individual",
	},
	{
		acc_name: "Nick",
		acc_mail: "nick@gmail.com",
		acc_image: "temp/vase.png",
		acc_type: "individual",
	},
];

export default function NewAccount() {
	// Pour gérer le SELECT part et entreprise
	const [Content, setContent] = useState<string>("company");
	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setContent(e.target.value);
	};

	return (
		<div id="Nouveau compte" className="p-6 bg-white rounded-3xl w-96">
			<div className="flex flex-row items-center justify-between">
				<div className="text-brown font-bold flex flex-row gap-2">
					<div>New Accounts</div>
					<div className="bg-white-10% rounded-full w-7 h-7 flex items-center justify-center">
						{ListNewAcc.filter((obj: INewAccount) => obj.acc_type === Content).length}
					</div>
				</div>
				<div className="flex flex-row items-center gap-2 opacity-50">
					<select
						className="select bg-transparent w-full max-w-xs focus:bg-transparent focus:border-none focus:outline-none"
						value={Content}
						onChange={handleChange}>
						<option className="p-3" value="company">
							Company
						</option>
						<option className="p-3" value="individual">
							Individual
						</option>
					</select>
				</div>
			</div>
			<div className="flex flex-col gap-2">
				{ListNewAcc.map((compte, index) =>
					compte.acc_type === Content ? <People compte={compte} key={index} /> : null
				)}
			</div>
		</div>
	);
}
