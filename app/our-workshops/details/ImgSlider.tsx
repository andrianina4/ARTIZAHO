"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { our1, whoare } from "@/constants/link/images";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        right: "12px",
      }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "10px",
        zIndex: 999,
        background: "transparent",
      }}
      onClick={onClick}
    />
  );
}

export default function ImgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="slickWorkshop">
          <Image src={whoare} alt="our1" />
        </div>
        <div className="slickWorkshop">
          <Image src={whoare} alt="our1" />
        </div>
        <div className="slickWorkshop">
          <Image src={whoare} alt="our1" />
        </div>
        <div className="slickWorkshop">
          <Image src={whoare} alt="our1" />
        </div>
        <div className="slickWorkshop">
          <Image src={whoare} alt="our1" />
        </div>
        <div className="slickWorkshop">
          <Image src={whoare} alt="our1" />
        </div>
        <div className="slickWorkshop">
          <Image src={whoare} alt="our1" />
        </div>
        <div className="slickWorkshop">
          <Image src={whoare} alt="our1" />
        </div>
        <div className="slickWorkshop">
          <Image src={whoare} alt="our1" />
        </div>
        <div className="slickWorkshop">
          <Image src={whoare} alt="our1" />
        </div>
      </Slider>
    </div>
  );
}
