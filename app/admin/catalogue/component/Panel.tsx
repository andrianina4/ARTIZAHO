import React, {useState} from "react";
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
			<FiltreWorkshop />
			<FiltreCraftman />
			<FiltreCompany />
		</div>
	);
}
