import ButtonForNotif from "@/components/ButtonForNotif";
import NotifItem from "@/components/NotifItem";
import NotifItemDuration from "@/components/NotifItemDuration";
import {MiniCalendar, MiniToolbox, PeopleFill, RoundPlace} from "@/constants/link/icons";
import {INotif} from "@/types/INotif";
import Image from "next/image";
import React from "react";
import NotifRequest from "./NotifRequest";

export default function PopupNotif({notif}: {notif: INotif}) {
	const onDeny = () => {};
	const onAccept = () => {};
	return (
		<div className="w-full flex flex-col justify-between">
			{/* NOM et LOGO */}
			<div>
				<div className="flex items-center gap-3">
					<div className="w-12 h-12 rounded-full bg-slate-500 relative">
						<Image
							src={notif.notif_company.image}
							alt="logo company"
							fill
							className="rounded-full"
						/>
					</div>
					<div className="flex flex-col">
						<p className="font-bold">{notif.notif_company.name}</p>
						<p className="font-normal opacity-50">Company</p>
					</div>
				</div>
			</div>
			{/* ABOUT */}
			<div className="flex flex-col gap-4">
				<NotifItem
					label="Workshop"
					value={notif.notif_workshop.name}
					icon={<MiniToolbox className="w-5 h-4" />}
				/>
				<NotifItem
					label="Proposed Date"
					value={notif.notif_date_proposed}
					icon={<MiniCalendar className="w-5 h-4" />}
				/>
				<NotifItem
					label="Location"
					value={notif.notif_location}
					icon={<RoundPlace className="w-5 h-4" />}
				/>
				<NotifItem
					label="Number of attendees"
					value={notif.notif_nb_participant}
					icon={<PeopleFill className="w-5 h-4" />}
				/>
				<NotifItemDuration duration={notif.notif_duration} time={notif.notif_time_proposed} />
				<NotifRequest text={notif.notif_request} />
			</div>
			{/* BUTTONS */}
			<div className="flex flex-row justify-end gap-4">
				<ButtonForNotif label="Accept" type="OK" onClick={onAccept} />
				<ButtonForNotif label="Refuse" type="NOK" onClick={onDeny} />
			</div>
		</div>
	);
}
