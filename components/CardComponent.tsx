import { Alarm, Heart, Place } from "@/constants/link/icons";
import { art, imgDefault } from "@/constants/link/images";
import { getImgUrl } from "@/services/index.service";
import { IImage } from "@/types/IImage";
import { IWorkShop } from "@/types/IWorkshop";
import Image from "next/image";

// type PropsCard = {
//   title: string;
//   label: string;
//   description: string;
//   time: string;
//   place: string;
//   price: number | string;
//   onClick?: () => void;
//   images: IImage[];
// };

type PropsCard = {
  workshop: IWorkShop;
  onClick?: () => void;
};

export default function CardComponent(props: PropsCard) {
  // const { description, label, place, price, time, title, onClick, images } =
  //   props;

  const {
    workshop: {
      workshop_info: { base_price },
      category,
      description,
      title,
      images,
    },
    onClick,
  } = props;

  return (
    <div
      className=" w-[304px] h-[449px] hover:shadow-xl rounded-[24px] cursor-pointer"
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      <div className="imageContainer relative">
        <div>
          <Image
            src={images.length ? getImgUrl(images) : imgDefault}
            alt="art"
            width={304}
            height={244}
            objectFit="coverable"
            className="rounded-[24px] h-[244px] object-cover"
          />
        </div>

        <div className="absolute top-0 w-full mt-4   ">
          <div className="flex px-4">
            <div>
              <span className=" uppercase font-manrope font-bold text-sm text-[#FFFFFF] py-[4px] px-[10px] rounded-[8px] backdrop-blur-[5px] bg-[#0000004D] flex items-center">
                {title}
              </span>
            </div>

            <div className="flex-grow-[1] flex justify-end">
              <div className="avatar placeholder">
                <div className="bg-[#0000004D] text-white rounded-full w-8 backdrop-blur-[5px]">
                  <span className="text-xs">
                    <Heart />
                  </span>
                </div>
              </div>
            </div>

            {/* <div className="w-[24px] h-[24px] rounded-[36px] backdrop-blur-[5px] text-[#FFFFFF] bg-[#0000004D] p-[6px]"> */}

            {/* <span className=" text-[#FFFFFF] rounded-[36px]  p-[6px] backdrop-blur-[5px] bg-[#0000004D]">
              </span> */}
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="mt-4 ml-4  p-5">
        <p className="font-manrope font-bold text-sm text-black">{category}</p>
        <p className="text-[10px] font-manrope font-normal py-[10px]">
          {description}
        </p>
        <p className="text-brown font-bold text-[10px] font-manrope flex gap-5 items-center">
          {/* <div className="flex items-center">
            <Alarm />
            01h30
          </div> */}
          <div className="flex items-center gap-1">
            <Place />
            Antananarivo
          </div>
        </p>
      </div>

      <div className="mt-4 pr-4 text-right">
        <p className="text-brown font-black text-[32px]">{base_price}€</p>
      </div>
    </div>
  );
}
