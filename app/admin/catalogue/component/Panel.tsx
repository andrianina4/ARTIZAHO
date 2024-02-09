import React, {useState} from "react";
import Button from "@/components/button";
import {UserAddFill} from "@/constants/link/icons";
import ModalLayout from "@/components/modal";
import FormWorkshop from "./component/FormWorkshop";
import Filtre from "./component/FiltreWorkshop";
import FiltreWorkshop from "./component/FiltreWorkshop";
import FiltreCraftman from "./component/FiltreCraftman";

export default function Panel() {
	// * Popup add Atelier
	const [open, setOpen] = useState(false);
	const handleToogle = () => {
		setOpen(!open);
	};

	// * Company Request
	const [checked, setChecked] = useState<boolean>(false);
	const handleChecked = () => {
		setChecked(!checked);
	};

	return (
		<div>
			<Button content="Add Workshop" leftIcon={<UserAddFill />} onClick={handleToogle} />
			<ModalLayout open={open} onClick={handleToogle} className="w-auto">
				<FormWorkshop />
			</ModalLayout>
			<FiltreWorkshop />
			<FiltreCraftman />
			<div className="flex flex-row items-center gap-2 mt-7">
				<input
					className="checkbox border-[#917155] checked:border-bronze [--chkbg:theme(colors.bronze)] [--chkfg:white]"
					type="checkbox"
					checked={checked}
					onChange={handleChecked}
				/>
				<div className="flex items-center font-bold">Company Requests</div>
			</div>
		</div>
	);
}
