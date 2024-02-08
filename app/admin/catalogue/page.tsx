"use client";

import React from "react";
import Calendar from "@/app/admin/catalogue/component/Calendar";
import Panel from "./component/Panel";

export default function Page() {
	return (
		<div className="flex flex-row gap-4 h-full">
			<Panel />
			<Calendar />
		</div>
	);
}
