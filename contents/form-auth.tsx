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
            <Input placeholder='Adresse email' />
            <Input type='password' placeholder='Mot de passe' />
            <button className='text-black-60% text-sm block w-full text-right hover:text-opacity-70'>Mot de passe oublié?</button>

            <div className='mt-24'></div>
            <Button content='Se connecter' onClick={handleSubmit} />
            
        </form>
    )
}

export default FormAuth