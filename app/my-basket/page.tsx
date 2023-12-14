import Button from '@/components/button'
import NavBar from '@/components/nav-bar'
import ShoppingCart from '@/components/shopping-cart-item'
import { Add, ArrowLeft } from '@/constants/link/icons'
import React from 'react'
import Recapitulation from './contents/recapitulation'

type Props = {}

function Shopping({}: Props) {
  return (
    <div className='min-h-screen'>
            <header className='w-full max-w-page mx-auto'>
                <NavBar isWhite />
            </header>

            <main className='py-7 px-24  max-w-page mx-auto'>
                <div className='text-2xl font-bold text-brown flex items-center gap-x-3'>
                    <Button isBackButton content={<ArrowLeft />} className='!bg-transparent w-min !text-brown !text-2xl !p-0' />
                    <span>Panier d&apos;achat</span>
                </div>
                
                <div className='ml-9 flex justify-between gap-x-20 mt-5'>
                    <div className='w-3/5'>
                        <ShoppingCart/>
                        <ShoppingCart/>
                        <Button leftIcon={<Add/>} content="Ajouter plus d'atelier" className='!bg-transparent !text-black-default'/>
                    </div>

                    <div className='flex-1'>
                        <Recapitulation/>
                    </div>
                </div>
            </main>
        </div>
  )
}

export default Shopping