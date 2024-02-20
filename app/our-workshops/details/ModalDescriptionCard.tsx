import PresentationTrainer from "@/components/presentation-trainer";
import HeaderWorkshop from "../components/HeaderWorkshop";
import { trainers } from "@/data/temp/trainers";
import React from "react";
import Test from "./Test";
export default function ModalDescriptionCard() {
  return (
    <div className="flex  gap-10 flex-col">
      <header>
        <h5 className="uppercase font-extrabold text-sm text-reddishBrown">
          floral
        </h5>

        <HeaderWorkshop />
      </header>

      <Test />

      <p className="text-xs text-brown">
        Welcome to Hanta's boutique workshop, where you can learn how to create
        exceptional floral arrangements.
        <br /> During this experience, you'll discover a variety of foliage and
        flowers, and learn how to use them to create beautiful bouquets.
      </p>
      <section>
        <PresentationTrainer trainer={trainers[0]} />
      </section>
    </div>
  );
}
