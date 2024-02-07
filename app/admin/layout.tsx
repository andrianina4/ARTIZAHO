"use client";

import Sidebar from "@/components/sidebar";
import Header from "./component/header";
import {usePathname} from "next/navigation";
import {ReactNode} from "react";

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
		dynamicHeader = <Header BigTitle="Catalogue" LittleTitle="Planning" />;
	else if (pathname.startsWith("/admin/craftmen"))
		dynamicHeader = <Header BigTitle="Craftmen" LittleTitle="List of Craftsmen" />;
	else if (pathname.startsWith("/admin/client"))
		dynamicHeader = <Header BigTitle="Clients" LittleTitle="List of Clients" />;
	else if (pathname.startsWith("/admin/company"))
		dynamicHeader = <Header BigTitle="Company" LittleTitle="List of Companies" />;
	else if (pathname.startsWith("/admin/settings"))
		dynamicHeader = <Header BigTitle="Settings" LittleTitle="Dashboard settings" />;
	else dynamicHeader = <Header BigTitle="" LittleTitle="" />;

	return (
		<div className=" flex flex-row h-screen w-screen bg-white-40% p-5 gap-7  ">
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
