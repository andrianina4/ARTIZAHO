"use client";
import {
  DefaultUser,
  Down,
  MenuIcon,
  ShoppingBagDuoTone,
  UserDuoTone,
} from "@/constants/link/icons";
import LogoArtizaho from "./logo";
import Link from "next/link";
import link from "@/constants/utils/path";
import SidebardHome from "@/app/components/Sidebard";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import ModalEditUser from "@/app/user/components/modalEditUser";

type NavBarProps = {
  className?: string;
  isWhite?: boolean;
};

function NavBar({ className, isWhite = false }: NavBarProps) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const user = session?.user;

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
          className={`flex gap-x-3  text-2xl items-center ${
            isWhite ? "text-brown" : "text-white"
          }`}
        >
          <Link href={link.myBasket}>
            <li>
              <ShoppingBagDuoTone />
            </li>
          </Link>
          {!user ? (
            <Link href={link.login}>
              <li>
                <UserDuoTone />
              </li>
            </Link>
          ) : (
            <details className="dropdown">
              <summary className="m-1 btn bg-transparent border-none hover:bg-transparent">
                <div className="flex items-center gap-2 cursor-pointer">
                  <DefaultUser />
                  <span className="text-[10px] ">{user.email}</span>
                  <Down />
                </div>
              </summary>
              <ul
                className={`p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 ${
                  isWhite ? "text-brown" : "text-black"
                }`}
              >
                <li
                  onClick={() => {
                    const updateProfile = document.getElementById(
                      "updateProfile"
                    ) as HTMLDialogElement;
                    updateProfile.showModal();
                  }}
                >
                  <a>Update profile</a>
                </li>
                <li
                  onClick={() =>
                    signOut({
                      callbackUrl: "/auth/login",
                    })
                  }
                >
                  <a>Logout</a>
                </li>
              </ul>
            </details>
          )}
          <li
            className="cursor-pointer"
            onClick={() => {
              const sidebarhome = document?.getElementById(
                "sidebarhome"
              ) as HTMLDialogElement;
              sidebarhome.showModal();
            }}
          >
            <MenuIcon />
          </li>
        </ul>

        <dialog id="sidebarhome" className="modal left-[82%] modal-top ">
          <SidebardHome />
        </dialog>

        <ModalEditUser />
      </nav>
    </div>
  );
}

export default NavBar;
