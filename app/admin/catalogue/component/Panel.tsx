import React, {useState} from "react";
import Button from "@/components/button";
import {Line, UserAddFill} from "@/constants/link/icons";
import ModalLayout from "@/components/modal";
import FormWorkshop from "./component/FormWorkshop";
import Filtre from "./component/Filtre";

export default function Panel() {
	// Popup add Atelier
	const [open, setOpen] = useState(false);
	const handleToogle = () => {
		setOpen(!open);
	};

	return (
		<div>
			<Button content="Add Workshop" leftIcon={<UserAddFill />} onClick={handleToogle} />
			<ModalLayout open={open} onClick={handleToogle} className="w-1/2 h-2/3">
				<FormWorkshop />
			</ModalLayout>
			<Filtre title="List of all workshops" />
			<Filtre title="List of all craftmen" />
		</div>
	);
}
