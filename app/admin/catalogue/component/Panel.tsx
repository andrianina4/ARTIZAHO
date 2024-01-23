import React, {useState} from "react";
import Button from "@/components/button";
import {UserAddFill} from "@/constants/link/icons";
import AtelierItem from "./AtelierItem";
import ModalLayout from "@/components/modal";
import FormAtelier from "./FormAddAtelier/FormAtelier";

export default function Panel() {
	const [open, setOpen] = useState(false);
	const handleToogle = () => {
		setOpen(!open);
	};
	return (
		<div className="">
			<Button content="Nouvel Atelier" leftIcon={<UserAddFill />} onClick={handleToogle} />
			<div className="font-bold mt-[28px] mb-[10px]">Liste de tout les ateliers</div>
			<div className="flex flex-col gap-[4px]">
				<AtelierItem title="Bouquet en vase" />
				<AtelierItem title="Bouquet en mousse" color="green" />
				<AtelierItem title="Couronne de fleurs" />
			</div>
			<ModalLayout open={open} onClick={handleToogle} className="w-[831px] h-[765px]">
				<FormAtelier />
			</ModalLayout>
		</div>
	);
}
