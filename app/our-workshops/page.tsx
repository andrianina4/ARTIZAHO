"use client";

import CardComponent from "@/components/CardComponent";
import InputGroupMultiple from "@/components/InputGroupMultiple";
import NavBar from "@/components/nav-bar";
import { getWorkShop } from "@/services/workshop.service";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { chunk } from "lodash";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type PropsLabel = {
  title: string;
  isActive: boolean;
};

const Label = (props: PropsLabel) => {
  return (
    <span
      className={`uppercase ${
        props.isActive
          ? "text-reddishBrown  font-bold  "
          : "text-brown font-medium opacity-[80%]"
      }  font-manrope text-sm hover:cursor-pointer`}
    >
      {props.title}
    </span>
  );
};

export default function Page() {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getWorkShop(),
    queryKey: ["workshop"],
    retryOnMount: false,
  });

  const router = useRouter();
  const testGeneration = [1, 2, 3, 4, 5, 6, 7, 8];
  const split = chunk(testGeneration, 4);
  const labelList: string[] = [
    "FLORAL",
    "LEATHER",
    "PICULTURE",
    "POTTERY",
    "ANTEMORO PAPER",
  ];

  const handleClick = () => {
    router.push("/our-workshops/details");
  };

  return (
    <div className="bg-[#FFF] w-[1440px] mx-auto">
      <header>
        <NavBar isWhite={true} />
      </header>

      <div className="bodyContainer ">
        <div className="inputContainer w-[949px] mx-auto ">
          <InputGroupMultiple />
        </div>

        <div className="tabs flex gap-[32px] justify-center">
          <Label title="ALL" isActive={true} />
          {labelList.map((item, indexItem) => (
            <Label key={indexItem} isActive={false} title={item} />
          ))}
        </div>
        {isLoading && (
          <div className="mt-4 flex items-center gap-4">
            Loading <span className="loading loading-dots loading-md"></span>
          </div>
        )}
        {isError && (
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
        )}

        {data && (
          <div className="flex flex-col justify-center items-center">
            {split.map((data, indexData) => {
              return (
                <div key={indexData} className="flex">
                  {data.map((item, indexItem) => {
                    return (
                      <CardComponent
                        key={indexItem}
                        title="Leather"
                        description="Lain, a passionate leatherworker, introduces you to the art of leatherwork by creating your own bracelet."
                        label="Leather: Bracelet"
                        place="Antananarivo"
                        price={15.0}
                        time="1:30"
                        onClick={handleClick}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
