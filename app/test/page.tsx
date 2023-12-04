import { ArrowLeft } from "@/constants/link/icons";
import { whoare } from "@/constants/link/images";
import Image from "next/image";

export default function Test() {
  return (
    <>
      <div className="h-[500px] border flex items-center">
        <div>
          <Image src={whoare} alt="whoare" />
        </div>
        <div>
          <h4 className="font-moonGet font-extrabold text-xl text-brown tracking-[8%] leading-[36.74px]">
            QUI SOMMES NOUS
          </h4>
          <p className="font-normal text-sm text-brown leading-[19.12px] mt-2">
            Nous mettons en valeur les artisans malgaches pour faire revivre la
            culture et le <br /> savoir-faire en proposant une série d'ateliers
            ouverts au public.
          </p>

          <button className="btn text-white bg-bronze border-none hover:bg-bronze mt-2">
            Get to know us
            <ArrowLeft />
          </button>
        </div>
      </div>

      <div className="h-[449px] w-[304px]"></div>
    </>
  );
}
