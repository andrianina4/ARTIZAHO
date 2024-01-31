import { ISelect } from '@/types/IField'
import React from 'react'

type SelectProps = {
    values: Array<ISelect>,
    className?:String
}

function Select(props: SelectProps) {
    const { values, className } = props

    return (
        <select className={`select bg-white-40%  rounded-2xl h-14 font-manrope text-sm text-black-60%  w-full ${className}`}>
            {values.map((item, index) => {
                const { label, value } = item
                return <option key={index} value={value}>{label}</option>
            })}
        </select>
    )
}

export default Select