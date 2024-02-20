"use client";
import ModalLayout from "@/components/modal";
import React, {useState} from "react";
import FormWorkshop from "../component/FormWorkshop";

export default function ModalWorkshop() {
	// * Popup add Atelier
	const [open, setOpen] = useState(false);
	const handleToogle = () => {
		setOpen(!open);
	};

	return (
		<ModalLayout open={open} onClick={handleToogle} className="w-auto h-4/5">
			<FormWorkshop />
		</ModalLayout>
	);
}
