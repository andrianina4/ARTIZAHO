import NavBar from '@/components/nav-bar'
import React from 'react'

type AuthLayoutProps = {
    children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <>
            <header>
                <NavBar />
            </header>

            <main>
                {children}
            </main>
        </>
    )
}