import { MenuIcon } from '@/constants/link/icons'
import { Shopping, User } from '@/constants/link/svg'
import Image from 'next/image'
import LogoArtizahoWhite from './logo'
import Link from 'next/link'
import link from '@/constants/utils/path'


type NavBarProps = {}

function NavBar({ }: NavBarProps) {
  return (
    <nav className='flex justify-between items-center py-7 px-24 w-full max-w-page mx-auto'>
      <Link href={link.home}><LogoArtizahoWhite /></Link>
      <ul className='flex gap-x-8 text-whiteGray opacity-60'>
        <li><Link href={link.home}>ACCUEIL</Link></li>
        <li>QUI SOMMES NOUS</li>
        <li>NOS ATELIERS</li>
      </ul>

      <ul className='flex gap-x-3 text-white text-2xl'>
        <li><Shopping /></li>
        <li><Link href={link.login}><User /></Link></li>
        <li><MenuIcon /></li>
      </ul>
    </nav>
  )
}

export default NavBar