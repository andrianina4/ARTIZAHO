import Image from 'next/image'
import React from 'react'

type MiniCardProps = {
    name:string
    email:string
    img:string
}

function Minicard(props: MiniCardProps) {
    const{name, email, img} = props

  return (
    <div className="flex flex-row gap-3  ">
        <div className="bg-bronze w-1 rounded-xl"></div>
        <div className="w-[56px] h-[56px] relative">
        <Image 
            src={img}
            alt={`shopping-1`}
            fill
            className="rounded-full"
        />
        </div>
        <div>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    </div>
  )
}

export default Minicard