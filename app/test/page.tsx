"use client"

import React from 'react'
import { useState } from 'react';

type Props = {}

function page({}: Props) {


  const [rating, setRating] = useState(4); // Mettez ici la valeur de la note

  const handleRatingChange = (value:any) => {
    setRating(value);
  };  
  return (
    <div className='flex items-center gap-6'>
    <div className="rating rating-half rating-sm">
      {[...Array(10)].map((_, index) => (
        <input
          key={index}
          type="radio"
          name="rating-10"
          className={`bg-yellow-500 mask mask-star-2 mask-half-${(index % 2) + 1}`}
          checked={index + 1 === rating*2}
         
        />
      ))}
    </div>
    <div className='text-gray-60%'>{rating}/5</div>
  </div>
  )
}

export default page