"use client"

import React from 'react'
import { useState } from 'react';
import { DateRange, DateRangeProps } from 'react-date-range';
import { addDays, format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

type Props = {} & DateRangeProps

interface Range {
  startDate: Date ;
  endDate: Date;
  key: string;
}

function page({}: Props) {

  const [state, setState] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(),1),
      key: 'selection'
    }
  ]);
  
  const formattedStartDate = format(state[0].startDate, 'dd/MM/yyyy');
  const formattedEndDate = format(state[0].endDate, 'dd/MM/yyyy');

  const handleChange = (item: any) => {
    setState([item.selection as Range]);
    console.log('Start Date:', item.selection.startDate);
    console.log('End Date:', item.selection.endDate);
  };


  return (
   <div>
      <DateRange
        onChange={handleChange}
        
        moveRangeOnFirstSelection={false}
        months={1}
        ranges={state}
        direction="horizontal"
      />;
      <div>
        Start Date: <input type="text" value={formattedStartDate} readOnly />
      </div>
      <div>
        End Date: <input type="text" value={formattedEndDate} readOnly />
      </div>
   </div>
  )
}

export default page