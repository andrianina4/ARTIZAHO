'use client'

import Button from '@/components/button'
import Checkbox from '@/components/checkbox'
import Footer from '@/components/footer'
import Input from '@/components/input'
import NavBar from '@/components/nav-bar'
import Select from '@/components/select'
import { TrajetRegister } from '@/constants/link/svg'
import link from '@/constants/utils/path'
import { ISelect } from '@/types/IField'
import { useRouter } from 'next/navigation'
import React from 'react'

const choiceTypeOfMember: Array<ISelect> = [
  { label: 'Entreprise', value: 'Enterprise' },
  { label: 'Particulier', value: 'Particular' }]

function Register() {
  const router = useRouter()

  function redirectLogin() {
    router.push(link.login)
  }

  function redirectTerms() {
    router.push('')
  }

  return (
    <div className='min-h-screen bg-bg-register bg-cover flex flex-col'>
      <header>
        <NavBar />
      </header>

      <main className='flex-1 py-7 px-24 flex justify-between gap-x-5 w-full max-w-page mx-auto'>
        <div className='text-white mt-20'>
          <h1 className='font-moonGet font-extrabold text-4xl leading-relaxed'>CRÉER VOTRE COMPTE<br />ET NOUS REJOINDRE</h1>
          <p className='font-normal mt-5'>Veuillez saisir votre adresse électronique et votre mot de passe.</p>
        </div>

        <div className='flex-1 bg-white rounded-3xl pt-12 pb-24 px-11 relative'>
          <div className='flex justify-between items-center'>
            <h4 className='text-brown text-base font-extrabold mb-6'>Rejoignez-nous</h4>
            <div className='flex gap-x-2'>
              <span className='text-black-60%'>Déjà membres?</span>
              <button onClick={redirectLogin} className='text-sm font-extrabold text-bronze hover:text-opacity-70' type='button'>Se connecter</button>
            </div>
          </div>

          <form className='grid grid-cols-2 gap-x-5'>
            <div>
              <Select values={choiceTypeOfMember} />
              <Input placeholder='Nom' />
              <Input type='email' placeholder='Adresse email' />
              <Input placeholder='Numéro de téléphone' />
              <Input type='password' placeholder='Mot de passe' />
              <div className='mt-24'></div>
              <Checkbox
                content={
                  <>
                    <div className='flex gap-x-2'>
                      <span className='text-black-60%'>I accept</span>
                      <button onClick={redirectTerms} className='text-sm font-extrabold text-bronze hover:text-opacity-70' type='button'>Terms and Conditions</button>
                    </div>
                  </>
                }
              />
              <Button content='Créer votre compte' />
            </div>

            <div className='mt-16'>
              <Input placeholder='Nif Stat' />
              <Input placeholder='Localisation' />
              <Input placeholder='Numéro de compte' />
            </div>
          </form>
          <TrajetRegister className='absolute right-0 bottom-0' />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Register