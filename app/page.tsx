import Image from "next/image";
import artizahoLogo from "../public/images/artizahoLogo.png";
import bg1 from "../public/images/bg1.png";
import bg2 from "../public/images/bg2.png";
import bg3 from "../public/images/bg3.png";
import bg4 from "../public/images/bg4.png";
import Nuage from "../public/svg/nuage.svg";

export default function Home() {
  return (
    <div className="container mx-auto">
      <header className="relative">
        <Image src={bg4} alt="bg1" className="w-full" />

        <div className="flex flex-col absolute top-0 w-full h-[90%]">
          <div className="h-[51px]"></div>
          <div className="h-full flex items-center justify-center">
            <div className="title">
              <div className="flex justify-center text-center flex-col">
                <h4 className="font-moonGet uppercase font-extrabold text-[#F6F6F6]   text-[32px] w-[714px] tracking-[6%]">
                  Découvrez le savoir-faire <br /> de nos artisans passionnés !
                </h4>

                <p className="font-manrope text-[#F6F6F6] text-sm w-[714px]">
                  Des professionnels talentueux vous accueillent dans leurs
                  ateliers uniques pour vous transmettre leur art et <br />
                  savoir-faire artisanal. Repartez avec votre création réalisée
                  à la main !
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-[58%] bg-red-500">
          <Nuage className='w-full'/>
        </div>
      </header>
    </div>
  );
}
