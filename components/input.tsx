'use client'

import { EyeIcon, EyeOffIcon } from '@/constants/link/icons'
import React, { HTMLInputTypeAttribute, useState } from 'react'

type InputProps = {
    placeholder: string
    type?: HTMLInputTypeAttribute
}

function Input(props: InputProps) {
    const { placeholder, type = 'text' } = props
    const [definedType, setDefinedType] = useState<HTMLInputTypeAttribute>(type)
    const [showPassword, setShowPassword] = useState<boolean>(false)

    function toggleShowPassword() {
        const toggleDefinedType = !showPassword ? 'text' : 'password'
        setShowPassword(currentValue => !currentValue)
        setDefinedType(toggleDefinedType)
    }


    return (
        <div className='bg-white-40% mb-2 py-5 px-6 rounded-2xl flex input input-bordered h-14'>
            <input type={definedType} placeholder={placeholder} className='font-manrope text-sm outline-none bg-white-40% flex-1 text-black-60%' />
            {
                type === 'password'
                    ? <button className='text-xl' onClick={toggleShowPassword} type='button'>
                        {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                    : null
            }
        </div>
    )
}

export default Input