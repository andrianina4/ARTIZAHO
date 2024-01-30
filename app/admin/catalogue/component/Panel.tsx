import React, {useState} from "react";
import Button from "@/components/button";
import {UserAddFill} from "@/constants/link/icons";
import AtelierItem from "./AtelierItem";
import ModalLayout from "@/components/modal";
import FormAtelier from "./FormAddAtelier/FormAtelier";
import Link from "next/link";

const ateliers = [
	{
		id: 1,
		title: "Bouquet en vase",
		color: "pink",
	},
	{
		id: 2,
		title: "Bouquet en mousse",
		color: "green",
	},
	{
		id: 3,
		title: "Bouquet en vase",
		color: "pink",
	},
];

export default function Panel() {
	const [open, setOpen] = useState(false);
	const handleToogle = () => {
		setOpen(!open);
	};
	return (
		<div className="">
			<Button content="Nouvel Atelier" leftIcon={<UserAddFill />} onClick={handleToogle} />
			<div className="font-bold mt-[28px] mb-[10px]">List of all workshops</div>
			<div className="flex flex-col gap-[4px]">
				{ateliers.map((atelier) => (
					<Link href={`/admin/catalogue/${atelier.id}`} key={atelier.id}>
						<AtelierItem atelier={atelier} />
					</Link>
				))}
			</div>
			<ModalLayout open={open} onClick={handleToogle} className="w-1/2 h-2/3">
				<FormAtelier />
			</ModalLayout>
		</div>
	);
}
