import React, { useEffect, useState } from "react";
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import ProgressBar from "@/components/progress-bar";
import Image from "next/image";
import ProfileCard from "@/components/ProfileCard";
import StarScore from "@/components/star-score";
import InputContainer from "../InputContainer";
import { EditFill, AddImage, Heart, Users } from "@/constants/link/icons";
import { ICraftman } from "@/types/ICraftman";
import { getArtisanDetail } from "@/services/artisan.service";
import useUpdateCraftman from "@/hook/AdminArtisan/useUpdateCraftman";
import { useQuery } from "@tanstack/react-query";

type props = {
  id: string;
};

function AboutCraftman({ id }: props) {
  const { data } = useQuery({
    queryKey: ["Craftman"],
    queryFn: () => getArtisanDetail(id),
  });

  const [formData, setFormData] = useState<ICraftman | undefined>();

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const { register, handleSubmit, onSubmit, errors } = useUpdateCraftman(id);

  return (
    <div className=" flex mx-12 my-6 gap-2">
      <div className="flex flex-col w-3/5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer title="Name">
            <Input
              register={register("name")}
              placeholder="Name..."
              className="w-4/5"
              defaultValue={formData?.name}
            />
            <button
              type="submit"
              className="ml-6 text-gray-60% hover:bg-white-40% py-2 px-2 rounded-full text-2xl "
            >
              <EditFill />
            </button>
          </InputContainer>
          <InputContainer title="Know-how">
            <Input
              register={register("knowhow")}
              placeholder="Know-how..."
              className="w-4/5 "
              defaultValue={formData?.expertise}
            />
          </InputContainer>
          <InputContainer title="Description">
            <Textarea
              register={register("description")}
              placeholder="Description..."
              className="!w-4/5 mt-2 "
              defaultValue={formData?.description}
            />
          </InputContainer>
        </form>
        <div>
          <div className="text-brown text-lg font-bold ">
            <span>Workshop performance</span>
          </div>
          <div>
            <ProgressBar
              color="blue"
              leftIcon={<Heart />}
              text="Bouquet en vase"
              number={5}
            />
            <ProgressBar
              color="green"
              leftIcon={<Heart />}
              text="Bouquet en vase"
              number={5}
            />
            <ProgressBar
              color="bronze"
              leftIcon={<Heart />}
              text="Bouquet en vase"
              number={5}
            />
          </div>
        </div>
      </div>

      <div className="relative  rounded-3xl  w-2/5">
        {/* <ProfileCard img={"/temp/vase.png"}
						className="absolute left-1/2 transform -translate-x-1/2"
						icon={<AddImage />}
						styleIcon="bg-bronze text-white">
						<div className="flex justify-center bg-white  rounded-3xl w-48 h-10 ">
							<StarScore />
						</div>
						<div className="flex justify-center items-center gap-2 bg-white  rounded-3xl w-48 h-10  ">
							<span>
								<Users />
							</span>
							<span>Total Client</span>
							<span>20</span>
						</div>
					</ProfileCard> */}
      </div>
    </div>
  );
}

export default AboutCraftman;
