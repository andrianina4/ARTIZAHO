import Button from '@/components/button'
import Select from '@/components/select'
import { Heart, Users } from '@/constants/link/icons'
import { ISelect } from '@/types/IField'
import React from 'react'


const selectItem: Array<ISelect>=[
  {
		value: "paid", 
		label: "Paid"
	},
	{
		value: "inprogress",
		label: "In Progress",
	},
  
	{
		value: "refunded",
		label: "Refunded",
	},
]


function AttendanceItem() {
  return (
    <div className='grid grid-cols-custom text-sm font-bold bg-white items-center rounded-lg h-14 pl-4 my-1 '>
        <span className=''>001</span>
        <div className='flex items-center gap-2'>
            <div className='w-[30px] h-[30px] rounded-full bg-slate-500'></div>
            <div className='flex flex-col items-center '>
                <p className='text-black-default font-bold'>Mahefa</p>
            </div>
        </div>
        <div className='flex items-center gap-2'> <Heart/><p>Flwur</p></div>
        <div className='flex gap-2 items-center'><Users/> 2</div>
        <div>Entreprise</div>
        <div>12 Dec 2023</div>
       <Select values={selectItem} className="!select-xs"/>
        <Button content="..." className='!bg-transparent !text-black '/>
    </div>
  )
}

export default AttendanceItem