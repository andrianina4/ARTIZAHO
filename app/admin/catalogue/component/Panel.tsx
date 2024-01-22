import React from "react";
import Button from "@/components/button";
import {FlowerOne, UserAddFill} from "@/constants/link/icons";

export default function Panel() {
	return (
		<div className="">
			<Button content="Nouvel Atelier" leftIcon={<UserAddFill />} className="" />
			<div className="font-bold mt-[28px]">Liste de tout les ateliers</div>
			<div className="flex flex-row items-center gap-[8px]">
				<div className="min-w-[26px] min-h-[26px] flex items-center justify-center bg- text-bronze">
					<FlowerOne />
				</div>
				<div>Bouquet en vase</div>
			</div>
		</div>
	);
}
