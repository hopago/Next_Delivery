import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'

export default function CategoryPage() {
  return (
    <div className="flex flex-wrap text-red-500">
      {pizzas.map((pizza) => (
        <Link
          className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 md:w-1/2 lg:w-1/3 p-4 flex flex-col group justify-between even:bg-fuchsia-50"
          href={`/product/${pizza.title}`}
          key={pizza.title}
        >
          {pizza.img && (
            <div className="relative h-[80%]">
              <Image src={pizza.img} alt="" fill={true} objectFit='contain' />
            </div>
          )}
          <div className='flex items-center justify-between font-bold'>
            <h1 className='text-2xl p-2'>{pizza.title}</h1>
            <h2 className='group-hover:hidden text-xl'>{pizza.price}</h2>
            <button className='hidden group-hover:block bg-red-500 text-white p-2 rounded'>장바구니 추가</button>
          </div>
        </Link>
      ))}
    </div>
  );
}
