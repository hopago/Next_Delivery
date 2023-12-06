import Link from 'next/link'
import Menu from './Menu';
import CartIcon from './CartIcon';
import Image from 'next/image';

export default function Navbar() {
  const user = false;

  return (
    <nav className="h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">홈</Link>
        <Link href="/menu">메뉴</Link>
        <Link href="/">컨택</Link>
      </div>
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">호달달</Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className='md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>+12 3456 7890</span>
        </div>
        {!user ? (
          <Link href="/login">로그인</Link>
        ) : (
          <Link href="/orders">주문하기</Link>
        )}
        <Link href="/cart">
          <CartIcon />
        </Link>
      </div>
    </nav>
  );
}
