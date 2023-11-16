import React from 'react'
import { LogoArtizahoWhiteVertical } from '../logo/artizaho'
import { FacebookFIcon, InstagramIcon, LinkedinIcon } from '@/constants/link/icons'
import { Nuage } from '@/constants/link/svg'

type Props = {}

function Footer({ }: Props) {
    return (
        <footer>
            <Nuage className='w-full -mb-80'/>
            <div className='bg-brown pt-24 pb-7 px-24 flex gap-x-24'>
                <div className='flex flex-col gap-y-6'>
                    <LogoArtizahoWhiteVertical />
                    <p className='text-whiteGray opacity-60'>
                        Nous mettons en valeur les artisans malgaches pour faire revivre<br />
                        la culture et le savoir-faire en proposant une série d'ateliers<br />
                        ouverts au public.
                    </p>
                    <div className='flex gap-x-8 text-white'>
                        <FacebookFIcon />
                        <LinkedinIcon />
                        <InstagramIcon />
                    </div>
                </div>

                <div className='flex gap-x-20'>
                    <section className=''>
                        <h2 className='text-base text-white font-extrabold'>MENU</h2>
                        <ul className='flex flex-col gap-y-4 mt-4 text-whiteGray opacity-60'>
                            <li>Accueil</li>
                            <li>Qui sommes nous</li>
                            <li>Nos ateliers</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className='text-base text-white font-extrabold'>ARTIZAHO</h2>
                        <ul className='flex flex-col gap-y-4 mt-4 text-whiteGray opacity-60'>
                            <li>Artizaho Entreprise</li>
                            <li>Artizaho à la maison</li>
                            <li>Nos partenaires</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className='text-base text-white font-extrabold'>NOUS REJOINDRE</h2>
                        <ul className='flex flex-col gap-y-4 mt-4 text-whiteGray opacity-60'>
                            <li>Rejoindre notre équipe</li>
                            <li>Rejoindre notre collectif</li>
                            <li>Nos partenaires</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    </section>
                </div>
            </div>
        </footer>
    )
}

export default Footer