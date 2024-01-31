
import Image, { StaticImageData } from 'next/image'
import React, { ReactNode } from 'react'

type Props = {
    className?: string
    icon?: ReactNode
    img:StaticImageData | string 
}

function ImageCustom(props: Props) {

    const{ className= 'bg-white', icon, img} =props

  return (
    <div className=' relative w-[168px] h-[168px]  '>
    <Image 
        src={img} 
        alt={`shopping-1`} 
        fill
        className="rounded-full"
    />
   {icon ? 
   <div className={`absolute flex items-center justify-center bottom-5 right-1 w-8 h-8 rounded-full ${className}`}>
        {icon}
    </div> : null}
</div>
  )
}

export default ImageCustom