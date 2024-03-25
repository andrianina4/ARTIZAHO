import InputGroupMultiple from "@/components/InputGroupMultiple";
import NavBar from "@/components/nav-bar";
import React from "react";
import ListCard from "./components/ListCard";

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
  const labelList: string[] = [
    "FLORAL",
    "LEATHER",
    "PICULTURE",
    "POTTERY",
    "ANTEMORO PAPER",
  ];

  return (
    <div className="bg-[#FFF] max-w-screen-large-width mx-auto sm:px-5 lg:px-0">
      <header>
        <NavBar isWhite={true} />
      </header>

      <div className="bodyContainer ">
        <div className="inputContainer lg:w-[949px] mx-auto hidden lg:block ">
          <InputGroupMultiple />
        </div>

        <div className="tabs flex gap-[32px] justify-center sm:overflow-scroll lg:overflow-auto">
          <Label title="ALL" isActive={true} />
          {labelList.map((item, indexItem) => (
            <Label key={indexItem} isActive={false} title={item} />
          ))}
        </div>
        <div className="flex flex-wrap gap-[16px] mt-6 mb-6 md:flex-row sm:flex-col ">
          <ListCard />
        </div>
      </div>
    </div>
  );
}
