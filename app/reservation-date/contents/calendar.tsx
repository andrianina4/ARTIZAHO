'use client'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import React from 'react'

type Props = {}

function Calendar({ }: Props) {
    return (
        <div>
            <FullCalendar plugins={[dayGridPlugin]}
                initialView="dayGridMonth" />
        </div>
    )
}

export default Calendar