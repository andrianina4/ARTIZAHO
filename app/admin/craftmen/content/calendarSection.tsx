'use client'

import React from 'react'
import CraftmanCalendar from '../component/calendar'
import Item from '../../catalogue/[id]/component/Item'
import CraftmanCalendarItem from '../component/craftmanCalendarItem'
import { craftmen2 } from '@/data/temp/craftman2'

const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);


function CalendarSection() {
  return (
    <div className=' flex flex-row w-full h-full gap-2 mt-2'>
        <div className=' flex flex-col justify-center w-1/5 gap-2 '>
           {
            craftmen2.map((craftman, index)=>(
              <CraftmanCalendarItem craftman={craftman} randomColor={randomColor}/>
            ))
           }
        </div>
        <CraftmanCalendar className="h-full mb-4 w-4/5"/>
    </div>
  )
}

export default CalendarSection  