import React from "react";
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import ProgressBar from "@/components/progress-bar";
import Image from "next/image";
import ProfileCard from "@/components/ProfileCard";
import StarScore from "@/components/star-score";
import InputContainer from "../InputContainer";
import { EditFill, AddImage, Heart, Users } from "@/constants/link/icons";
import { useQuery, useMutation } from "react-query";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ICraftman } from "@/types/ICraftman";

function AboutCraftman() {
  return "AboutCraftman";
  //   const {
  //     data: craftman,
  //     error,
  //     isLoading,
  //   } = useQuery<ICraftman>(["craftman", id], async () => {
  //     const response = await axios.get(`{BASE_URL}/api/artisan/${id}`);
  //     return response.data;
  //   });

  //   const {
  //     register,
  //     handleSubmit,
  //     formState: errors,
  //   } = useForm<ICraftman>({
  //     defaultValues: craftman,
  //   });

  //   const mutation = useMutation(async (data: ICraftman) => {
  //     await axios.patch("baseUrl", data);
  //   });

  //   const onSubmit = (data: ICraftman) => {
  //     mutation.mutate(data);
  //   };

  //   const handleSendCraftaman = (data: ICraftman) => {
  //     onSubmit(data);
  //   };
  //   return (
  //     <div className=" flex mx-12 my-6 gap-2">
  //       <div className="flex flex-col w-3/5">
  //         <form onSubmit={handleSendCraftaman}>
  //           <InputContainer title="Name">
  //             <Input placeholder="Name..." className="w-4/5 " />
  //             <button
  //               type="submit"
  //               className="ml-6 text-gray-60% hover:bg-white-40% py-2 px-2 rounded-full text-2xl "
  //             >
  //               <EditFill />
  //             </button>
  //           </InputContainer>
  //           <InputContainer title="Know-how">
  //             <Input placeholder="Know-how..." className="w-4/5 " />
  //           </InputContainer>
  //           <InputContainer title="Description">
  //             <Textarea placeholder="Description..." className="!w-4/5 mt-2 " />
  //           </InputContainer>
  //         </form>
  //         <div>
  //           <div className="text-brown text-lg font-bold ">
  //             <span>Workshop performance</span>
  //           </div>
  //           <div>
  //             <ProgressBar
  //               color="blue"
  //               leftIcon={<Heart />}
  //               text="Bouquet en vase"
  //               number={5}
  //             />
  //             <ProgressBar
  //               color="green"
  //               leftIcon={<Heart />}
  //               text="Bouquet en vase"
  //               number={5}
  //             />
  //             <ProgressBar
  //               color="bronze"
  //               leftIcon={<Heart />}
  //               text="Bouquet en vase"
  //               number={5}
  //             />
  //           </div>
  //         </div>
  //       </div>

  //       <div className="relative  rounded-3xl  w-2/5">
  //         <ProfileCard
  //           img={"/temp/vase.png"}
  //           className="absolute left-1/2 transform -translate-x-1/2"
  //           icon={<AddImage />}
  //           styleIcon="bg-bronze text-white"
  //         >
  //           <div className="flex justify-center bg-white  rounded-3xl w-48 h-10 ">
  //             <StarScore />
  //           </div>
  //           <div className="flex justify-center items-center gap-2 bg-white  rounded-3xl w-48 h-10  ">
  //             <span>
  //               <Users />
  //             </span>
  //             <span>Total Client</span>
  //             <span>15</span>
  //           </div>
  //         </ProfileCard>
  //       </div>
  //     </div>
  //   );
}

export default AboutCraftman;
