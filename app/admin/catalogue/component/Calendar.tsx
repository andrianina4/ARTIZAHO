import React, {useState} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import CalendarItem from "./CalendarItem";
import ModalLayout from "@/components/modal";
import AboutPopup from "./AboutPopup";

import "./style/style.css";

export default function Calendar() {
	const [open, setOpen] = useState(false);
	const handleToogle = () => {
		setOpen(!open);
	};
	const events = [
		{
			id: "1",
			title: "Pink",
			start: "2024-01-03",
			end: "2021-01-03",
		},
		{
			id: "2",
			title: "Green",
			start: "2024-01-04",
			end: "2021-01-05",
		},
	];
	const renderEventContent = <CalendarItem title="Bouquet en vase" />;

	return (
		<div className="grow overflow-y-scroll">
			<FullCalendar
				plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
				headerToolbar={{
					left: "prev,next title",
					center: "",
					right: "dayGridMonth,timeGridWeek,timeGridDay",
				}}
				initialView="dayGridMonth"
				events={events} // Liste des evenements
				eventContent={renderEventContent} // rendu des evenements su le tableau ??
				eventClick={(arg) => handleToogle()}
			/>
			<AboutPopup open={open} onClick={handleToogle} />
		</div>
	);
}
