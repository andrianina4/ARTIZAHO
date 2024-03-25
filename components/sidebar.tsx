"use client";

import Link from "next/link";
import React from "react";
import {
  CalendarIcon,
  Dashboard,
  EllipseBrown,
  Enterprise,
  EventCheck,
  Logout,
  PeopleToolbox,
  Setting,
  Tools,
  Users,
} from "@/constants/link/icons";
import { usePathname } from "next/navigation";
import ImageCustom from "./imageCustom";
import { artizahoLogoWhiteVertical } from "@/constants/link/images";
import { signOut } from "next-auth/react";

const links = [
  { name: "Dashboard", href: "/admin", icon: Dashboard },
  { name: "Attendance", href: "/admin/attendance", icon: EventCheck },
  { name: "Catalogue", href: "/admin/catalogue", icon: CalendarIcon },
  { name: "Workshop", href: "/admin/workshop", icon: Tools },
  { name: "Craftmen", href: "/admin/craftmen", icon: PeopleToolbox },
  { name: "Clients", href: "/admin/client", icon: Users },
  { name: "Company", href: "/admin/company", icon: Enterprise },
  { name: "Settings", href: "/admin/settings", icon: Setting },
];

function Sidebar() {
  const pathname = usePathname();
  return (
    <div className=" flex flex-col min-w-[235px] justify-around w-full h-full rounded-3xl bg-gradient-to-t from-brown to-brown-60%">
      <div>
        <div className="flex flex-col justify-between items-center gap-2 mb-6">
          <div className="relative">
            <div className=" relative flex justify-center items-center w-24 h-24 rounded-full bg-brown ">
              <ImageCustom
                img={artizahoLogoWhiteVertical}
                className="w-4/5 h-4/5"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
              <EllipseBrown />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <span className="text-white text-center font-bold">
              Artizaho Admin
            </span>
            <span className="text-white text-sm">artizaho@gmail.com</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {links.map((link) => {
            const LinkIcon = link.icon;
            let active = "noactive";
            if (pathname === "/admin" && link.href === "/admin")
              active = "active";
            else if (link.href != "/admin" && pathname.startsWith(link.href))
              active = "active";
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`pl-5 text-sm gap-5 font-semibold ${active}`}
              >
                <LinkIcon className="w-5 h-5" /> {link.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className=" flex justify-center">
        <button
          className=" flex flex-row justify-center items-center font-semibold  bg-white px-4 py-3.5 w-3/4 rounded-2xl gap-x-2 text-brown  "
          onClick={() => {
            signOut({
              callbackUrl: "/auth/login",
            });
          }}
        >
          <Logout />
          <span> Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
