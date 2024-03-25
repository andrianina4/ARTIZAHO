import { Delete, Place, Time } from "@/constants/link/icons";
import { getImgUrl } from "@/services/index.service";
import { IScheduleWorkshop } from "@/types/IWorkshop";
import { addSeconds, format, formatDistance } from "date-fns";
import fr from "date-fns/locale/fr";
import Image from "next/image";
import React from "react";

type ShoppingCartProps = {
  isBottom?: boolean;
  scheduleWorkshop: IScheduleWorkshop;
  disabledDelete?: boolean;
};

function ShoppingCart({
  isBottom,
  scheduleWorkshop,
  disabledDelete = false,
}: ShoppingCartProps) {
  const { workshop } = scheduleWorkshop;
  const { workshop_info } = workshop;

  const datetimeStart = new Date(
    `${scheduleWorkshop.start_date} ${scheduleWorkshop.time}`
  );

  const datetimeEnd = addSeconds(datetimeStart, scheduleWorkshop.duration);

  return (
    <article
      className={`flex gap-x-3 mb-10 lg:flex-row sm:flex-col ${
        isBottom ? "relative mb-12" : ""
      }`}
    >
      <div className="relative lg:w-[130px] h-[110px] object-cover">
        {workshop.images.length > 0 ? (
          <Image
            src={getImgUrl(workshop.images)}
            alt={`shopping-1`}
            fill
            className="rounded-3xl"
            objectFit="cover"
          />
        ) : (
          <Image
            src={"/temp/vase.png"}
            alt={`shopping-1`}
            fill
            className="rounded-3xl"
            objectFit="cover"
          />
        )}
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between">
            <p className="text-black-default font-bold">{workshop.title}</p>
            <p className="flex items-center gap-x-5 text-brown font-bold">
              <span>{workshop_info.base_price} €</span>
              {!disabledDelete && (
                <span className="text-xl">
                  <Delete />
                </span>
              )}
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
          className={`sm:mt-4 lg:mt-0  flex justify-between sm:flex-col lg:flex-row sm:gap-5 lg:gap-0 ${
            isBottom ? "lg:absolute -bottom-12 left-0" : ""
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
            {scheduleWorkshop.available_places} persons
          </p>
        </div>
      </div>
    </article>
  );
}

export default ShoppingCart;
