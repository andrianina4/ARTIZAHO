"use client";

import Sidebar from "@/components/sidebar";
import Header from "./component/header";
import {usePathname} from "next/navigation";
import {ReactNode, useState} from "react";
import ModalLayout from "@/components/modal";
import PopupNotif from "./component/PopupNotif";
import {INotif} from "@/types/INotif";

const notif: INotif = {
	notif_id: 1,
	notif_company: {name: "Company A", image: "/temp/vase.png"},
	notif_date_proposed: new Date("2024-02-07"),
	notif_time_proposed: "10h00",
	notif_workshop: "Workshop 1",
	notif_location: "Antananrivo",
	notif_nb_particiant: 15,
	notif_duration: "1h30",
	notif_request:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ex pariatur nulla similique quidem sed ipsum veniam nostrum cupiditate. ",
};

export default function Layout({children}: {children: React.ReactNode}) {
	const pathname = usePathname();
	let dynamicHeader: ReactNode;
	if (pathname === "/admin")
		dynamicHeader = (
			<Header BigTitle="Welcome on our dashboard" LittleTitle="Hello Artizaho" searchBar={false} />
		);
	else if (pathname.startsWith("/admin/teams"))
		dynamicHeader = <Header BigTitle="Teams" LittleTitle="List of all company members" />;
	else if (pathname.startsWith("/admin/attendance"))
		dynamicHeader = <Header BigTitle="Attendance" LittleTitle="List of Reservations" />;
	else if (pathname.startsWith("/admin/catalogue"))
		dynamicHeader = <Header BigTitle="Catalogue" LittleTitle="Planning" searchBar={false} />;
	else if (pathname.startsWith("/admin/craftmen"))
		dynamicHeader = <Header BigTitle="Craftmen" LittleTitle="List of Craftsmen" />;
	else if (pathname.startsWith("/admin/client"))
		dynamicHeader = <Header BigTitle="Clients" LittleTitle="List of Clients" />;
	else if (pathname.startsWith("/admin/company"))
		dynamicHeader = <Header BigTitle="Company" LittleTitle="List of Companies" />;
	else if (pathname.startsWith("/admin/settings"))
		dynamicHeader = (
			<Header BigTitle="Settings" LittleTitle="Dashboard settings" searchBar={false} />
		);
	else dynamicHeader = <Header BigTitle="" LittleTitle="" />;

	// State Popup Notifs
	const [open, setOpen] = useState(true);
	const [NotifInPopup, setNotifInPopup] = useState(notif);
	const handleToogle = () => {
		setOpen(!open);
	};

	return (
		<div className=" flex flex-row h-screen w-screen bg-white-40% p-5 gap-7">
			<div className=" w-[280px]">
				<Sidebar />
			</div>
			<div className="w-full h-full flex flex-col gap-7">
				<div className="h-[10%]">{dynamicHeader}</div>
				<div className=" h-[90%]">{children}</div>
			</div>
			{/* POPUP NOTIF */}
			<ModalLayout open={open} onClick={handleToogle} className="w-1/3 h-4/5">
				<PopupNotif notif={NotifInPopup} />
			</ModalLayout>
		</div>
	);
}
