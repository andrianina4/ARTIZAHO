import { imgProfile } from "@/constants/link/images";
import { Quote } from "@/constants/link/svg";
import Image from "next/image";

type PropsComment = {
  comment: string;
  author: string;
  role: string;
  img?: string;
};
export default function Comment(props: PropsComment) {
  const { author, comment, role, img } = props;
  return (
    <div className="w-[527px] h-[275px] relative rounded-[12px] bg-[#FFFEFD] shadow-card flex flex-col justify-center ">
      <div className="absolute top-0 left-[-5%]">
        <Quote />
      </div>
      <div className="p-4 mt-6">
        <p className="text-brown text-sm font-normal ">{comment}</p>

        <div className="flex gap-[12px] items-center mt-10">
          <Image
            src={img ? img : imgProfile}
            alt="imgProfile"
            className="rounded-full"
            height={58}
            width={58}
          />

          <div className="text-brown font-manrope font-bold ">
            <p className="  text-sm ">{author}</p>
            <span className="text-xs">{role}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
