import CardComponent from "@/components/CardComponent";
import NavBar from "@/components/nav-bar";
import PresentationTrainer from "@/components/presentation-trainer";
import {
  Alarm,
  People1,
  PeopleCheck,
  Place,
  Shop,
} from "@/constants/link/icons";
import { our1, our2, ourWorkShop } from "@/constants/link/images";
import { trainers } from "@/data/temp/trainers";
import Image from "next/image";
import ModalDescriptionCard from "./ModalDescriptionCard";
import HeaderWorkshop from "../components/HeaderWorkshop";
import SidebardHome from "@/app/components/Sidebard";

export default function page() {
  const trainer = trainers[0];
  const condition = {
    ageRequired: "15",
    countMembers: "2 to 3 participants",
    duration: "1:30 hours",
  };
  const split = [1, 2, 3, 4];

  return <ModalDescriptionCard />;

  // return <SidebardHome />;

  return (
    <div className="min-h-screen">
      <header className="w-full max-w-page mx-auto">
        <NavBar isWhite />
      </header>

      <main className="py-7 px-24  max-w-page mx-auto">
        <header>
          <h4 className="uppercase font-moonGet font-extrabold text-xl text-brown">
            Workshop
          </h4>

          <div className="text-sm breadcrumbs">
            <ul>
              <li className="font-bold font-manrope text-xs text-black-40%">
                <a>Our workshops</a>
              </li>
              <li className="font-bold font-manrope text-xs text-black-40%">
                <a>Floral</a>
              </li>
              <li className="font-bold font-manrope text-xs text-brown">
                Vase bouquet
              </li>
            </ul>
          </div>
          <HeaderWorkshop />
          {/* <div className="flex items-center mt-4">
            <div className="w-1/2">
              <h4 className="font-manrope text-2xl">Vase bouquet</h4>

              <div className="flex gap-4">
                <div className="flex text-brown text-[10px] items-center font-bold gap-2">
                  <Alarm /> Duration 1:30
                </div>
                <div>
                  <div className="flex text-brown text-[10px] items-center font-bold gap-2">
                    <Place />
                    Antananarivo
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex gap-5 justify-end items-center">
                <div>
                  <h4 className="text-reddishBrown text-[32px] font-[900]">
                    35.00€
                  </h4>

                  <p className="text-brown text-xs font-normal">
                    including <span className="font-bold">18.00€</span> for
                    Mahefa
                  </p>
                </div>
                <div>
                  <button className="btn bg-reddishBrown outline-none border-none hover:bg-reddishBrown font-extrabold text-whiteGray text-sm">
                    <Shop className="text-xl" />
                    Book the workshop
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </header>

        <section className="mt-2">
          <div className="imgContainer flex gap-2">
            <div className=" w-1/2">
              <Image
                src={ourWorkShop}
                alt="ourWorkShop"
                // className="h-[440px]"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col w-1/2 gap-2 items-end">
              <div className=" h-[216px]">
                <Image src={our2} alt="our2" objectFit="cover" />
              </div>
              <div className=" h-[216px]">
                <Image src={our1} alt="our1" objectFit="cover" />
              </div>
            </div>
          </div>

          <div className="description mt-4">
            <h5 className="text-reddishBrown font-extrabold text-sm">
              Description
            </h5>

            <p className="font-normal text-xs text-brown mt-2">
              Welcome to Hanta's boutique workshop, where you can learn how to
              create exceptional floral arrangements. During this experience,
              you will discover a variety of foliage and flowers, and learn how
              to use them to create beautiful bouquets. <br /> <br />
              Hanta, an experienced florist, will guide you through the process.
              She will help you choose the right plants, prepare them and
              assemble them. You'll also learn how to use a variety of tools and
              techniques.
            </p>
          </div>

          <div className="mt-10 flex">
            <div className="w-2/3">
              <PresentationTrainer trainer={trainer} />
            </div>
            <div className="flex flex-grow-[1] flex-col items-center ">
              <div>
                <h4 className="text-reddishBrown font-extrabold text-sm">
                  Détails
                </h4>

                <ul>
                  <li className="flex items-center font-bold text-[10px] text-brown gap-2">
                    <Alarm className="text-xl" /> Duration {condition.duration}
                  </li>
                  <li className="flex items-center font-bold text-[10px] text-brown gap-2">
                    <People1 className="text-xl" />
                    {condition.countMembers}
                  </li>
                  <li className="flex items-center font-bold text-[10px] text-brown gap-2">
                    <PeopleCheck className="text-xl" /> {condition.ageRequired}{" "}
                    year(s) min.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex">
              {split.map((data, indexData) => {
                return (
                  <CardComponent
                    key={data}
                    title="Leather"
                    description="Lain, a passionate leatherworker, introduces you to the art of leatherwork by creating your own bracelet."
                    label="Leather: Bracelet"
                    place="Antananarivo"
                    price={15.0}
                    time="1:30"
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
