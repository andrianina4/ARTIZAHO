import Input from '@/components/input'
import React, { ReactNode } from 'react'

type InputContainerProps = {
    children: ReactNode
    title:string
}

function InputContainer(props: InputContainerProps) {

    const { children, title}= props

  return (
    <div className='flex w-full gap-6 '>
        <div className='mt-5'>{title}</div>
        <div>{children}</div>
    </div>
  )
}

export default InputContainer