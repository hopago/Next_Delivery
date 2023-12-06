"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "홈페이지", url: "/" },
  { id: 2, title: "메뉴", url: "/menu" },
  { id: 3, title: "안내", url: "/" },
  { id: 4, title: "컨택", url: "/" },
];

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const user = false;

  return (
    <section>
      {showMenu ? (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setShowMenu(false)}
        />
      ) : (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setShowMenu(true)}
        />
      )}
      {showMenu && (
        <div className="bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] flex items-center justify-center flex-col gap-8 w-full">
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.url}
              onClick={() => setShowMenu(false)}
            >
              {link.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setShowMenu(false)}>
              로그인
            </Link>
          ) : (
            <Link href="/order" onClick={() => setShowMenu(false)}>
              주문하기
            </Link>
          )}
          <Link href="/cart" onClick={() => setShowMenu(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </section>
  );
}
