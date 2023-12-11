import React, { ReactNode } from 'react'

type ButtonProps = {
    content: string | ReactNode
    leftIcon?: ReactNode
    type?: 'submit' | 'button'
    color?: 'primary'
    onClick?: VoidFunction
}

function Button(props: ButtonProps) {
    const { content, leftIcon, onClick, color = 'primary', type = 'button' } = props

    return (
        <button onClick={onClick} type={type} className={`w-full p-4 text-sm text-whiteGray rounded-2xl flex justify-center items-center gap-x-2 bg-bronze hover:bg-opacity-80`}>
            {leftIcon ? <div className='text-xl'>{leftIcon}</div> : null}
            {content}
        </button>
    )
}

export default Button