import Button from "@/components/button";
import NavBar from "@/components/nav-bar";
import PresentationTrainer from "@/components/presentation-trainer";
import { ArrowLeft } from "@/constants/link/icons";
import { trainers } from "@/data/temp/trainers";
import React from "react";
import Form from "./Form";
import { axiosInstanceApi } from "@/axios";
import { IBackendResponse } from "@/types";
import { IScheduleWorkshop } from "@/types/IWorkshop";
import { getSession } from "next-auth/react";
import ShoppingCart from "@/components/shopping-cart-item";

type Props = {};

async function ValidationDate({
  params,
}: {
  params: {
    workshopId: string;
    id: string;
  };
}) {
  const trainer = trainers[0];

  const { id, workshopId } = params;

  const {
    data: { results },
  } = await axiosInstanceApi.get<IBackendResponse<IScheduleWorkshop[]>>(
    `/v1/workshop/${workshopId}/schedule`
  );

  const currentWorkshopSchedule = results.find(
    (item) => item.id === Number(id)
  );

  if (!currentWorkshopSchedule) return "Not found";

  console.log("currentWorkshopSchedule", currentWorkshopSchedule);

  return (
    <div className="min-h-screen">
      <header className="w-full max-w-page mx-auto">
        <NavBar isWhite />
      </header>

      <main className="py-7 lg:px-24 sm:px-5  max-w-page mx-auto">
        <div className="text-2xl font-bold text-brown flex items-center gap-x-3">
          <Button
            isBackButton
            content={<ArrowLeft />}
            className="!bg-transparent w-min !text-brown !text-2xl !p-0"
          />
          <span>Reservation</span>
        </div>
        <p className="ml-9  text-brown text-sm mt-2 mb-10">
          Booking information
        </p>

        <div className="flex gap-6 lg:flex-row sm:flex-col">
          <div className="lg:w-1/2">
            <ShoppingCart
              isBottom
              scheduleWorkshop={currentWorkshopSchedule}
              disabledDelete
            />

            <Form currentWorkshopSchedule={currentWorkshopSchedule} />
          </div>
          <div className="lg:w-1/2">
            <PresentationTrainer
              trainer={trainer}
              artisan={currentWorkshopSchedule.artisan}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default ValidationDate;
