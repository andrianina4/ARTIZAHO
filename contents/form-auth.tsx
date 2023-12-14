'use client'

import Button from '@/components/button'
import Input from '@/components/input'
import { TrajetLogin } from '@/constants/link/svg'
import link from '@/constants/utils/path'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {}

function FormAuth({ }: Props) {
    const router = useRouter()

    function handleSubmit() {
        router.push(link.reservationDate)
    }

    
    return (
        <form className=''>
            <Input placeholder='Email address' />
            <Input type='password' placeholder='Password' />
            <button className='text-black-60% text-sm block w-full text-right hover:text-opacity-70 mb-5'>Forgot your password?</button>

            <div className='mt-20'></div>
            <Button content='Sign in' onClick={handleSubmit} />
            
        </form>
    )
}

export default FormAuth