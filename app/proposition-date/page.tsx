import Button from '@/components/button'
import Input from '@/components/input'
import NavBar from '@/components/nav-bar'
import PresentationTrainer from '@/components/presentation-trainer'
import Textarea from '@/components/textarea'
import { ArrowLeft, DateRange, Send, Time } from '@/constants/link/icons'
import { trainers } from '@/data/temp/trainers'
import React from 'react'

type Props = {}

function PropositionDate({ }: Props) {
    // Temp trainer
    const trainer = trainers[0]


    return (
        <div className='min-h-screen'>
            <header className='w-full max-w-page mx-auto'>
                <NavBar isWhite />
            </header>

            <main className='py-7 px-24 flex justify-between items-center gap-x-20 w-full max-w-page mx-auto'>
                <section className='w-1/2'>
                    <h1 className='text-2xl font-bold text-brown flex items-center gap-x-3'><ArrowLeft /> Proposez des créneaux à l'artisan</h1>
                    <p className='ml-9  text-brown text-sm mt-2 mb-10'>Vous recevrez un email automatiquement si l'artisan ajoute un créneau <br /> qui correspond à votre demande.</p>
                    <form className='flex flex-col gap-y-2 ml-9'>
                        <Input leftIcon={<DateRange />} placeholder='Calendrier' />
                        <Input leftIcon={<Time />} placeholder='Heure' />
                        <Textarea placeholder='Description' />
                        <div className='w-min'>
                            <Button content='Demander' leftIcon={<Send />} />
                        </div>
                    </form>
                </section>

                <section className='flex-1'>
                    <PresentationTrainer trainer={trainer} />
                </section>
            </main>
        </div>
    )
}

export default PropositionDate