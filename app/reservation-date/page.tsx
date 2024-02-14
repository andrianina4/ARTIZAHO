import NavBar from '@/components/nav-bar'
import { ArrowLeft } from '@/constants/link/icons'
import { trainers } from '@/data/temp/trainers'
import React from 'react'
import ChoiceNumberPersonne from './contents/choice-number-personne'
import DateItem from './components/date-item'
import Calendar from './contents/calendar'
import Button from '@/components/button'

type Props = {}

function PropositionDate({}: Props) {
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
                    <span>When would you like to do this activity ?</span>
                </div>
                <p className='ml-14  text-black-default text-sm mt-5'>Choose the number of people taking part in the workshop</p>
                <div className='ml-14 mb-10'><ChoiceNumberPersonne /></div>
                <div className='ml-14 flex justify-between gap-x-10'>
                    <div className='w-3/5'>
                        <DateItem date='FRIDAY, NOV 6, 2023' slots='16h30 - 17h00' remainingSpace={2} isSelected />
                        <DateItem date='FRIDAY, NOV 10, 2023' slots='16h30 - 17h00' remainingSpace={3} />
                        <DateItem date='FRIDAY, NOV 16, 2023' slots='16h30 - 17h00' remainingSpace={1} />
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