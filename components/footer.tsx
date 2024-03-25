import React from "react";
import { LogoArtizahoWhiteVertical } from "./logo";
import {
  FacebookFIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/constants/link/icons";
import { Nuage } from "@/constants/link/svg";

type Props = {
  large?: boolean;
};

function Footer({ large = false }: Props) {
  return (
    <footer className="relative mt-10 ">
      <Nuage className={`w-full absolute  bottom-[36%] lg:block sm:hidden`} />
      <div className="bg-brown">
        <div className=" sm:pt-10 lg:pt-24 sm:pb-4 lg:pb-7  sm:px-5 lg:px-24 flex gap-x-24 w-full max-w-page mx-auto lg:flex-row sm:flex-col">
          <div className="flex flex-col gap-y-6">
            <LogoArtizahoWhiteVertical />
            <p className="text-whiteGray opacity-60">
              We&apos;re showcasing Malagasy craftsmen and reviving
              <br />
              their culture and know-how through a series of workshops
              <br />
              open to the public.
            </p>
            <div className="flex gap-x-8 text-white">
              <FacebookFIcon />
              <LinkedinIcon />
              <InstagramIcon />
            </div>
          </div>

          <div className=" gap-x-20 mt-5 hidden lg:flex">
            <section className="">
              <h2 className="text-base text-white font-extrabold">MENU</h2>
              <ul className="flex flex-col gap-y-4 mt-4 text-whiteGray opacity-60">
                <li>Home</li>
                <li>Who we are</li>
                <li>Our workshops</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base text-white font-extrabold">ARTIZAHO</h2>
              <ul className="flex flex-col gap-y-4 mt-4 text-whiteGray opacity-60">
                <li>Artizaho Company</li>
                <li>Artizaho at home</li>
                <li>Our partners</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base text-white font-extrabold">JOIN US</h2>
              <ul className="flex flex-col gap-y-4 mt-4 text-whiteGray opacity-60">
                <li>Join our team</li>
                <li>Join our collective</li>
                <li>Our partners</li>
                <li>FAQ</li>
                <li>Contact</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
