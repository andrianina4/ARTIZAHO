import { Delete, Place, Time } from "@/constants/link/icons";
import { IScheduleWorkshop } from "@/types/IWorkshop";
import { addSeconds, format, formatDistance } from "date-fns";
import fr from "date-fns/locale/fr";
import Image from "next/image";
import React from "react";

type ShoppingCartProps = {
  isBottom?: boolean;
  scheduleWorkshop: IScheduleWorkshop;
};

function ShoppingCart({ isBottom, scheduleWorkshop }: ShoppingCartProps) {
  const { workshop } = scheduleWorkshop;
  const { workshop_info } = workshop;

  const datetimeStart = new Date(
    `${scheduleWorkshop.start_date} ${scheduleWorkshop.time}`
  );

  const datetimeEnd = addSeconds(datetimeStart, scheduleWorkshop.duration);

  return (
    <article
      className={`flex gap-x-3 mb-10 ${isBottom ? "relative mb-12" : ""}`}
    >
      <div className="relative w-[130px] h-[110px] object-cover">
        <Image
          src={"/temp/vase.png"}
          alt={`shopping-1`}
          fill
          className="rounded-3xl"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between">
            <p className="text-black-default font-bold">{workshop.title}</p>
            <p className="flex items-center gap-x-5 text-brown font-bold">
              <span>{workshop_info.base_price} €</span>
              <span className="text-xl">
                <Delete />
              </span>
            </p>
          </div>
          <div className="flex gap-x-5 text-brown font-bold">
            <p className="flex items-center gap-x-2">
              <span className="text-xl">
                <Time />
              </span>{" "}
              Duration{" "}
              {formatDistance(datetimeStart, datetimeEnd, {
                includeSeconds: false,
              })}
              {/* 1:30 */}
            </p>
            <p className="flex items-center gap-x-2">
              <span className="text-xl">
                <Place />
              </span>{" "}
              {scheduleWorkshop.location}
            </p>
          </div>
        </div>

        <div
          className={`flex justify-between ${
            isBottom ? "absolute -bottom-12 left-0" : ""
          }`}
        >
          <p className="bg-reddishBrown text-white font-semibold py-2 px-4 rounded-lg mr-2 flex items-center justify-center gap-x-2">
            <span className="text-base">
              <Time />
            </span>
            {format(new Date(scheduleWorkshop.start_date), "EEEE, MMM d, yyyy")}
          </p>
          <p className="bg-reddishBrown text-white font-semibold py-2 px-4 rounded-lg mr-2 flex items-center justify-center gap-x-2">
            <span className="text-base">
              <Time />
            </span>{" "}
            {format(datetimeStart, "h:mm").replace(":", "h")} -{" "}
            {format(datetimeEnd, "h:mm").replace(":", "h")}
          </p>
          <p className="bg-reddishBrown text-white font-semibold py-2 px-4 rounded-lg mr-2 flex items-center justify-center gap-x-2">
            <span className="text-base">
              <Time />
            </span>{" "}
            2 persons
          </p>
        </div>
      </div>
    </article>
  );
}

export default ShoppingCart;
