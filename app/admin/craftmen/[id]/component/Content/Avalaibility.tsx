import { Modal } from '@/app/reservation-date/contents/modal'
import React from 'react'
import ModalItem from '../../../component/modalItem'
import { CalendarIcon, Time } from '@/constants/link/icons'
import { text } from 'stream/consumers'

function Avalaibility() {
  return (
    <div className='flex flex-col w-3/4 gap-2'>
        <div className='flex w-full gap-4'>
            <span className='text-brown-80% font-bold w-1/2'> Avalaibility date</span>
            <span className='text-brown-80% font-bold w-1/2'> Hour</span>
        </div>
        <div className='flex w-full gap-2'>
            <ModalItem leftIcon={<CalendarIcon/>} text='06/04/24' className="w-1/2"/>
            <div className='flex w-1/2 gap-2'>
                <ModalItem leftIcon={<Time/>} text='14:00-15:00' className="w-full"/>
            </div>
        </div>
        <div className='flex w-full gap-2'>
            <ModalItem leftIcon={<CalendarIcon/>} text='06/04/24' className="w-1/2"/>
            <div className='flex w-1/2 gap-2'>
                <ModalItem leftIcon={<Time/>} text='14:00-15:00' className="w-full"/>
                <ModalItem leftIcon={<Time/>} text='14:00-15:00' className="w-full"/>
            </div>
        </div>
    </div>
  )
}

export default Avalaibility