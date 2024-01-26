import {ChartBar, ChartSales, Date} from "@/constants/link/icons";
import Bloc from "../component/bloc";
import BlocBrown from "../component/blocBrown";

export default function EntrepriseDashboard() {
	return (
		<div className=" flex flex-col gap-5 h-full">
			<div className=" grid grid-cols-3 gap-10">
				<Bloc icon={<Date />} textTop="Date" textBottom="10 Nov 2023" />
				<Bloc icon={<ChartBar />} textTop="Booking total" textBottom="250" />
				<BlocBrown icon={<ChartSales />} textTop="Sales figures" textBottom="250" />
			</div>

			<div className=" h-4/5 grid grid-cols-3 grid-rows-2 gap-10 ">
				<div className=" flex flex-col gap-2 row-span-full col-start-1 col-end-3 ">
					<div className=" flex flex-col gap-5 bg-white w-full h-36 rounded-3xl p-10  ">
						<div>
							<p className="text-3xl font-semibold ">Craftmen list</p>
							<p>Overview of workshops with location and participants</p>
						</div>
					</div>
					<div className="flex flex-row  items-center  bg-white w-full h-36 rounded-3xl p-10   ">
						<div className="flex flex-row  flex-1  items-center gap-3.5 ">
							<div className="w-[56px] h-[56px] rounded-full bg-slate-500 "></div>
							<div>
								<p className="font-semibold">Safidy</p>
								<p>safidy@gmail.com</p>
							</div>
						</div>
						<div className="flex flex-1 font-semibold">Antananarivo</div>
						<div className="flex flex-1 font-semibold"> 150</div>
					</div>
				</div>
				<div className="flex flex-col bg-white rounded-3xl justify-center ">
					<div className="flex flex-row justify-center  gap-10 ">
						<div>
							<p className="font-semibold">Mois</p>
							<p className="text-brown font-semibold text-xl">Craftmen total</p>
						</div>
						<div className="w-[56px] h-[56px] rounded-full bg-slate-500  "></div>
					</div>
					<div className="text-5xl font-semibold text-brown-80% pl-16">70</div>
				</div>
				<div className=" flex flex-col gap-3 items-center bg-white rounded-3xl py-7">
					<p className="text-brown font-semibold">The most reserved craftmen</p>
					<div className="flex flex-row gap-3  ">
						<div className="bg-bronze w-1 rounded-xl"></div>
						<div className="w-[56px] h-[56px] rounded-full bg-slate-500 "></div>
						<div>
							<p>Safidyy</p>
							<p>safidy@gmail.com</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}