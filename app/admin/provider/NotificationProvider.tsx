"use client";

import React, {Context, createContext, useState} from "react";
import ModalLayout from "@/components/modal";
import PopupNotif from "../component/PopupNotif";
import {INotif} from "@/types/INotif";
import {FlowerOne} from "@/constants/link/icons";

const notif: INotif = {
	notif_id: 1,
	notif_company: {name: "Company A", image: "/temp/vase.png"},
	notif_date_proposed: new Date("2024-02-07"),
	notif_time_proposed: "10h00",
	notif_workshop: {
		name: "Workshop 1",
		icon: <FlowerOne />,
		color: "blue",
	},
	notif_location: "Antananrivo",
	notif_nb_participant: 15,
	notif_duration: "1h30",
	notif_request:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ex pariatur nulla similique quidem sed ipsum veniam nostrum cupiditate. ",
};

type NotificationContextType = {
	togglePopup: () => void;
	setValueInPopup: (value: INotif) => void;
};

export const NotifContext: Context<any> = createContext<NotificationContextType>({
	togglePopup: () => {},
	setValueInPopup: (value: INotif) => {},
});

export default function NotificationProvider({children}: {children: React.ReactNode}) {
	// State OPEN Popup Notifs
	const [open, setOpen] = useState(false);
	const togglePopup = () => {
		setOpen(!open);
	};

	// State VALEUR dans le popup
	const [ValueInPopup, setValue] = useState<INotif>(notif);
	const setValueInPopup = (value: INotif) => {
		setValue(value);
	};

	// value
	const value: NotificationContextType = {
		togglePopup: togglePopup,
		setValueInPopup: setValueInPopup,
	};

	return (
		<NotifContext.Provider value={value}>
			<ModalLayout open={open} onClick={togglePopup} className="w-1/3 h-4/5">
				<PopupNotif notif={ValueInPopup} />
			</ModalLayout>
			{children}
		</NotifContext.Provider>
	);
}
