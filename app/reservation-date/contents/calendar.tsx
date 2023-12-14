'use client'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import React from 'react'
import Button from '@/components/button'
import { DateRange } from '@/constants/link/icons'
import { useRouter } from 'next/navigation'
import link from '@/constants/utils/path'

type Props = {}

function Calendar({ }: Props) {
    const router = useRouter()

    function redirectPropositionDate() {
        router.push(link.propositionDate)
    }

    return (
        <div className=''>
            <FullCalendar plugins={[dayGridPlugin]}
                initialView="dayGridMonth" />
            <div className='flex gap-x-8 mt-3 text-black-default '>
                <div className='flex gap-x-2 items-center'><div className='w-3 h-3 bg-reddishBrown rounded-lg'></div> <span>Available</span></div>
                <div className='flex gap-x-2 items-center'><div className='w-3 h-3 bg-brown rounded-lg'></div> <span>Complete</span></div>
            </div>
            <div className='w-52 mt-5'><Button onClick={redirectPropositionDate} leftIcon={<DateRange />} content="PROPOSE A DATE" /></div>
        </div>
    )
}

export default Calendar