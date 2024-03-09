"use client";
import Button from "@/components/button";
import { LeftLine, People, RightLine } from "@/constants/link/icons";
import React, { useState } from "react";

type Props = {};

function ChoiceNumberPersonne({}: Props) {
  const [count, setCount] = useState(0);

  const countChange = (type: "-" | "+") => {
    setCount((state) => {
      if (type === "-") {
        let c = state - 1;
        return c < 0 ? 0 : c;
      }
      return state + 1;
    });
  };

  return (
    <div className="flex gap-x-3 items-center bg-white-40% text-lg w-min py-2 px-4 rounded-lg">
      <span className="text-brown">
        <People />
      </span>
      <Button
        content={<LeftLine />}
        className="bg-white text-lg !text-black-default w-min"
        onClick={() => countChange("-")}
      />
      <span className="text-black-default text-base">{count}</span>
      <Button
        content={<RightLine />}
        className="bg-white text-lg !text-black-default w-min"
        onClick={() => countChange("+")}
      />
    </div>
  );
}

export default ChoiceNumberPersonne;
