"use client";

import React from "react";
import { useState } from "react";
import { DateRange, DateRangeProps } from "react-date-range";
import { addDays, format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import NavBar from "@/components/nav-bar";

function Page() {
  return (
    <div>
      <header>
        <NavBar isWhite={true} />
      </header>
    </div>
  );
}

export default Page;
