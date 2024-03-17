import { Alarm, People1, PeopleCheck, Star } from "@/constants/link/icons";
import { getImgUrl } from "@/services/index.service";
import { ICraftman } from "@/types/ICraftman";
import { ITrainer } from "@/types/IUser";
import Image from "next/image";
import React from "react";

type ICondition = {
  duration: string;
  countMembers: string;
  ageRequired: string;
};

type PresentationTrainerProps = {
  trainer: ITrainer;
  condition?: ICondition;
  artisan?: ICraftman;
};

const NUMBER_STARS = 5;
const WIDTH_IMAGE_TRAINER = 110;
const HEIGHT_IMAGE_TRAINER = 160;

function PresentationTrainer(props: PresentationTrainerProps) {
  const { trainer, condition, artisan } = props;
  const { star, about, name, photo, id } = trainer;

  return (
    <div className={`flex ${condition ? "gap-2 items-center" : ""}`}>
      <article className={`flex gap-x-5`}>
        {artisan && artisan.images.length > 0 ? (
          <Image
            src={getImgUrl(artisan.images)}
            alt={`trainer-${id}`}
            width={WIDTH_IMAGE_TRAINER}
            height={HEIGHT_IMAGE_TRAINER}
            className="rounded-[64px] object-cover"
          />
        ) : (
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-24">
              <span className="text-3xl uppercase">{artisan?.name[0]}</span>
            </div>
          </div>
          // <Image
          //   src={photo}
          //   alt={`trainer-${id}`}
          //   width={WIDTH_IMAGE_TRAINER}
          //   height={HEIGHT_IMAGE_TRAINER}
          //   className="rounded-[64px] object-cover"
          // />
        )}

        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-reddishBrown font-extrabold text-base">
              With {artisan?.name}
            </h3>
            <p className="text-brown text-xs font-normal ">
              {artisan?.description}
              {/* <span className="font-bold cursor-pointer text-reddishBrown">
                ...Read more
              </span> */}
            </p>
          </div>

          <div className="flex gap-x-1">
            {[...new Array(NUMBER_STARS)].map((_, index) => (
              <span
                key={index}
                className={`text-bronze text-lg ${
                  index < star ? "" : "text-opacity-25"
                }`}
              >
                <Star />
              </span>
            ))}
          </div>
        </div>
      </article>
      {condition && <div className="flex-grow-[1]"></div>}
    </div>
  );
}

export default PresentationTrainer;
