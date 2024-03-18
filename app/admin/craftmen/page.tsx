"use client";

import Button from "@/components/button";
import { QueryClientProvider, QueryClient } from "react-query";
import {
  AddImage,
  CalendarIcon,
  UserAdd,
  UserAddFill,
} from "@/constants/link/icons";
import React, { useState } from "react";
import ModalLayout from "@/components/modal";
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import ImageCustom from "@/components/imageCustom";
import CalendarSection from "./content/calendarSection";
import ListSection from "./content/listSection";
import { addDays, format } from "date-fns";
import { ISelect } from "@/types/IField";
import { Vase } from "@/constants/link/images";
import Content_one from "./modalContent/content_one";
import Content_two from "./modalContent/content_two";
import SelectCustom from "@/components/Select";
import { ArtisanIdContextProvider } from "../provider/ArtisanIdProvider";

type Props = {};

interface Range {
  startDate: Date;
  endDate: Date;
  key: string;
}

const selectItem: Array<ISelect> = [
  { value: "name", label: "Name" },
  {
    value: "note",
    label: "Note",
  },
];

const queryClient = new QueryClient();

function Page({}: Props) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(true);
  const [step, setStep] = useState(1);

  // const [DateState, setDateState] = useState<Range[]>();

  const handleNext = () => {
    console.log("suivant");

    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleToogle = () => {
    setOpen(!open);
  };
  const switchContent = () => {
    setContent(!content);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className=" h-full  flex flex-col  ">
        <div className="flex flex-row justify-between items-center">
          <div className="">
            <Button
              leftIcon={<UserAddFill />}
              content="Add craftman"
              className=""
              onClick={handleToogle}
            />
          </div>
          <div className="flex flex-row items-center w-auto gap-7">
            <div className="font-bold w-2/3 ">Filter by</div>
            <SelectCustom
              options={selectItem}
              className="!bg-white !h-10 !rounded-xl"
            />
            <Button
              content="Calendar"
              leftIcon={<CalendarIcon />}
              className={`!w-40 ${content ? "!bg-white !text-gray-60% " : ""}`}
              onClick={switchContent}
            />
          </div>

          {/* Modal craftmen */}
          <ModalLayout
            open={open}
            onClick={handleToogle}
            className="h-[650px] w-[830px]"
          >
            <ArtisanIdContextProvider>
              {/* Content one: à propos de l'artisan */}
              {/* {step === 1 && <Content_one onNext={handleNext} />} */}
              <Content_one onClick={handleToogle}/>
              {/* Content two: dispo de l'artisan */}
              {/* {step === 2 && (
                <Content_two />
                // <Content_two
                //   onPrevious={handlePrevious}
                //   DateVal={DateState}
                //   setDateVal={setDateState}
                // />
              )} */}
            </ArtisanIdContextProvider>
          </ModalLayout>
        </div>

        <div className="h-[90%]">
          <ListSection />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default Page;
