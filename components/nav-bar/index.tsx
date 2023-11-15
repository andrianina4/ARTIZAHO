import { MenuIcon } from '@/constants/link/icons'
import { Shopping, User, artizahoLogo } from '@/constants/link/svg'
import Image from 'next/image'


type NavBarProps = {}

function NavBar({}: NavBarProps) {
  return (
    <nav>
        <Image src={artizahoLogo} alt='artizaho'/>
        <ul>
            <li>ACCEUIL</li>
            <li>QUI SOMMES NOUS</li>
            <li>NOS ATELIERS</li>
        </ul>

        <ul>
            <li><Shopping/></li>
            <li><User/></li>
            <li><MenuIcon/></li>
        </ul>
    </nav>
  )
}

export default NavBar