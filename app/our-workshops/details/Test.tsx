"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { our1 } from "@/constants/link/images";
export default function Test() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="slider-container">
      <Slider {...settings} useCSS={true}>
        <div>
          <Image src={our1} alt="our1" />
        </div>
        <div>
          <Image src={our1} alt="our1" />
        </div>{" "}
        <div>
          <Image src={our1} alt="our1" />
        </div>{" "}
        <div>
          <Image src={our1} alt="our1" />
        </div>{" "}
        <div>
          <Image src={our1} alt="our1" />
        </div>{" "}
        <div>
          <Image src={our1} alt="our1" />
        </div>{" "}
        <div>
          <Image src={our1} alt="our1" />
        </div>{" "}
        <div>
          <Image src={our1} alt="our1" />
        </div>{" "}
        <div>
          <Image src={our1} alt="our1" />
        </div>{" "}
        <div>
          <Image src={our1} alt="our1" />
        </div>{" "}
        <div>
          <Image src={our1} alt="our1" />
        </div>{" "}
        <div>
          <Image src={our1} alt="our1" />
        </div>{" "}
        <div>
          <Image src={our1} alt="our1" />
        </div>{" "}
        <div>
          <Image src={our1} alt="our1" />
        </div>
      </Slider>
    </div>
  );
}
