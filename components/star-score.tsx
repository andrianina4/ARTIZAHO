"use client"
import { Star } from '@/constants/link/icons'
import React, { useState } from 'react'

type Props = {}

function StarScore({}: Props) {

    const[rating , setRating] = useState<number>(5)

    const handleChangeRating = (newRating: number)=>{
        setRating(newRating)
    }

  return (
    <div className='flex items-center gap-6'>
        <div className="rating rating-half rating-sm   ">
            <input type="radio" name="rating-10" className="rating-hidden" />
            <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
            <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
            <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-1"  />
            <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
            <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
            <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
            <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
            <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-2" checked/>
            <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-1" />
            <input type="radio" name="rating-10" className="bg-yellow-500 mask mask-star-2 mask-half-2" />
        </div>
        <div className='text-gray-60%'>4/5</div>
    </div>
  )
}

export default StarScore