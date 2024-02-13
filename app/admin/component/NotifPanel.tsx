import {DateToday, FlowerOne, TimeDuotone, Toolbox} from "@/constants/link/icons";
import {INotif} from "@/types/INotif";
import Image from "next/image";
import React, {useContext} from "react";
import NotifSmallVal from "./NotifSmallVal";
import Link from "next/link";
import {NotifContext} from "../provider/NotificationProvider";

const ListNotif: INotif[] = [
	{
		notif_id: 1,
		notif_company: {name: "Company A", image: "/temp/vase.png"},
		notif_workshop: {
			name: "Bouquet en vase",
			icon: <FlowerOne />,
			color: "blue",
		},
		notif_date_proposed: new Date("2024-02-07"),
		notif_time_proposed: "10:00",
		notif_duration: "2h",
		notif_location: "Antananrivo",
		notif_nb_participant: 22,
		notif_request: "Lorem",
	},
	{
		notif_id: 2,
		notif_company: {name: "Company B", image: "/temp/vase.png"},
		notif_workshop: {
			name: "Workshop 1",
			icon: <FlowerOne />,
			color: "blue",
		},
		notif_date_proposed: new Date("2024-02-09"),
		notif_time_proposed: "16:00",
		notif_duration: "2h",
		notif_location: "Antananrivo",
		notif_nb_participant: 22,
		notif_request: "Lorem",
	},
	{
		notif_id: 3,
		notif_company: {name: "Company C", image: "/temp/vase.png"},
		notif_workshop: {
			name: "Workshop 1",
			icon: <FlowerOne />,
			color: "blue",
		},
		notif_date_proposed: new Date("2024-02-09"),
		notif_time_proposed: "16:00",
		notif_duration: "2h",
		notif_location: "Antananrivo",
		notif_nb_participant: 22,
		notif_request: "Lorem",
	},
];

export default function NotifPanel({switchPopup}: {switchPopup: () => void}) {
	const context = useContext(NotifContext);

	const handleClick = (value: INotif) => {
		switchPopup();
		context.togglePopup();
		context.setValueInPopup(value);
	};

	return (
		<div className="absolute flex flex-col gap-10 bg-white top-16 right-0 z-50 rounded-2xl p-4 shadow-md">
			<div className="flex flex-col gap-2">
				<div className="font-bold text-brown">Notifications</div>
				<div className="bg-gray-60% bg-opacity-50 h-[1px] -mx-1"></div>
				<div className="flex flex-col gap-3">
					{ListNotif.map((item, index) => (
						<div
							key={index}
							className="cursor-pointer pl-2 py-1 flex gap-3 rounded-lg hover:bg-white-40% transition-all ease-linear duration-75"
							onClick={() => {
								handleClick(item);
							}}>
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
									value={item.notif_workshop.name}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
			<Link href="/admin/company">
				<div
					className="cursor-pointer flex justify-center opacity-60 hover:text-brown hover:opacity-100 transition-all ease-linear duration-75"
					onClick={switchPopup}>
					Voir tout
				</div>
			</Link>
		</div>
	);
}
