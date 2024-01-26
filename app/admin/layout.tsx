"use client";

import Sidebar from "@/components/sidebar";
import Header from "./component/header";
import {usePathname} from "next/navigation";
import {ReactNode} from "react";

export default function Layout({children}: {children: React.ReactNode}) {
	const pathname = usePathname();
	let dynamicHeader: ReactNode;
	switch (pathname) {
		case "/admin":
			dynamicHeader = (
				<Header BigTitle="Bienvenue sur notre dashboard" LittleTitle="Hi Safe Travels" />
			);
			break;
		case "/admin/teams":
			dynamicHeader = <Header BigTitle="Teams" LittleTitle="List of all company members" />;
			break;
		case "/admin/attendance":
			dynamicHeader = <Header BigTitle="Attendance" LittleTitle="List of Reservations" />;
			break;
		case "/admin/catalogue":
			dynamicHeader = <Header BigTitle="Catalogue" LittleTitle="" />;
			break;
		case "/admin/craftmen":
			dynamicHeader = <Header BigTitle="Craftmen" LittleTitle="List of Craftsmen" />;
			break;
		case "/admin/clients":
			dynamicHeader = <Header BigTitle="Clients" LittleTitle="List of Clients" />;
			break;
		case "/admin/settings":
			dynamicHeader = <Header BigTitle="Settings" LittleTitle="All dashboard settings" />;
			break;
		default:
			dynamicHeader = <Header BigTitle="" LittleTitle="" />;
			break;
	}

	return (
		<div className=" flex flex-row h-screen bg-white-40% p-5 gap-7  ">
			<div className=" w-[280px]">
				<Sidebar />
			</div>
			<div className="w-full h-full flex flex-col gap-7">
				<div className="h-[10%]">{dynamicHeader}</div>
				<div className=" h-[90%]">{children}</div>
			</div>
		</div>
	);
}
