import {Business, HomeAdd} from "@/constants/link/icons";
import Input from "@/components/input";
import React from "react";
import Button from "@/components/button";
import AddImageRound from "@/components/AddImageRound";

export default function FormEntreprise() {
	return (
		<form className="flex flex-col w-full">
			<div className="flex flex-row items-center text-bronze gap-6 pb-8">
				<div className="">
					<HomeAdd className="w-6 h-6" />
				</div>
				<div className="text-2xl">New Company</div>
			</div>
			<div className="flex flex-row w-full gap-2 h-full">
				<div className="flex flex-col w-96 justify-between">
					<div>
						<Input placeholder="Name" />
						<Input placeholder="Email" />
						<Input placeholder="Phone number" />
						<Input placeholder="Nif Stat" />
						<Input placeholder="Location" />
					</div>
					<Button content="Add" />
				</div>
				<AddImageRound bgIcon={<Business className="w-full h-full text-gray-400" />} />
			</div>
		</form>
	);
}
