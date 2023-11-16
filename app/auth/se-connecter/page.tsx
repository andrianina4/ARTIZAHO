import Footer from '@/components/footer'
import NavBar from '@/components/nav-bar'
import { bgLogin } from '@/constants/link/images'
import Image from 'next/image'
import React from 'react'

type LoginProps = {

}

function Login({ }: LoginProps) {
  return (
    <div className='min-h-screen bg-bg-login bg-cover flex flex-col'>
      <header>
        <NavBar />
      </header>

      <main className='flex-1'>

      </main>

      <Footer />
    </div>
  )
}

export default Login