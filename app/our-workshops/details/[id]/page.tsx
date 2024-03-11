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
import { imgTest, our1, our2, ourWorkShop } from "@/constants/link/images";
import { trainers } from "@/data/temp/trainers";
import Image from "next/image";
import ModalDescriptionCard from "../ModalDescriptionCard";
import HeaderWorkshop from "../../components/HeaderWorkshop";
import Link from "next/link";
import { axiosInstanceApi } from "@/axios";
import { IBackendResponse } from "@/types";
import { IWorkShop } from "@/types/IWorkshop";

export default async function page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;

  const {
    data: { results },
  } = await axiosInstanceApi.get<IBackendResponse<IWorkShop[]>>(
    "/v1/workshop/"
  );

  const currentWorkshop = results.find((item) => item.id === Number(id));

  if (!currentWorkshop) return "Not found";

  const trainer = trainers[0];
  const condition = {
    ageRequired: "15",
    countMembers: "2 to 3 participants",
    duration: "1:30 hours",
  };

  return (
    <div className="min-h-screen relative">
      <header className="w-full max-w-page mx-auto">
        <NavBar isWhite />
      </header>

      <main className="py-7 px-24  max-w-page mx-auto ">
        <header>
          <h4 className="uppercase font-moonGet font-extrabold text-xl text-brown">
            Workshop
          </h4>

          <div className="text-sm breadcrumbs">
            <ul>
              <li className="font-bold font-manrope text-xs text-black-40%">
                <Link href={"/our-workshops"}>Our workshops</Link>
              </li>
              <li className="font-bold font-manrope text-xs text-black-40%">
                <a>{currentWorkshop.category}</a>
              </li>
              <li className="font-bold font-manrope text-xs text-brown">
                {currentWorkshop.title}
              </li>
            </ul>
          </div>
          <HeaderWorkshop workshop={currentWorkshop} />
        </header>

        <section className="mt-2">
          <div className="imgContainer flex gap-2 h-[440px]">
            <div className=" w-1/2">
              <Image
                src={imgTest}
                alt="ourWorkShop"
                className="h-[100%]"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col w-1/2 gap-2 ">
              <div className="h-[216px] w-full">
                <Image
                  src={our2}
                  alt="our2"
                  className="w-[100%] object-cover h-[100%]"
                />
              </div>
              <div className="h-[216px] w-full">
                <Image
                  src={our1}
                  alt="our1"
                  className="w-[100%] object-cover h-[100%]"
                />
              </div>
            </div>
          </div>

          <div className="description mt-4">
            <h5 className="text-reddishBrown font-extrabold text-sm">
              Description
            </h5>

            <p className="font-normal text-xs text-brown mt-2">
              {currentWorkshop.description}
            </p>
          </div>

          <div className="mt-10 flex">
            <div className="w-2/3">
              <PresentationTrainer trainer={trainer} /> [###]
            </div>
            <div className="flex flex-grow-[1] flex-col items-center ">
              <div>
                <h4 className="text-reddishBrown font-extrabold text-sm">
                  Détails
                </h4>

                <ul>
                  <li className="flex items-center font-bold text-[10px] text-brown gap-2">
                    <Alarm className="text-xl" /> Duration {condition.duration}{" "}
                    [###]
                  </li>
                  <li className="flex items-center font-bold text-[10px] text-brown gap-2">
                    <People1 className="text-xl" />
                    {currentWorkshop.workshop_info.max_participants} people
                  </li>
                  <li className="flex items-center font-bold text-[10px] text-brown gap-2">
                    <PeopleCheck className="text-xl" /> {condition.ageRequired}{" "}
                    year(s) min. [###]
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <dialog id="my_modal_3" className="modal left-[56%] modal-top ">
            <div className="modal-box min-h-screen w-[850px] ">
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
              </div>
              {/* if there is a button in form, it will close the modal */}

              {/* <h3 className="font-bold text-lg">Hello!</h3> */}
              <ModalDescriptionCard />
            </div>
          </dialog>

          {/* <div className="mt-10 relative">
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
                    onClick={() => {
                      document?.getElementById("my_modal_3")?.showModal();
                    }}
                  />
                );
              })}
            </div>
          </div> */}
        </section>
      </main>
    </div>
  );
}