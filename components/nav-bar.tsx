"use client";
import {
  MenuIcon,
  ShoppingBagDuoTone,
  UserDuoTone,
} from "@/constants/link/icons";
import Image from "next/image";
import LogoArtizaho from "./logo";
import Link from "next/link";
import link from "@/constants/utils/path";
import SidebardHome from "@/app/components/Sidebard";
import { useState } from "react";
import { usePathname } from "next/navigation";

type NavBarProps = {
  className?: string;
  isWhite?: boolean;
};

function NavBar({ className, isWhite = false }: NavBarProps) {
  // const [showSidebar, setShowSidebar] = useState(false);
  const pathname = usePathname();

  const isActiveRoute = (includesPath: string) => {
    return pathname === includesPath ? (
      <div className="w-[25px] bg-reddishBrown h-1"></div>
    ) : null;
  };
  return (
    <div className="relative">
      <nav
        className={`flex justify-between items-center py-7 px-24 w-full max-w-page mx-auto ${className}`}
      >
        <Link href={link.home}>
          <LogoArtizaho isColor={isWhite} />
        </Link>
        <ul
          className={`flex gap-x-8  opacity-60  ${
            isWhite ? "text-brown" : "text-whiteGray"
          }`}
        >
          <Link href={link.home}>
            <li>HOME</li>
            {isActiveRoute("/")}
          </Link>
          <Link href={link.whoare}>
            <li>WHO WE ARE</li>
            {isActiveRoute("/whoare")}
          </Link>
          <Link href={link.ourWorkshops}>
            <li>OUR WORKSHOPS</li>
            {isActiveRoute("/our-workshops")}
          </Link>
        </ul>

        <ul
          className={`flex gap-x-3  text-2xl ${
            isWhite ? "text-brown" : "text-white"
          }`}
        >
          <Link href={link.myBasket}>
            <li>
              <ShoppingBagDuoTone />
            </li>
          </Link>
          <Link href={link.login}>
            <li>
              <UserDuoTone />
            </li>
          </Link>
          <li
            className="cursor-pointer"
            onClick={() => {
              // setShowSidebar(true)
              document?.getElementById("sidebarhome")?.showModal();
            }}
          >
            <MenuIcon />
          </li>
        </ul>

        <dialog id="sidebarhome" className="modal left-[82%] modal-top ">
          {/* <div className="modal-action">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
              </div> */}
          <SidebardHome
          // setShowSidebar={setShowSidebar}
          />
        </dialog>

        {/* <div
          className={`absolute top-0 right-0 none z-50  ${
            showSidebar ? "block" : "hidden"
          }`}
        >
          <SidebardHome setShowSidebar={setShowSidebar} />
        </div> */}
      </nav>
    </div>
  );
}

export default NavBar;
