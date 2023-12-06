"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const imgSlideData = [
  {
    id: 1,
    title: "신선, 바삭, 따땃합니다",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "서울이면 어디든 배달이 되요!!",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "가족과 함께 피자를 먹어봐요",
    image: "/slide3.jpg",
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const automaticImgSlider = setInterval(() => {
//         setCurrentSlide((prev) =>
//           prev === imgSlideData.length - 1 ? 0 : prev + 1
//         );
//     }, 3000);

//     return () => {
//         clearInterval(automaticImgSlider)
//     }
//   }, []);

  return (
    <section className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* text */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h1 className="text-5xl text-center p-4 md:p-10 md:text-6xl xl:text-7xl">
          {imgSlideData[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8 rounded-sm">
          주문하기
        </button>
      </div>
      {/* img */}
      <div className="w-full flex-1 relative">
        <Image
          src={imgSlideData[currentSlide].image}
          fill={true}
          alt=""
          className="object-cover"
        />
      </div>
    </section>
  );
}
