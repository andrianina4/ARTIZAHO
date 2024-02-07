import React, { ReactNode } from 'react'

type ModalItemProps = {
    leftIcon: ReactNode
    text:string
    className?:ReactNode
}

function ModalItem(props: ModalItemProps) {

    const{leftIcon, text, className}= props

  return (
    <div className={`flex py-4 pl-8 gap-4 items-center rounded-2xl bg-white-40% ${className}`}> 
        <span>{leftIcon}</span>
        <span>{text}</span>
    </div>
  )
}

export default ModalItem