import React from "react";
import {ChartSales, EyeFill, Group} from "@/constants/link/icons";
import Bloc from "../component/bloc";
import BlocBrown from "../component/blocBrown";
import Notes from "./component/Notes";
import NewAccount from "./component/NewAccount";
import Top from "./component/Top";
import Reservation from "./component/Reservation";

export default function AdminDashboard() {
	return (
		<div className="flex flex-col gap-5 h-full">
			<div className="grid grid-cols-3 gap-10 h-1/5">
				<Bloc icon={<Group />} textTop="Date" textBottom="10 Nov 2023" brownIcon />
				<Bloc icon={<EyeFill />} textTop="Booking total" textBottom="250" brownIcon />
				<BlocBrown icon={<ChartSales />} textTop="Sales figures" textBottom="250" />
			</div>
			<div id="Section 2" className="flex flex-row gap-5 w-full">
				<Notes />
				<NewAccount />
				<Top />
			</div>
			<div id="Section 3" className="flex flex-col gap-5 w-full">
				<Reservation />
			</div>
		</div>
	);
}
