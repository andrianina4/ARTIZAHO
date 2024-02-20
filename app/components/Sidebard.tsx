import { artizahoLogoWhiteVertical } from "@/constants/link/images";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type PropsMenu = {
  labelMenu: string;
  sousMenu: string[];
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
          <li key={item}>
            <a
              className="font-manrope font-medium text-sm text-[#FFFFFF]"
              href=""
            >
              {" "}
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function SidebardHome({
  setShowSidebar,
}: {
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="w-[368px] h-[1028px] bg-brown p-8">
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
          <button
            className="btn btn-sm btn-circle btn-ghost  text-bronze "
            onClick={() => setShowSidebar(false)}
          >
            X
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-20">
        <Menu
          labelMenu="MENU"
          sousMenu={["Accueil", "Qui sommes nous", "Nos ateliers"]}
        />

        <Menu
          labelMenu="ARTIZAHO"
          sousMenu={[
            "Artizaho Entreprise",
            "Artizaho à la maison",
            "Nos partenaires",
          ]}
        />

        <Menu
          labelMenu="NOUS REJOINDRE"
          sousMenu={[
            "Rejoindre notre équipe",
            "Rejoindre notre Collectif",
            "Nos partenaires",
            "FAQ",
            "Contact",
          ]}
        />
      </div>
    </div>
  );
}
