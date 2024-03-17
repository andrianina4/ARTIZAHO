"use client";
import ErrorComponent from "@/app/_global/error";
import LoadingComponent from "@/app/_global/loading";
import Trainer from "@/components/Trainer";
import PresentationTrainer from "@/components/presentation-trainer";
import { trainers } from "@/data/temp/trainers";
import { getWorkShopSchedule } from "@/services/workshop.service";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Slider, { Settings } from "react-slick";

type PropsListArtisantWorkshop = {
  id: number;
};

export default function ListArtisantWorkshop({
  id,
}: PropsListArtisantWorkshop) {
  const settings: Settings = {
    // dots: true,
    // speed: 500,
    infinite: false,
    // slidesToShow: 4,
    // slidesToScroll: 1,
  };
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getWorkShopSchedule(id),
    queryKey: ["workshopSchedule"],
    retryOnMount: false,
  });

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  const listArtisant = data?.map((item) => item.artisan);

  return (
    <div>
      {listArtisant && listArtisant.length > 0 && (
        <h5 className="font-manrope font-extrabold text-reddishBrown">
          Workshop artisans
        </h5>
      )}
      <div className="slider-container mt-4">
        <Slider {...settings}>
          {listArtisant?.map((artisan, index) => {
            return (
              <div key={index} className="w-">
                <Trainer key={index} artisan={artisan} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
