import FiltreWorkshop from "./component/FiltreWorkshop";
import FiltreCraftman from "./component/FiltreCraftman";
import FiltreCompany from "./component/FiltreCompany";

export default function Panel() {
	return (
		<div>
			<FiltreWorkshop />
			<FiltreCraftman />
			<FiltreCompany />
		</div>
	);
}
