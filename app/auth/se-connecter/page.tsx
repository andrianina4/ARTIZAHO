import Button from '@/components/button';
import Footer from '@/components/footer'
import Input from '@/components/input'
import NavBar from '@/components/nav-bar'
import { TrajetLogin } from '@/constants/link/svg';
import React from 'react'

type LoginProps = {};

function Login({ }: LoginProps) {

  return (
    <div className="min-h-screen bg-bg-login bg-cover flex flex-col">
      <header>
        <NavBar />
      </header>

      <main className='flex-1 py-7 px-24 flex justify-between'>
        <div className='text-white mt-20'>
          <h1 className='font-moonGet font-extrabold text-4xl leading-relaxed'>SE CONNECTER<br />À VOTRE COMPTE</h1>
          <p className='font-normal mt-5'>Veuillez saisir votre adresse électronique et votre mot de passe.</p>
        </div>
        <form className='w-1/3 bg-white rounded-3xl pt-12 pb-24 px-11 relative'>
          <h4 className='text-brown text-base font-extrabold mb-6'>Connectez-vous</h4>
          <Input placeholder='Adresse email' />
          <Input type='password' placeholder='Mot de passe' />
          <button className='text-black-60% text-sm block w-full text-right'>Mots de passes oublié?</button>

          <div className='mt-24'></div>
          <Button content='Se connecter' />
          <div className='flex gap-x-2 my-6'>
            <span className='text-black-60%'>Vous n'avez pas de compte?</span>
            <button className='text-sm font-extrabold text-bronze'>S'inscrire</button>
          </div>
          <TrajetLogin className='absolute left-0 bottom-0'/>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
