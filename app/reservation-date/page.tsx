import NavBar from '@/components/nav-bar'
import { ArrowLeft } from '@/constants/link/icons'
import { trainers } from '@/data/temp/trainers'
import React from 'react'
import ChoiceNumberPersonne from './contents/choice-number-personne'
import DateItem from './components/date-item'
import Calendar from './contents/calendar'

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
                <section className='w-3/5'>
                    <h1 className='text-2xl font-bold text-brown flex items-center gap-x-3'><ArrowLeft /> Quand souhaitez vous faire cette activité ?</h1>
                    <p className='ml-14  text-black-default text-sm mt-5'>Choisissez le nombre de personnes qui participent à l'atelier</p>
                    <div className='ml-14 mb-10'><ChoiceNumberPersonne /></div>
                    <div className='ml-14'>
                        <DateItem date='Vendredi 6 nov 2023' slots='16h30 - 17h00' remainingSpace={2} isSelected/>
                        <DateItem date='Vendredi 10 nov 2023' slots='16h30 - 17h00' remainingSpace={3}/>
                        <DateItem date='Vendredi 16 nov 2023' slots='16h30 - 17h00' remainingSpace={1}/>
                    </div>
                </section>

                <section className='flex-1'>
                    <Calendar/>
                </section>
            </main>
        </div>
    )
}

export default PropositionDate