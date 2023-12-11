import NavBar from '@/components/nav-bar'
import React from 'react'

type Props = {}

function PropositionDate({ }: Props) {
    return (
        <div className='min-h-screen'>
            <header className='w-full max-w-page mx-auto'>
                <NavBar isWhite />
            </header>
        </div>
    )
}

export default PropositionDate