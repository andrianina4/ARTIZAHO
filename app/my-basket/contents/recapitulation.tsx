import Button from "@/components/button";
import Input from "@/components/input";
import { Paypal, Visa } from "@/constants/link/icons";
import { Mvola, OrangeMoney } from "@/constants/link/images";
import { WorkshopBooked } from "@/types/IWorkshop";
import Image from "next/image";
import React from "react";

type Props = {
  bookedWorkShop: WorkshopBooked[];
};

function Recapitulation({ bookedWorkShop }: Props) {
  const sous_total = bookedWorkShop.reduce(
    (prev, curr) =>
      prev + Number(curr.workshop_bookable.workshop.workshop_info.base_price),
    0
  );

  return (
    <div className="flex flex-col gap-y-5">
      <div className="bg-white-40% rounded-3xl py-5 lg:px-8 sm:px-0">
        <div className="flex justify-between pt-5 pb-3 px-2 border-b-2 border-b-[#00000014]">
          <span>Sub-total</span>
          <span className="font-bold">{sous_total}.00€</span>
        </div>

        <div className="flex justify-between pt-5 pb-3 px-2 border-b-2 border-b-[#00000014]">
          <span>Estimated delivery costs</span>
          <span className="font-bold">0.00€</span>
        </div>

        <p className="text-sm font-bold mt-10">Add a promotional code</p>
        <form className="relative mt-2">
          <Input placeholder="Code promotionnel" className="!bg-white" />
          <Button
            content="AJOUTER "
            className="absolute top-[19px] w-min right-1"
          />
        </form>

        <div className="flex justify-between text-2xl mt-10">
          <span>Total</span>
          <span className="font-bold">{sous_total}.00€</span>
        </div>
      </div>

      <div className="bg-white-40% rounded-3xl py-5 px-8">
        <p className="text-sm font-normal">Accepted payement methods :</p>
        <div className="flex items-center justify-between gap-x-5 mt-3">
          <button className="text-5xl">
            <Visa />
          </button>
          <button className="text-5xl">
            <Paypal />
          </button>
          <button>
            <Image src={OrangeMoney} alt="orange-money" width={100} />
          </button>
          <button className="h-12">
            <Mvola />
          </button>
        </div>
      </div>

      <div className="bg-white-40% rounded-3xl py-5 px-8">
        <Button content="Valider l'achat" className="py-5" />
        <Button
          content="Voir d'autres atelier"
          className="!bg-white !text-black-default py-5 mt-2"
        />
      </div>
    </div>
  );
}

export default Recapitulation;
