import React from 'react'
import { Heart, Users } from '@/constants/link/icons'
import StarScore from '@/components/star-score'
import Image from 'next/image'

type Props = {
    img:string
}

function CraftemenItem(props: Props) {
    const{img}= props
  return (
    <div className='grid grid-cols-custom-2 text-sm font-bold bg-white items-center rounded-lg h-14 pl-4 my-1 '>
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
        <div>Floral</div>
        <div className='flex items-center gap-2'>
           <div className='bg-blue bg-opacity-20 text-blue h-[28px] w-[28px] rounded-lg flex justify-center items-center' > <Heart/></div>
            <span className='font-normal text-gray-60%'>Bouquet en vase et 3 autres</span>
        </div>
        <div className='flex gap-2 items-center'><Users/> 2</div>
        <StarScore/>
        <button>...</button>
    </div>
  )
}

export default CraftemenItem