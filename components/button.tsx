import React, { ReactNode } from 'react'

type ButtonProps = {
    content: string | ReactNode
    type?: 'submit' | 'button'
    color?: 'primary'
    onClick?: VoidFunction
}

function Button(props: ButtonProps) {
    const { content, onClick, color = 'primary', type = 'button' } = props

    return (
        <button onClick={onClick} type={type} className={`w-full py-5 text-sm text-whiteGray rounded-2xl bg-bronze hover:bg-opacity-80`}>
            {content}
        </button>
    )
}

export default Button