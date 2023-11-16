import Footer from '@/components/footer'
import NavBar from '@/components/nav-bar'
import React from 'react'

type LoginProps = {

}

function Login({ }: LoginProps) {
  return (
    <div className='min-h-screen bg-bg-login bg-cover flex flex-col'>
      <header>
        <NavBar />
      </header>

      <main className='flex-1 py-7 px-24'>
        <div className='text-white'>
          <h1 className='font-moonGet font-extrabold text-4xl leading-relaxed'>SE CONNECTER<br />À VOTRE COMPTE</h1>
          <p className='font-normal mt-5'>Veuillez saisir votre adresse électronique et votre mot de passe.</p>
        </div>
        <form className='h-96'>

        </form>
      </main>
      <Footer />
    </div>
  )
}

export default Login