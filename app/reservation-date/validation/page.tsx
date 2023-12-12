import Button from '@/components/button'
import Input from '@/components/input'
import NavBar from '@/components/nav-bar'
import PresentationTrainer from '@/components/presentation-trainer'
import ShoppingCart from '@/components/shopping-cart-item'
import { ArrowLeft, Phone, Place, RoundPlace } from '@/constants/link/icons'
import { trainers } from '@/data/temp/trainers'
import Image from 'next/image'
import React from 'react'

type Props = {}

function ValidationDate({ }: Props) {
    const trainer = trainers[0]

    return (
        <div className='min-h-screen'>
            <header className='w-full max-w-page mx-auto'>
                <NavBar isWhite />
            </header>

            <main className='py-7 px-24  max-w-page mx-auto'>
                <div className='text-2xl font-bold text-brown flex items-center gap-x-3'>
                    <Button isBackButton content={<ArrowLeft />} className='!bg-transparent w-min !text-brown !text-2xl !p-0' />
                    <span>Reservation</span>
                </div>
                <p className='ml-9  text-brown text-sm mt-2 mb-10'>Informations pour la réservation</p>
                <div className='ml-9 flex justify-between gap-x-10'>
                    <div className='w-3/5'>
                        <ShoppingCart isBottom />
                        <div className='h-10'></div>
                        <PresentationTrainer trainer={trainer} />
                        <div className='w-10/12 my-5'>
                            <Input label='Votre numéro de téléphone' id='phone' leftIcon={<Phone />} placeholder='Tél' />
                        </div>
                        <Button content='RESERVER' className='w-min' />
                    </div>


                    <div className='flex-1 relative'>
                        <div className='relative  h-[400px]'>
                            <Image src="/temp/map.png" alt='map' fill className='object-cover rounded-2xl' />
                        </div>

                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                            <div className='bg-white px-5 py-2 rounded-md ml-8 -mb-5'>
                                <h3 className='font-semibold'>Bouquet en vase</h3>
                                <p className='flex text-brown items-center'><span className='text-2xl'><Place /></span> Antananarivo</p>
                            </div>
                            <span className='text-[#C26143] text-6xl'><RoundPlace /></span>

                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default ValidationDate