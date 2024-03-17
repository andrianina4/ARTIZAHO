"use client";

import CardComponent from "@/components/CardComponent";
import { getWorkShop } from "@/services/workshop.service";
import { useQuery } from "@tanstack/react-query";
import Slider, { Settings } from "react-slick";
export default function ListCard() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getWorkShop(),
    queryKey: ["workshop"],
    retryOnMount: false,
  });

  if (isLoading) {
    return (
      <div className="mt-4 flex items-center gap-4">
        Loading <span className="loading loading-dots loading-md"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div role="alert" className="alert alert-error mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>An error has been encountered.</span>
      </div>
    );
  }
  return (
    <div className="slider-container mt-4">
      <Slider {...settings}>
        {data &&
          data?.map((workshop, index) => {
            return (
              <div key={index}>
                <CardComponent key={index} workshop={workshop} />
              </div>
            );
          })}
      </Slider>
    </div>
  );
}
