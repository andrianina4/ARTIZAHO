import React from 'react'
import Image from 'next/image'
import { ICraftman2 } from '@/types/ICraftman'

type Props = {
  craftman: ICraftman2
  randomColor: string
}

function CraftmanCalendarItem(props: Props) {
  const {craftman, randomColor}= props
  const{craftman_name,craftman_image,craftman_domaine, craftman_color}= craftman
  return (
  <div className='flex items-center gap-2 h-14 bg-white rounded-xl pl-6 max-w-[225px] border-2 border-solid' style={{ borderColor: craftman_color }}>
    <div className='w-[30px] h-[30px] rounded-full bg-slate-500 relative'>
    <Image 
    src={craftman_image}
    alt={`shopping-1`}
    fill
    className="rounded-full"
      />
    </div>
    <div className='flex flex-col items-center '>
        <p className='text-black-default font-bold'>{craftman_name}</p>
        <p className='text-gray-60% font-normal'>{craftman_domaine}</p>
    </div>
</div>
  )
}

export default CraftmanCalendarItem