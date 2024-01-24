import Input from '@/components/input'
import React, { ReactNode } from 'react'

type InputContainerProps = {
    children: ReactNode
    title:string
}

function InputContainer(props: InputContainerProps) {

    const { children, title}= props

  return (
    <div className='flex w-full gap-8 '>
        <div className='mt-5 text-black-default font-semibold w-1/5'>{title}</div>
       <div className='w-full flex items-center'> {children}</div>
    </div>
  )
}

export default InputContainer