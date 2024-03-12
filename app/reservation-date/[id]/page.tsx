"use client";
import NavBar from "@/components/nav-bar";
import { ArrowLeft } from "@/constants/link/icons";
import { trainers } from "@/data/temp/trainers";
import React, { useEffect, useState } from "react";
import ChoiceNumberPersonne from "../contents/choice-number-personne";
import DateItem from "../components/date-item";
import Calendar from "../contents/calendar";
import Button from "@/components/button";
import { getWorkShopSchedule } from "@/services/workshop.service";
import { useQuery } from "@tanstack/react-query";
import LoadingComponent from "@/app/_global/loading";
import ErrorComponent from "@/app/_global/error";
import { format } from "date-fns";

type Props = {};

function PropositionDate({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const [count, setCount] = useState(0);

  const countChange = (type: "-" | "+") => {
    setCount((state) => {
      if (type === "-") {
        let c = state - 1;
        return c < 0 ? 0 : c;
      }
      return state + 1;
    });
  };

  const { id } = params;

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getWorkShopSchedule(Number(id)),
    queryKey: ["workshopSchedule"],
    retryOnMount: false,
  });

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  const datas =
    count === 0
      ? data
      : data?.filter((item) => item.available_places === count);

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
          <span>When would you like to do this activity ?</span>
        </div>
        <p className="ml-14  text-black-default text-sm mt-5">
          Choose the number of people taking part in the workshop
        </p>
        <div className="ml-14 mb-10">
          <ChoiceNumberPersonne countChange={countChange} count={count} />
        </div>
        <div className="ml-14 flex justify-between gap-x-10">
          <div className="w-3/5">
            {datas?.map((item, index) => {
              return (
                <DateItem
                  date={format(new Date(item.start_date), "EEEE, MMM d, yyyy")}
                  slots="16h30 - 17h00 [###]"
                  remainingSpace={item.available_places}
                  isSelected
                  workshopSchedule={item}
                  key={index}
                />
              );
            })}
          </div>

          <div className="flex-1">
            <Calendar workshopSchedule={datas || []} id={id} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default PropositionDate;
