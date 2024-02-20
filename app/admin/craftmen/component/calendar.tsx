import React, {ReactNode, useRef, useState} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

// import CalendarItem from "./CalendarItem";
import ModalLayout from "@/components/modal";
// import AboutPopup from "./AboutPopup";

import "../style/calendarStyle.css";

type Props ={
    className: ReactNode
	handleclickDate: any
	
}

export default function CraftmanCalendar(props: Props) {


	// const renderEventContent = <CalendarItem title="Bouquet en vase" />;
    const {className ,handleclickDate}=props
	return (
		<div className={`grow overflow-y-scroll pr-4 ${className}`}>
			<FullCalendar
				plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
				headerToolbar={{
					
					
				}}
				initialView="dayGridMonth"
				select={handleclickDate}
				selectMirror={true}
				selectable={true}
				
			/>
			{/* <AboutPopup open={open} onClick={handleToogle} /> */}
		</div>
	);
}
