'use client'

import Button from '@/components/button'
import { People, Time } from '@/constants/link/icons'
import link from '@/constants/utils/path'
import { useRouter } from 'next/navigation'
import React from 'react'

type DateItemProps = {
    isSelected?: boolean
    date: string
    // créneau
    slots: string
    remainingSpace: number
}

function DateItem(props: DateItemProps) {
    const router = useRouter()
    const { isSelected, date, remainingSpace, slots } = props

    function redirectValidation() {
        router.push(link.validationDate)
    }

    return (
        <div className='flex justify-between items-center mb-8'>
            <div className='flex items-center'>
                <div className={`h-8 w-3  rounded-r-md mr-5 ${isSelected ? 'bg-reddishBrown' : ''}`}></div>
                <p className='uppercase w-56 text-brown text-base font-bold'>{date}</p>
                <p className='bg-reddishBrown text-white font-semibold py-2 px-4 rounded-lg mr-2 w-44 flex items-center justify-center gap-x-2'><span className='text-base'><Time /></span> {slots}</p>
                <p className='bg-reddishBrown text-white font-semibold py-2 px-4 rounded-lg mr-2 w-40 flex items-center justify-center gap-x-2'><span className='text-base'><People /></span> {remainingSpace} personne{remainingSpace > 1 ? 's' : ''}</p>
            </div>

            <Button onClick={redirectValidation} content='CHOISIR' className={`w-min h-min ${isSelected ? '' : 'opacity-50'}`} />
        </div>
    )
}

export default DateItem