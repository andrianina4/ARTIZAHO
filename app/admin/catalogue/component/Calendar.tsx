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
import AddAtelierPopup from "./AddAtelierPopup";

export default function Calendar() {
	const [events, setEvents] = useState([
		{
			id: "1",
			title: "Bouquet en vase",
			start: "2024-01-04",
			textColor: "blue",
			description: "exemple de description",
		},
		{
			id: "1",
			title: "Bouquet en mousse",
			start: "2024-01-15",
			textColor: "bronze",
			description: "exemple de description",
		},
		{
			id: "1",
			title: "Bouquet en vase",
			start: "2024-01-31",
			textColor: "green",
			description: "exemple de description",
		},
		{
			id: "2",
			title: "Bouquet en mousse",
			start: "2024-02-01",
			textColor: "blue",
			description: "exemple de description",
		},
	]);
	const [openAbout, setOpenAbout] = useState(false);
	const [openAdd, setOpenAdd] = useState(false);

	const [popupItem, setPopupItem] = useState({});

	const handleToogleAbout = () => {
		setOpenAbout(!openAbout);
	};

	const handleToogleAdd = () => {
		setOpenAdd(!openAdd);
	};

	const handleEventClick = (eventClickInfo: EventClickArg) => {
		// Logique à exécuter lorsqu'on clique sur un événement
		setOpenAbout(!openAbout);
		setPopupItem(eventClickInfo.event);
	};

	const handleDateClick = (dateClickInfo: DateClickArg) => {
		// Logique à exécuter lorsqu'on clique sur une date sans evenement
		setOpenAdd(!openAdd);
		setPopupItem(dateClickInfo);
	};

	const customEventContent = (eventInfo: any): React.ReactNode => {
		return (
			<>
				<CalendarItem item={eventInfo.event} />
			</>
		);
	};

	return (
		<div className="grow overflow-y-scroll pr-4">
			<FullCalendar
				plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
				headerToolbar={{
					left: "prev,next title",
					center: "",
					right: "dayGridMonth,timeGridWeek,timeGridDay",
				}}
				initialView="dayGridMonth"
				events={events} // Liste des evenements
				eventContent={customEventContent} // rendu des evenements sur le tableau
				eventClick={handleEventClick}
				dateClick={handleDateClick}
			/>
			<AboutPopup open={openAbout} onClick={handleToogleAbout} item={popupItem} />
			<ModalLayout open={openAdd} onClick={handleToogleAdd} className="w-1/2">
				<AddAtelierPopup item={popupItem} />
			</ModalLayout>
		</div>
	);
}
