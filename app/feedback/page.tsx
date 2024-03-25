"use client";

import Button from "@/components/button";
import NavBar from "@/components/nav-bar";
import Textarea from "@/components/textarea";
import { SendDuotone } from "@/constants/link/icons";
import React from "react";

type Props = {};
type RatingProps = {
  label: string;
  // rating: number;
};
const Rating = (props: RatingProps) => {
  const { label } = props;

  return (
    <div>
      <p>{label}</p>
      <div className="flex gap-4">
        <div className="rating  rating-half">
          {/* <input type="radio" name="rating-10" className="rating-hidden" /> */}
          <input
            type="radio"
            name="rating-10"
            className="bg-yellow mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-yellow mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-yellow mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-yellow mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-yellow mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-yellow mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-yellow mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-yellow mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-yellow mask mask-star-2 mask-half-1"
            checked
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-yellow mask mask-star-2 mask-half-2"
          />
        </div>
        <span className="font-bold text-blueDark">4.5/5</span>
      </div>
    </div>
  );
};

function Feedback({}: Props) {
  return (
    <div className="min-h-screen bg-bg-feedback bg-cover flex flex-col">
      <header className="w-full max-w-page mx-auto">
        <NavBar />
      </header>

      <main className="flex-1 py-7 lg:px-24 sm:px-2 w-full lg:max-w-page mx-auto flex justify-center z-50 ">
        <div className="lg:h-[70vh] lg:w-4/5 bg-white rounded-3xl py-14 lg:px-24 sm:px-5 relative sm:w-full">
          <h1 className="font-moonGet text-xl text-bronze font-extrabold tracking-widest text-center">
            SHARE YOUR EXPERIENCE WITH OUR WORKSHOPS
          </h1>
          <p className="mt-5">
            Your opinion is important to us! Your feedback helps us to
            continually improve our workshops. Thank you for taking the time to
            share your experience with us.
          </p>
          <Textarea
            placeholder="Your feedback is important to us! Share your experience with our workshops here"
            className="my-5 h-60"
          />

          <div className="flex lg:gap-[97px] lg:flex-row sm:flex-col sm:gap-5 sm:mb-4 ">
            <Rating label="Note for workshop" />
            <Rating label="Note for artisans" />
          </div>

          <div className="w-min float-right">
            <Button
              leftIcon={<SendDuotone className="text-4xl" />}
              content="Send"
              className="py-1 text-lg"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Feedback;
