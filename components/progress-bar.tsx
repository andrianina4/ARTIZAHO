import { Heart } from '@/constants/link/icons'
import React, { ReactNode } from 'react'

type ProgressBarProps ={
    leftIcon?: ReactNode
    colorBar:string
    text:string
    bgIcon:string
}

function ProgressBar(props: ProgressBarProps) {
   const {leftIcon, colorBar, text, bgIcon} = props

  return (
    <div className='flex w-[400px] gap-2 relative my-1  '> 
        <div className={`w-[40px] h-[40px] bg-${bgIcon}  flex justify-center items-center rounded-lg text-${colorBar}`}><Heart/></div>
        <div className=' flex flex-col justify-between w-4/5'>
            <div className='relative bg-white-10%  h-[10px] w-full rounded-lg' ><div className={`absolute h-full w-3/5 bg-${colorBar} rounded-lg`}></div></div>
            <p className='text-sm font-semibold '>{text} </p>
        </div>
        <div className=' absolute -top-2 right-0'>3</div>
    </div>
  )
}

export default ProgressBar