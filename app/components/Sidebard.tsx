import { artizahoLogoWhiteVertical } from "@/constants/link/images";
import link from "@/constants/utils/path";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type PropsMenu = {
  labelMenu: string;
  sousMenu: {
    path: string;
    label: string;
  }[];
};
const Menu = ({ labelMenu, sousMenu }: PropsMenu) => {
  return (
    <div>
      <div className="mb-4">
        <h4 className="font-manrope font-extrabold text-base text-[#FFFFFF]">
          {labelMenu}
        </h4>
        <div className="w-[26px] border border-bronze"></div>
      </div>
      <ul>
        {sousMenu.map((item) => (
          <li key={item.label}>
            <Link
              href={item.path}
              className="font-manrope font-medium text-sm text-[#FFFFFF]"
            >
              {item.label}
            </Link>
            {/* <a
              className="font-manrope font-medium text-sm text-[#FFFFFF]"
              href=""
            >
              {item.label}
            </a> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function SidebardHome({}: // setShowSidebar,
{
  // setShowSidebar?: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="sm:w-full md:w-[368px]  h-screen bg-brown p-8">
      <div className="flex">
        <div>
          <Image
            src={artizahoLogoWhiteVertical}
            alt="artizaho-"
            width={127}
            height={127}
          />
        </div>

        <div className="flex flex-grow-[1] justify-end  ">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost  text-bronze "
              // onClick={() => setShowSidebar(false)}
            >
              X
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col gap-20">
        <Menu
          labelMenu="MENU"
          sousMenu={[
            { label: "Home", path: link.home },
            { label: "About us", path: link.whoare },
            { label: "Our workshops", path: link.ourWorkshops },
            { label: "Admin", path: link.admin },
          ]}
        />

        <Menu
          labelMenu="ARTIZAHO"
          sousMenu={[
            { label: "Artizaho Company", path: "" },
            { label: "Artizaho at home", path: "" },
            { label: "Our partners", path: "" },
          ]}
        />

        <Menu
          labelMenu="JOIN US"
          sousMenu={[
            { label: "Join our team", path: "" },
            { label: "Join our Collective", path: "" },
            { label: "Our partners", path: "" },
            { label: "FAQ", path: "" },
            { label: "Contact", path: "" },
          ]}
        />
      </div>
    </div>
  );
}
