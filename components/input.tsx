'use client'

import React, { HTMLInputTypeAttribute, useState } from 'react'

type InputProps = {
    placeholder: string
    type?: HTMLInputTypeAttribute
}

function Input(props: InputProps) {
    const { placeholder, type = 'text' } = props
    const [definedType, setDefinedType] = useState<HTMLInputTypeAttribute>(type)
    const [showPassword, setShowPassword] = useState<boolean>(false)



    return (
        <div>
            <input type='' placeholder={placeholder} className='font-manrope outline-none' />
            {
                type === 'password' ? 
                <button>{ }</button> : null}
        </div>
    )
}

export default Input