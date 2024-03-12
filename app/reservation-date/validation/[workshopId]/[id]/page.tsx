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

  return (
    <div className="min-h-screen">
      <header className="w-full max-w-page mx-auto">
        <NavBar isWhite />
      </header>

      <main className="py-7 px-24  max-w-page mx-auto">
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
        <div className="ml-9 flex justify-between gap-x-10">
          <Form />

          <div className="flex-1">
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
