import NavBar from '@/components/nav-bar'
import { ArrowLeft } from '@/constants/link/icons'
import { trainers } from '@/data/temp/trainers'
import React from 'react'
import ChoiceNumberPersonne from './contents/choice-number-personne'
import DateItem from './components/date-item'
import Calendar from './contents/calendar'
import Button from '@/components/button'

type Props = {}

function PropositionDate({ }: Props) {
    // Temp trainer
    const trainer = trainers[0]


    return (
        <div className='min-h-screen'>
            <header className='w-full max-w-page mx-auto'>
                <NavBar isWhite />
            </header>

            <main className='py-7 px-24  max-w-page mx-auto'>
                <div className='text-2xl font-bold text-brown flex items-center gap-x-3'>
                    <Button isBackButton content={<ArrowLeft />} className='!bg-transparent w-min !text-brown !text-2xl !p-0' />
                    <span>Quand souhaitez vous faire cette activité ?</span>
                </div>
                <p className='ml-14  text-black-default text-sm mt-5'>Choisissez le nombre de personnes qui participent à l&apos;atelier</p>
                <div className='ml-14 mb-10'><ChoiceNumberPersonne /></div>
                <div className='ml-14 flex justify-between gap-x-10'>
                    <div className='w-3/5'>
                        <DateItem date='Vendredi 6 nov 2023' slots='16h30 - 17h00' remainingSpace={2} isSelected />
                        <DateItem date='Vendredi 10 nov 2023' slots='16h30 - 17h00' remainingSpace={3} />
                        <DateItem date='Vendredi 16 nov 2023' slots='16h30 - 17h00' remainingSpace={1} />
                    </div>

                    <div className='flex-1'>
                        <Calendar />

                    </div>
                </div>
            </main>
        </div>
    )
}

export default PropositionDate