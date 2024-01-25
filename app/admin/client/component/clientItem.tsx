import React from 'react'
import { Heart, Users } from '@/constants/link/icons'
import StarScore from '@/components/star-score'
import Image from 'next/image'

type Props = {
    img:string
}

function ClientItem(props: Props) {
    const{img}= props
  return (
    <div className='grid grid-cols-custom-3 text-sm font-bold bg-white items-center rounded-lg h-14 pl-4 my-1 hover:mt-1 '>
        <div className='flex items-center gap-2'>
            <div className='w-[30px] h-[30px] rounded-full bg-slate-500 relative'>
            <Image 
            src={img}
            alt={`shopping-1`}
            fill
            className="rounded-full"
        />
            </div>
            <p className='text-black-default font-bold'>Mahefa</p>
        </div>
        <div>anotnioheryramamonjisoa@gmail</div>
        <div>0341356698</div>
       <div className='font-normal text-gray-60% flex items-center gap-2'> <Users/> Antananarivo Madagascar</div>
        <div className='flex gap-2 items-center'><Users/> 2</div>
        <button>...</button>
    </div>
  )
}

export default ClientItem