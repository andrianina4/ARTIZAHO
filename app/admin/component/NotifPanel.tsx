import {CheckMaterial, Close, DateToday, TimeDuotone, Toolbox} from "@/constants/link/icons";
import {INotif} from "@/types/INotif";
import Image from "next/image";
import React from "react";
import NotifSmallVal from "./NotifSmallVal";
import ActionsButtons from "@/components/ActionsButtons";

const ListNotif: INotif[] = [
	{
		notif_id: 1,
		notif_company: {name: "Company A", image: "/temp/vase.png"},
		notif_date_proposed: new Date("2024-02-07"),
		notif_time_proposed: "10:00",
		notif_workshop: "Workshop 1",
	},
	{
		notif_id: 2,
		notif_company: {name: "Company B", image: "/temp/vase.png"},
		notif_date_proposed: new Date("2024-02-08"),
		notif_time_proposed: "14:00",
		notif_workshop: "Workshop 2",
	},
	{
		notif_id: 3,
		notif_company: {name: "Company C", image: "/temp/vase.png"},
		notif_date_proposed: new Date("2024-02-09"),
		notif_time_proposed: "16:00",
		notif_workshop: "Workshop 3",
	},
];

export default function NotifPanel() {
	return (
		<div className="absolute flex flex-col gap-10 bg-white top-16 right-0 z-50 rounded-2xl p-4">
			<div className="flex flex-col gap-2">
				<div className="font-bold text-brown">Notifications</div>
				<div className="bg-gray-60% bg-opacity-50 h-[1px] -mx-1"></div>
				<div className="flex flex-col gap-3">
					{ListNotif.map((item, index) => (
						<div key={index} className="flex gap-3">
							<div className="pt-4">
								<div className="w-8 h-8 relative">
									<Image src={item.notif_company.image} alt="" fill className="rounded-full" />
								</div>
							</div>
							<div>
								<div className="font-bold">{item.notif_company.name}</div>
								<NotifSmallVal
									icon={<DateToday className="w-4 h-4" />}
									label="Date proposed"
									value={item.notif_date_proposed}
								/>
								<NotifSmallVal
									icon={<TimeDuotone className="w-4 h-4" />}
									label="Time"
									value={item.notif_time_proposed}
								/>
								<NotifSmallVal
									icon={<Toolbox className="w-4 h-4" />}
									label="Workshop :"
									value={item.notif_workshop}
								/>
							</div>
							<div className="flex flex-row pt-4 gap-2">
								<ActionsButtons />
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="flex justify-center opacity-60 cursor-pointer">Voir tout</div>
		</div>
	);
}
