import React, {useState} from "react";
import Button from "@/components/button";
import {UserAddFill} from "@/constants/link/icons";
import ModalLayout from "@/components/modal";
import FormWorkshop from "./component/FormWorkshop";
import FiltreWorkshop from "./component/FiltreWorkshop";
import FiltreCraftman from "./component/FiltreCraftman";
import FiltreCompany from "./component/FiltreCompany";

export default function Panel() {
	// * Popup add Atelier
	const [open, setOpen] = useState(false);
	const handleToogle = () => {
		setOpen(!open);
	};

	return (
		<div>
			{/* <Button content="Add Workshop" leftIcon={<UserAddFill />} onClick={handleToogle} /> */}
			<ModalLayout open={open} onClick={handleToogle} className="w-auto">
				<FormWorkshop />
			</ModalLayout>
			<FiltreWorkshop />
			<FiltreCraftman />
			<FiltreCompany />
		</div>
	);
}
