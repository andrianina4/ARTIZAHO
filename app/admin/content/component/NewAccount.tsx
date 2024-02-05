import {Down} from "@/constants/link/icons";
import React, {ChangeEvent, MouseEventHandler, useState} from "react";
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
		acc_type: "company",
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
		acc_type: "company",
	},
];

export default function NewAccount() {
	// gerer popup dropdown
	const [isOpen, setIsOpen] = useState(false);
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	// Pour gérer le dropdown part/entreprise
	const [Content, setContent] = useState<string>("individual");
	const handleChange = (str: string) => {
		setContent(str);
		toggleDropdown();
	};
	const capitalizeFirstLetter = (str: string) => {
		if (str.length === 0) {
			return str;
		}
		return str.charAt(0).toUpperCase() + str.slice(1);
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
					<div className="relative">
						<div
							className="m-1 btn bg-transparent hover:bg-transparent border-none opacity-70 text-black"
							onClick={toggleDropdown}>
							{capitalizeFirstLetter(Content)} <Down className="text-brown !opacity-100 w-6 h-6" />
						</div>
						{isOpen && (
							<ul className="p-2 menu bg-whiteGray absolute top-9 z-[1] rounded-box w-32">
								<li className="">
									<a
										onClick={() => {
											handleChange("company");
										}}>
										Company
									</a>
								</li>
								<li>
									<a
										onClick={() => {
											handleChange("individual");
										}}>
										Individual
									</a>
								</li>
							</ul>
						)}
					</div>
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
