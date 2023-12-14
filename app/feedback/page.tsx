'use client'

import Button from '@/components/button'
import NavBar from '@/components/nav-bar'
import Textarea from '@/components/textarea'
import { SendDuotone } from '@/constants/link/icons'
import React from 'react'

type Props = {}

function Feedback({ }: Props) {
    return (
        <div className="min-h-screen bg-bg-feedback bg-cover flex flex-col">
            <header className='w-full max-w-page mx-auto'>
                <NavBar />
            </header>

            <main className='flex-1 py-7 px-24 w-full max-w-page mx-auto flex justify-center '>
                <div className='h-[70vh] w-4/5 bg-white rounded-3xl py-14 px-24 relative'>
                    <h1 className='font-moonGet uppercase text-xl text-bronze font-extrabold tracking-widest text-center'>Partagez votre expérience avec nos ateliers</h1>
                    <p className='mt-5'>
                        Nous attachons une grande importance à votre avis! Votre retour nous permet d'améliorer continuellement nos ateliers.
                        Merci de prendre le temps de partager votre expérience avec nous
                    </p>
                    <Textarea placeholder='Vos retours sont importants pour nous! Partagez votre expérience avec nos ateliers ici' className='my-5 h-60' />
                    <div className='flex items-center gap-x-3'>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star bg-bronze" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-bronze" checked />
                            <input type="radio" name="rating-1" className="mask mask-star bg-bronze" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-bronze" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-bronze" />
                        </div>
                        <span className='font-bold text-black-60%'>4.5/5</span>
                    </div>
                <Button leftIcon={<SendDuotone className="text-4xl"/>} content="Envoyer" className='absolute bottom-14 right-24 w-min text-lg'/>
                </div>

            </main>
        </div>
    )
}

export default Feedback