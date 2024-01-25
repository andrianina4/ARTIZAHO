'use client'

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction"

  const handleDateClick = (arg:any) => { // bind with an arrow function
  alert(arg.dateStr)}
export default function Test() {  

  return <div className=" h-screen">
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      dateClick={handleDateClick}
      
    />
  </div>;
}
