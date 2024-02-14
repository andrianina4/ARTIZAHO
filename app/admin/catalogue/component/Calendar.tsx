import React, {useContext, useState} from "react";
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
import {CalendarEventsContext} from "./provider/CalendarEventsProvider";

export default function Calendar() {
	const EventsFromContext = useContext(CalendarEventsContext);

	// const [EventsToShow, setEventsToShow] = useState([]);

	const [openAbout, setOpenAbout] = useState(false);

	const [popupItem, setPopupItem] = useState({});

	const handleToogleAbout = () => {
		setOpenAbout(!openAbout);
	};

	const handleEventClick = (eventClickInfo: EventClickArg) => {
		// event lorsqu'on clique sur un événement
		handleToogleAbout();
		setPopupItem(eventClickInfo.event);
		console.log(eventClickInfo.event)
	};

	const customEventContent = (eventInfo: any): React.ReactNode => {
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
				events={
					EventsFromContext.FilteredEvents.length === 0
						? EventsFromContext.InitialEvents
						: EventsFromContext.FilteredEvents
				} // Liste des evenements
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
