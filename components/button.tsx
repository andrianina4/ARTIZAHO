import React, { ReactNode } from 'react'

type ButtonProps = {
    content: string | ReactNode
    type? : 'submit' | 'button'
    color?: 'primary'
}

function Button(props: ButtonProps) {
    const { content, color = 'primary', type = 'button' } = props

    return (
        <button type={type} className={`w-full py-5 text-sm text-whiteGray rounded-2xl bg-bronze`}>
            {content}
        </button>
    )
}

export default Button