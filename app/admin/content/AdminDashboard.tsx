import React from "react";
import {ChartSales, PeopleFill} from "@/constants/link/icons";
import Bloc from "../component/bloc";
import BlocBrown from "../component/blocBrown";
import Notes from "./component/Notes";
import NewAccount from "./component/NewAccount";
import Top from "./component/Top";
import Reservation from "./component/Reservation";
import Graph from "./component/Graph";

export default function AdminDashboard() {
	return (
		<div className="flex flex-row gap-5 h-full">
			<div className="flex flex-col gap-3">
				<div className="w-[825px] bg-white p-6 rounded-3xl">
					<Graph />
				</div>
				<div className="flex gap-5">
					<Notes />
					<div className="flex flex-col w-full gap-3">
						<BlocBrown icon={<ChartSales />} textTop="Workshop number" textBottom="120" />
						<Bloc textTop="Sales figures" textBottom="50 000 €" brownIcon />
						<Bloc icon={<PeopleFill />} textTop="Booking total" textBottom="250" brownIcon />
					</div>
				</div>
			</div>
			<div>
				<NewAccount />
			</div>
			{/* <Bloc icon={<Group />} textTop="Date" textBottom="10 Nov 2023" brownIcon /> */}
			{/* <div className="grid grid-cols-3 gap-10"> */}
			{/* </div> */}
			{/* <div id="Section 2" className="flex flex-row gap-5 w-full"> */}
			{/* <Top /> */}
			{/* </div> */}
			{/* <div id="Section 3" className="flex flex-col gap-5 w-full">
				<Reservation />
			</div> */}
		</div>
	);
}
