'use client'

import Button from '@/components/button'
import Input from '@/components/input'
import NavBar from '@/components/nav-bar'
import PresentationTrainer from '@/components/presentation-trainer'
import Textarea from '@/components/textarea'
import { ArrowLeft, DateRange, Send, Time } from '@/constants/link/icons'
import link from '@/constants/utils/path'
import { trainers } from '@/data/temp/trainers'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {}

function PropositionDate({ }: Props) {
    // Temp trainer
    const trainer = trainers[0]
    const router = useRouter()

    function handleClickSendButton() {
        router.push(link.feedback)
    }

    return (
        <div className='min-h-screen'>
            <header className='w-full max-w-page mx-auto'>
                <NavBar isWhite />
            </header>

            <main className='py-7 px-24 flex justify-between items-center gap-x-20 w-full max-w-page mx-auto'>
                <section className='w-1/2'>
                    <div className='text-2xl font-bold text-brown flex items-center gap-x-3'>
                        <Button isBackButton content={<ArrowLeft />} className='!bg-transparent w-min !text-brown !text-2xl !p-0' />
                        <span>Offer slots to the craftsman</span>
                    </div>
                    <p className='ml-9  text-brown text-sm mt-2 mb-10'>You will receive an email automatically if the craftsman adds a slot<br />
                        that matches your request.</p>
                    <form className='flex flex-col gap-y-2 ml-9'>
                        <Input leftIcon={<DateRange />} placeholder='Calendar' />
                        <Input leftIcon={<Time />} placeholder='Hour' />
                        <Textarea placeholder='Description' />
                        <div className='w-min'>
                            <Button onClick={handleClickSendButton} content='Request' leftIcon={<Send />} />
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