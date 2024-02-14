import React, {useContext, useState} from "react";
import {CalendarEventsContext} from "../provider/CalendarEventsProvider";

export default function FiltreCompany() {
	const EventsFromContext = useContext(CalendarEventsContext);
	const [checked, setChecked] = useState<boolean>(false);
	const handleChecked = () => {
		setChecked(!checked);
		if (checked) {
			EventsFromContext.removeFilterCompany();
		} else {
			EventsFromContext.filterCompany();
		}
	};

	return (
		<div className="flex flex-row items-center gap-2 mt-7">
			<input
				className="checkbox border-[#917155] checked:border-bronze [--chkbg:theme(colors.bronze)] [--chkfg:white]"
				type="checkbox"
				checked={checked}
				onChange={handleChecked}
			/>
			<div className="flex items-center font-bold">Company Requests</div>
		</div>
	);
}
