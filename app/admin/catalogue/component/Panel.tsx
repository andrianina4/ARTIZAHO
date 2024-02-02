import React, {useState} from "react";
import Button from "@/components/button";
import {UserAddFill} from "@/constants/link/icons";
import AtelierItem from "./AtelierItem";
import ModalLayout from "@/components/modal";
import FormAtelier from "./FormAddAtelier/FormAtelier";

const ateliers = [
	{
		id: 1,
		title: "Bouquet en vase",
		color: "bronze",
	},
	{
		id: 2,
		title: "Bouquet sur mousse",
		color: "green",
	},
	{
		id: 3,
		title: "Bouquet en vase",
		color: "blue",
	},
];

export default function Panel() {
	const [open, setOpen] = useState(false);
	const handleToogle = () => {
		setOpen(!open);
	};

	const [checked, setChecked] = useState(false);
	const handleChecked = () => {
		setChecked(!checked);
	};

	return (
		<div key="">
			<Button content="New Workshop" leftIcon={<UserAddFill />} onClick={handleToogle} />
			<div className="font-bold mt-7 mb-3">List of all workshops</div>
			<div className="flex flex-col gap-1">
				{ateliers.map((atelier, index) => (
					<div className="flex flex-row items-center gap-2">
						{/* <Link href={`/admin/catalogue/${atelier.id}`} key={atelier.id}> */}
						<input
							key={index}
							className="checkbox border-[#917155] checked:border-bronze [--chkbg:theme(colors.bronze)] [--chkfg:white]"
							type="checkbox"
							checked={checked}
							onChange={handleChecked}
						/>
						<AtelierItem atelier={atelier} />
						{/* </Link> */}
					</div>
				))}
			</div>
			<ModalLayout open={open} onClick={handleToogle} className="w-1/2 h-2/3">
				<FormAtelier />
			</ModalLayout>
		</div>
	);
}
