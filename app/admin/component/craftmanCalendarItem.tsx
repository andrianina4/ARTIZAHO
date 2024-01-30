import React from 'react'
import Image from 'next/image'

type Props = {
  img: string
}

function CraftmanCalendarItem(props: Props) {
  const {img}= props
  return (
  <div className='flex items-center gap-2 h-14 bg-white rounded-xl pl-6 max-w-[225px] '>
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
  )
}

export default CraftmanCalendarItem