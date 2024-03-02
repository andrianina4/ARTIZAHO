"use client";

import CardComponent from "@/components/CardComponent";
import InputGroupMultiple from "@/components/InputGroupMultiple";
import NavBar from "@/components/nav-bar";
import { chunk } from "lodash";
import { useRouter } from "next/navigation";
import React from "react";

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
      </div>
    </div>
  );
}
