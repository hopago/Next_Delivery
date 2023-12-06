import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown';

export default function Offer() {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">맛난 버거</h1>
        <p className="text-white xl:text-xl">쩔어요</p>
        <CountDown />
        <button className="bg-red-500 text-white rounded-md py-3 px-6">
          바로 주문하기
        </button>
      </div>
      <div className="relative flex-1 w-full md:h-full">
        <Image src="/offerProduct.png" alt="" objectFit="contain" fill={true} />
      </div>
    </div>
  );
}
