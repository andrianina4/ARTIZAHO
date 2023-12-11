import { MenuIcon, ShoppingBagDuoTone, UserDuoTone } from "@/constants/link/icons";
import Image from "next/image";
import LogoArtizaho from "./logo";
import Link from "next/link";
import link from "@/constants/utils/path";

type NavBarProps = {
  className?: string;
  isWhite? : boolean
};

function NavBar({ className, isWhite = false }: NavBarProps) {
  return (
    <nav
      className={`flex justify-between items-center py-7 px-24 w-full max-w-page mx-auto ${className}`}
    >
      <Link href={link.home}>
        <LogoArtizaho isColor={isWhite}/>
      </Link>
      <ul className={`flex gap-x-8  opacity-60  ${isWhite ? 'text-brown' : 'text-whiteGray'}`}>
        <li>
          <Link href={link.home}>ACCEUIL</Link>
        </li>
        <li>
          <Link href={link.whoare}>QUI SOMMES NOUS</Link>
        </li>
        <li>NOS ATELIERS</li>
      </ul>

      <ul className={`flex gap-x-3  text-2xl ${isWhite ? 'text-brown' : 'text-white'}`}>
        <li>
          <ShoppingBagDuoTone />
        </li>
        <li>
          <Link href={link.login}>
            <UserDuoTone />
          </Link>
        </li>
        <li>
          <MenuIcon />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
