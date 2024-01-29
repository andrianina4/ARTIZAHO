import { Heart, Users } from '@/constants/link/icons'
import React from 'react'


function AttendanceItem() {
  return (
    <div className='grid grid-cols-custom text-sm font-bold bg-white items-center rounded-lg h-14 pl-4 my-1 '>
        <span className=''>001</span>
        <div className='flex items-center gap-2'>
            <div className='w-[30px] h-[30px] rounded-full bg-slate-500'></div>
            <div className='flex flex-col items-center '>
                <p className='text-black-default font-bold'>Mahefa</p>
                <p className='text-gray-60% font-normal'> Floral</p>
            </div>
        </div>
        <div className='flex items-center gap-2'> <Heart/><p>Flwur</p></div>
        <div className='flex gap-2 items-center'><Users/> 2</div>
        <div>Entreprise</div>
        <div>12 Dec 2023</div>
        <div className="badge bg-greenLight text-green border-0">Paid</div>
        <div className='font-bold'>...</div>
    </div>
  )
}

export default AttendanceItem