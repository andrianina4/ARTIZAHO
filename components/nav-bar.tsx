import { MenuIcon } from '@/constants/link/icons'
import { Shopping, User } from '@/constants/link/svg'
import Image from 'next/image'
import LogoArtizahoWhite from './logo'


type NavBarProps = {}

function NavBar({}: NavBarProps) {
  return (
    <nav className='flex justify-between items-center py-7 px-24'>
        <LogoArtizahoWhite/>
        <ul className='flex gap-x-8 text-whiteGray opacity-60'>
            <li>ACCEUIL</li>
            <li>QUI SOMMES NOUS</li>
            <li>NOS ATELIERS</li>
        </ul>

        <ul className='flex gap-x-3 text-white text-2xl'>
            <li><Shopping/></li>
            <li><User/></li>
            <li><MenuIcon/></li>
        </ul>
    </nav>
  )
}

export default NavBar