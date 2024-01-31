import React, { Children, ReactNode } from 'react'
import Image, { StaticImageData } from 'next/image'
import ImageCustom from './imageCustom'

type ProfileCardProps = {
    children?: ReactNode
    className?:string
    icon?:ReactNode
    styleIcon?: string
    styleImage?: string
    img: string | StaticImageData
}

function ProfileCard(props: ProfileCardProps) {
    const {children, className, icon, styleIcon, styleImage ,img} = props

  return (
    <div className={` flex flex-col w-80  bg-white-40% items-center gap-4 rounded-3xl pt-5 pb-14 ${className}`}>
        <div className='flex flex-col items-center'>
             <ImageCustom icon={icon} styleIcon={styleIcon} className={styleImage} img={img} />
            <span className='text-lg font-bold'> Mahefa</span>
            <span className='text-gray-60% font-bold text-sm'> Floral</span>
        </div>
        <div className='flex flex-col items-center gap-2'>
            {children}
        </div>
    </div>
  )
}

export default ProfileCard