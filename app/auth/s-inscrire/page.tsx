import Footer from '@/components/footer'
import NavBar from '@/components/nav-bar'
import React from 'react'

type LoginProps = {

}

function Register({ }: LoginProps) {
  return (
    <div className='min-h-screen bg-bg-register bg-cover flex flex-col'>
      <header>
        <NavBar />
      </header>

      <main className='flex-1'>
        
      </main>
      <Footer />
    </div>
  )
}

export default Register