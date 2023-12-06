import Image from 'next/image'
import React from 'react'
import { featuredProducts } from '@/data';

export default function Featured() {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      <div className="w-max flex">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {product.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-300">
                <Image
                  src={product.img}
                  alt=""
                  fill={true}
                  objectFit="contain"
                />
              </div>
            )}
            <div className="flex-1 flex flex-col gap-4 items-center justify-center text-center">
              <h1 className="text-xl font-bold xl:text-2xl 2xl:text-3xl">{product.title}</h1>
              <p className='p-4 2xl:p-8'>{product.desc}</p>
              <span className="text-xl font-bold">{product.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                장바구니 추가
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
