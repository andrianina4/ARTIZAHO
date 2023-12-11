import Input from '@/components/input'
import NavBar from '@/components/nav-bar'
import Textarea from '@/components/textarea'
import { ArrowLeft, DateRange, Time } from '@/constants/link/icons'
import React from 'react'

type Props = {}

function PropositionDate({ }: Props) {
    return (
        <div className='min-h-screen'>
            <header className='w-full max-w-page mx-auto'>
                <NavBar isWhite />
            </header>

            <main className='py-7 px-24 flex justify-between w-full max-w-page mx-auto'>
                <div className='w-1/2'>
                    <h1 className='text-2xl font-bold text-brown flex items-center gap-x-3'><ArrowLeft /> Proposez des créneaux à l'artisan</h1>
                    <p className='ml-9 font-bold text-brown text-xs mt-2 mb-10'>Vous recevrez un email automatiquement si l'artisan ajoute un créneau <br /> qui correspond à votre demande.</p>
                    <form className='ml-9'>
                        <Input leftIcon={<DateRange />} placeholder='Calendrier' />
                        <Input leftIcon={<Time />} placeholder='Heure' />
                        <Textarea placeholder='Description'/>
                    </form>
                </div>

                <div className='flex-1'>

                </div>
            </main>
        </div>
    )
}

export default PropositionDate