import Title from "@/components/Title";
import NavBar from "@/components/nav-bar";
import { baobabWhoAre, whoare1, whoare2 } from "@/constants/link/images";
import Image from "next/image";

export default function page() {
  return (
    <>
      <div className="bg-[#FFF] w-[1440px] mx-auto overflow-hidden">
        <header>
          <NavBar isWhite={true} />
        </header>

        <div className="bodyContainer flex items-center gap-10 justify-center">
          <Image src={whoare1} alt="whoare1" />

          <div className="text-brown">
            <Title title="WHO WE ARE" />

            <p className="font-manrope text-sm font-normal mt-4">
              Artizaho is a structure that works to highlight Malagasy craftsmen
              and know-how. It&apos;s <br /> an approach to travel that allows
              you to take your time and connect with the world around you.
              <br /> <br />
              With us, you&apos;ll push open the doors of their workshops,
              discover their world and their passion & you&apos;ll <br /> get
              your hands dirty to make yourself a tangible souvenir of your
              trip. <br />
              <br /> With Artizaho, you&apos;ll be closer to the reality of our
              community and gain a better
              <br /> understanding of our island. A journey rich in meaning, an
              Artizaho experience.
            </p>
          </div>
        </div>

        <div className="relative h-[665.94px]">
          <div className="bodyContainer flex items-center gap-10  justify-center">
            <div className="text-brown">
              <Title title="VISIONS" />

              <p className="font-manrope text-sm font-normal mt-4">
                To become the leader in promoting Malagasy craftsmanship through
                <br /> authentic,
                <br /> sustainable and responsible artisanal experiences.
              </p>
            </div>

            <Image src={whoare2} alt="whoare2" />
          </div>

          <div className=" bg-transparent bottom-[-10%] absolute ">
            <Image src={baobabWhoAre} alt="baobabWhoAre" />
          </div>
        </div>
      </div>
    </>
  );
}
