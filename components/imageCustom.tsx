
import Image, { StaticImageData } from 'next/image'
import React, { ReactNode } from 'react'

type Props = {
    styleIcon?: string
    className?: string
    icon?: ReactNode
    img:StaticImageData | string 
}

function ImageCustom(props: Props) {

    const{ styleIcon= 'bg-white', className='w-[168px] h-[168px]' ,icon, img} =props

  return (
    <div className={`relative  ${className}`}>
    <Image 
        src={img} 
        alt={`shopping-1`} 
        fill
        className="rounded-full"
    />
   {icon ? 
   <div className={`absolute flex items-center justify-center bottom-5 right-1 w-8 h-8 rounded-full ${styleIcon}`}>
        {icon}
    </div> : null}
</div>
  )
}

export default ImageCustom