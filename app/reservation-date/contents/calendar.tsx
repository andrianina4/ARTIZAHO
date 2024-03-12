"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import React from "react";
import Button from "@/components/button";
import { DateRange } from "@/constants/link/icons";
import { useRouter } from "next/navigation";
import link from "@/constants/utils/path";
import { IScheduleWorkshop } from "@/types/IWorkshop";
import { format } from "date-fns";

type Props = {
  workshopSchedule: IScheduleWorkshop[];
  id: string;
};

function Calendar({ workshopSchedule, id }: Props) {
  const router = useRouter();

  function redirectPropositionDate() {
    router.push(`${link.propositionDate}/${id}`);
  }

  return (
    <div className="">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={workshopSchedule.map((item) => ({
          title: item.workshop.title,
          date: format(new Date(item.start_date), "yyyy-MM-dd"),
        }))}
      />
      <div className="flex gap-x-8 mt-3 text-black-default ">
        <div className="flex gap-x-2 items-center">
          <div className="w-3 h-3 bg-reddishBrown rounded-lg"></div>{" "}
          <span>Available</span>
        </div>
        <div className="flex gap-x-2 items-center">
          <div className="w-3 h-3 bg-brown rounded-lg"></div>{" "}
          <span>Complete</span>
        </div>
      </div>
      <div className="w-52 mt-5">
        <Button
          onClick={redirectPropositionDate}
          leftIcon={<DateRange />}
          content="PROPOSE A DATE"
        />
      </div>
    </div>
  );
}

export default Calendar;
