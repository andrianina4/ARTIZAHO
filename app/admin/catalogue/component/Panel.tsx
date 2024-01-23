import React from "react";
import Button from "@/components/button";
import {UserAddFill} from "@/constants/link/icons";
import AtelierItem from "./AtelierItem";

export default function Panel() {
	return (
		<div className="">
			<Button content="Nouvel Atelier" leftIcon={<UserAddFill />} className="" />
			<div className="font-bold mt-[28px] mb-[10px]">Liste de tout les ateliers</div>
			<div className="flex flex-col gap-[4px]">
				<AtelierItem title="Bouquet en vase" />
				<AtelierItem title="Bouquet en mousse" color="green" />
				<AtelierItem title="Couronne de fleurs" />
			</div>
		</div>
	);
}
