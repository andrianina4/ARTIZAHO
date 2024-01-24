import React, { Children, ReactNode } from 'react'
import Image from 'next/image'

type ProfileCardProps = {
    children?: ReactNode
    className?:string
}

function ProfileCard(props: ProfileCardProps) {
    const {children, className} = props

  return (
    <div className={` flex flex-col w-80  bg-white-40% items-center gap-4 rounded-3xl pt-5 pb-14 ${className}`}>
        <div className='flex flex-col items-center'>
            <div className=' relative w-[168px] h-[168px]  '>
                <Image 
                    src={"/temp/vase.png"} 
                    alt={`shopping-1`}
                    fill
                    className="rounded-full"
                />
            </div>
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