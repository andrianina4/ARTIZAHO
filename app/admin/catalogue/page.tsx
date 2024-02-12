"use client";

import React, {Context, createContext, useState} from "react";
import Calendar from "@/app/admin/catalogue/component/Calendar";
import Panel from "./component/Panel";
import CalendarEventsProvider from "./component/provider/CalendarEventsProvider";

export default function Page() {
	return (
		<CalendarEventsProvider>
			<div className="flex flex-row gap-2 h-full">
				<Panel />
				<Calendar />
			</div>
		</CalendarEventsProvider>
	);
}
