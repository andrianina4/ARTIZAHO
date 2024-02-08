"use client";

import {NotifIcon, SearchIcon} from "@/constants/link/icons";
import React, {useState} from "react";
import NotifPanel from "./NotifPanel";

type HeaderProps = {
	BigTitle: string;
	LittleTitle: string;
	searchBar?: boolean;
	notif?: boolean;
};

export default function Header(props: HeaderProps) {
	const {BigTitle, LittleTitle, searchBar = true, notif = true} = props;

	// state pour savoir si i y a des notifs
	const [activeNotif, setNotif] = useState<boolean>(true);
	// state pour savoir si le panel est actif sur la page
	const [PopupNotif, setPopupNotif] = useState<boolean>(false);
	const switchPopup = () => {
		setPopupNotif(!PopupNotif);
	};

	return (
		<div className="flex flex-row justify-between items-center">
			<div>
				<p className="text-brown text-2xl font-bold ">{BigTitle}</p>
				<p className="text-sm opacity-60">{LittleTitle}</p>
			</div>
			<div className="flex gap-2">
				{searchBar && (
					<div className="w-96 bg-white px-6 rounded-2xl flex items-center gap-2 h-14">
						<SearchIcon className="w-6 h-6 text-brown" />
						<input type="text" placeholder="Search" className="w-full outline-none" />
					</div>
				)}
				{notif && (
					<div className="relative">
						<div
							className="w-14 h-14 flex items-center justify-center bg-white rounded-2xl text-brown cursor-pointer"
							onClick={switchPopup}>
							{activeNotif && (
								<div className="w-3 h-3 rounded-full bg-red-500 border-2 border-white absolute top-3 right-4"></div>
							)}
							<NotifIcon className="w-6 h-6" />
						</div>
						{PopupNotif && <NotifPanel />}
					</div>
				)}
			</div>
		</div>
	);
}
