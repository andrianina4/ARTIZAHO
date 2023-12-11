import Button from '@/components/button'
import { LeftLine, People, RightLine } from '@/constants/link/icons'
import React from 'react'

type Props = {}

function ChoiceNumberPersonne({ }: Props) {
    return (
        <div className='flex gap-x-3 items-center bg-white-40% text-lg w-min py-2 px-4 rounded-lg'>
            <span className='text-brown'><People /></span>
            <Button content={<LeftLine />} className='bg-white text-lg text-black-default w-min' />
            <span className='text-black-default text-base'>2</span>
            <Button content={<RightLine />} className='bg-white text-lg text-black-default w-min' />
        </div>
    )
}

export default ChoiceNumberPersonne