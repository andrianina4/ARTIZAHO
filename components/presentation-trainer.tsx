import { Alarm, People1, PeopleCheck, Star } from "@/constants/link/icons";
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
};

const NUMBER_STARS = 5;
const WIDTH_IMAGE_TRAINER = 110;
const HEIGHT_IMAGE_TRAINER = 160;

function PresentationTrainer(props: PresentationTrainerProps) {
  const { trainer, condition } = props;
  const { star, about, name, photo, id } = trainer;

  return (
    <div className={`flex ${condition ? "gap-2 items-center" : ""}`}>
      <article className={`flex gap-x-5`}>
        <Image
          src={photo}
          alt={`trainer-${id}`}
          width={WIDTH_IMAGE_TRAINER}
          height={HEIGHT_IMAGE_TRAINER}
          className="rounded-[64px]"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-reddishBrown font-extrabold text-base">
              With {name}
            </h3>
            <p className="text-brown text-xs font-normal ">
              {about}{" "}
              <span className="font-bold cursor-pointer text-reddishBrown">
                ...Read more
              </span>
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
