"use client";

import CardComponent from "@/components/CardComponent";
import InputGroupMultiple from "@/components/InputGroupMultiple";
import NavBar from "@/components/nav-bar";
import { getWorkShop } from "@/services/workshop.service";
import { IWorkShop } from "@/types/IWorkshop";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Error from "../_global/loading";
import LoadingComponent from "../_global/loading";
import ErrorComponent from "../_global/error";

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
  const labelList: string[] = [
    "FLORAL",
    "LEATHER",
    "PICULTURE",
    "POTTERY",
    "ANTEMORO PAPER",
  ];

  const handleClick = (workshop: IWorkShop) => {
    router.push(`/our-workshops/details/${workshop.id}`);
  };

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

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
        <div className="flex flex-wrap gap-[16px] mt-6 mb-6">
          {data?.map((workshop, index) => {
            return (
              <CardComponent
                key={index}
                workshop={workshop}
                // title={workshop.category}
                // description={workshop.description}
                // label={workshop.title}
                // place="Antananarivo"
                // price={workshop.workshop_info.base_price}
                // time="1:30"
                onClick={() => {
                  handleClick(workshop);
                }}
                // images={workshop.images}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
