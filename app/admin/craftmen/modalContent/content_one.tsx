import React from "react";
import {
  AddImage,
  CalendarIcon,
  UserAdd,
  UserAddFill,
  Users,
} from "@/constants/link/icons";
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import { ISelect } from "@/types/IField";
import ImageCustom from "@/components/imageCustom";
import { Vase } from "@/constants/link/images";
import Button from "@/components/button";
import AddImageRound from "@/components/AddImageRound";

import { useForm } from "react-hook-form";
import { useSendCraftman } from "@/hook/useSendCraftman";
import { FormCraftmanData } from "@/app/schema/craftmanSchema";
import SelectCustom from "@/components/Select";
import { CreateArtisanDto, CreateImageArtisanDto } from "@/dto/artisan";

type props = {
  onNext: VoidFunction;
};

const selectGenderItem: Array<ISelect> = [
  {
    value: "M",
    label: "Male",
  },
  {
    value: "F",
    label: "Female",
  },
  {
    value: "O",
    label: "Others",
  },
];

const selectExpertiseItem: Array<ISelect> = [
  {
    value: "Floral",
    label: "Floral",
  },
  {
    value: "Cuir",
    label: "Cuir",
  },
];

function Content_one({ onNext }: props) {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    ImagetoShow,
    ImageToSend,
    handleInputFile,
    handleFileChange,
  } = useSendCraftman();

  const handleSendCraftaman = ({data, imageData}: {data:CreateArtisanDto, imageData:CreateImageArtisanDto}) => {
    onSubmit({data, imageData});
  };

  return (
    <div className=" flex flex-col  justify-between w-full">
      <div className="flex items-center text-bronze text-2xl font-semibold gap-4 ">
        <span>
          <UserAdd />
        </span>
        New craftman
      </div>

      <form onSubmit={handleSubmit(()=>handleSendCraftaman)}>
        <div className="flex w-full gap-4">
          <div className="w-1/2 ">
            <Input
              placeholder="Name"
              register={register("name")}
              errorMessage={errors.name}
            />
            <SelectCustom
              options={selectExpertiseItem}
              register={register("expertise")}
              className="input-bordered mt-2"
            />
            <SelectCustom
              options={selectGenderItem}
              register={register("gender")}
              className="input-bordered mt-2"
            />
            <Textarea
              placeholder="About the craftman "
              className="h-48 mt-2"
              register={register("description")}
              errorMessage={errors.description}
            />
          </div>
          <div className=" flex flex-col w-1/2 items-center ">
            <AddImageRound
              handleFileChange={handleFileChange}
              handleInputFile={handleInputFile}
              ImagetoShow={ImagetoShow}
              bgIcon={<Users />}
            />
          </div>
        </div>
        <div className="flex gap-8">
          <Button content="Cancel" />
          <Button type="submit" content="Next" onClick={onNext} />
        </div>
      </form>
    </div>
  );
}

export default Content_one;
