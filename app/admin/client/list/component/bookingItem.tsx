import React from 'react'
import Image from 'next/image'
import { Heart } from '@/constants/link/icons'

type Props = {
    img:string
}

function BookingItem({img}: Props) {
  return (
    <div className=' grid grid-cols-custom-4 text-sm font-bold bg-white-40% items-center rounded-lg h-14 pl-4 my-1 ml-8'>
        <div className='flex items-center gap-2'>
            <div className='w-[30px] h-[30px] rounded-full bg-slate-500 relative'>
            <Image 
            src={img}
            alt={`shopping-1`}
            fill
            className="rounded-full"
        />
            </div>
            <div className='flex flex-col items-center '>
                <p className='text-black-default font-bold'>Mahefa</p>
                <p className='text-gray-60% font-normal'> Floral</p>
            </div>
        </div>
        <div className='flex items-center gap-2'>
           <div className='bg-blue bg-opacity-20 text-blue h-[28px] w-[28px] rounded-lg flex justify-center items-center' > <Heart/></div>
            <span className='font-normal text-gray-60%'>Bouquet en vase et 3 autres</span>
        </div>
        <div>
            <p className='text-black-default font-bold'>Mahefa</p>
            <p className='text-gray-60% font-normal'> Floral</p>
        </div>
        <div className="badge bg-greenLight text-green border-0">Paid</div>
    </div>
  )
}

export default BookingItem