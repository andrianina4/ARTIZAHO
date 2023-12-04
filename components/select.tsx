import { ISelect } from '@/types/IField'
import React from 'react'

type SelectProps = {
    values: Array<ISelect>
}

function Select(props: SelectProps) {
    const { values } = props

    return (
        <select className="select bg-white-40% mb-2 rounded-2xl h-14 font-manrope text-sm text-black-60%  w-full">
            {values.map((item, index) => {
                const { label, value } = item
                return <option key={index} value={value}>{label}</option>
            })}
        </select>
    )
}

export default Select