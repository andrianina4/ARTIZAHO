import { Alarm, Heart, Place } from "@/constants/link/icons";
import { art } from "@/constants/link/images";
import Image from "next/image";

type PropsCard = {
  title: string;
  label: string;
  description: string;
  time: string;
  place: string;
  price: number;
};

export default function CardComponent(props: PropsCard) {
  const { description, label, place, price, time, title } = props;
  return (
    <div className=" w-[304px] h-[449px] p-5 hover:shadow-xl rounded-[24px] cursor-pointer">
      <div className="imageContainer relative">
        <Image
          src={art}
          alt="art"
          width={304}
          height={244}
          className="rounded-[24px]"
        />

        <div className="absolute top-0 w-full mt-4  flex justify-around">
          <span className="uppercase font-manrope font-bold text-sm text-[#FFFFFF] py-[4px] px-[10px] rounded-[8px] backdrop-blur-[5px] bg-[#0000004D] flex items-center">
            {title}
          </span>

          <span className="text-[#FFFFFF] rounded-[36px] p-[6px] backdrop-blur-[5px] bg-[#0000004D]">
            <Heart />
          </span>
        </div>
      </div>

      <div className="mt-4 ml-4">
        <p className="font-manrope font-bold text-sm text-black">{label}</p>
        <p className="text-[10px] font-manrope font-normal py-[10px]">
          {description}
        </p>
        <p className="text-brown font-bold text-[10px] font-manrope flex gap-5 items-center">
          <div className="flex items-center">
            <Alarm /> {time}
          </div>
          <div className="flex items-center">
            <Place /> {place}
          </div>
        </p>
      </div>

      <div className="mt-4 pr-4 text-right">
        <p className="text-brown font-black text-[32px]">{price}.00€</p>
      </div>
    </div>
  );
}
