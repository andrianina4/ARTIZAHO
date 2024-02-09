import React, {useState} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, {DateClickArg} from "@fullcalendar/interaction";
import CalendarItem from "./CalendarItem";
import ModalLayout from "@/components/modal";
import AboutPopup from "./AboutPopup";

import "./style/style.css";
import {EventClickArg} from "@fullcalendar/core/index.js";
import AddWorkshop from "./AddWorkshop";

export default function Calendar() {
	const [events, setEvents] = useState([
		{
			id: "1",
			title: "Bouquet en vase",
			start: "2024-02-04",
			end: "2024-02-08",
			textColor: "blue",
			description: "exemple de description",
			// display: "block",
		},
		{
			id: "3",
			title: "Bouquet 2.0",
			start: "2024-02-05",
			end: "2024-02-07",
			textColor: "bronze",
			description: "exemple de description",
		},
	]);
	const [events2, setEvents2] = useState([
		{
			id: "2",
			title: "Bouquet sur mousse",
			start: "2024-02-06",
			textColor: "green",
			description: "exemple de description",
			type_event: "exemple de description",
		},
	]);

	const [openAbout, setOpenAbout] = useState(false);

	const [popupItem, setPopupItem] = useState({});

	const handleToogleAbout = () => {
		setOpenAbout(!openAbout);
	};

	const handleEventClick = (eventClickInfo: EventClickArg) => {
		// event lorsqu'on clique sur un événement
		handleToogleAbout();
		setPopupItem(eventClickInfo.event);
	};

	const customEventContent = (eventInfo: any): React.ReactNode => {
		console.log(eventInfo.event);
		return (
			<>
				<CalendarItem item={eventInfo.event} />
			</>
		);
	};

	return (
		<div className="grow overflow-y-scroll pr-2">
			<FullCalendar
				plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
				headerToolbar={{
					left: "prev,next title",
					center: "",
					right: "dayGridMonth,timeGridWeek",
				}}
				initialView="dayGridMonth"
				events={[...events, ...events2]} // Liste des evenements
				eventContent={customEventContent} // rendu des evenements sur le tableau
				eventClick={handleEventClick}
				// dayMaxEvents={2}
				// eventBackgroundColor="#030229"
				// eventBorderColor="none"
			/>
			<AboutPopup open={openAbout} onClick={handleToogleAbout} item={popupItem} />
		</div>
	);
}
