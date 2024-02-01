import { ArrowLeft } from "@/constants/link/icons";
import { whoare } from "@/constants/link/images";
import Image from "next/image";

export default function QuiNousSommes() {
  return (
    <div className="h-[500px] flex items-center gap-40 ">
      <div>
        <Image
          src={whoare}
          alt="whoare"
          width={517}
          height={364}
        />
      </div>
      <div>
        <h4 className="font-moonGet font-extrabold text-xl text-brown tracking-[8%] leading-[36.74px]">
          WHO WE ARE
        </h4>
        <p className="font-normal text-sm text-brown leading-[19.12px] mt-2">
          We&apos;re showcasing Malagasy craftsmen and reviving their culture
          and <br /> know-how through a series of workshops open to the public.
        </p>

        <button className="btn text-white bg-bronze border-none hover:bg-bronze mt-2">
          Get to know us
          <ArrowLeft />
        </button>
      </div>
    </div>
  );
}
