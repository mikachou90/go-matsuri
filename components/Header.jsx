"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GrClose, GrMenu } from "react-icons/gr";

export default function Header() {
  const [nav, setNav] = useState(false);

  const handleMobileNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <header className="border-2 border-red-400 z-50 py-10 fixed top-0 p-3 w-full flex justify-between items-center bg-stone-200 lg:flex-col ">
        <Link href="/">
          <Image
            src="/logo-large-03.png"
            width="500"
            height="20"
            alt="logo"
            className="border-2 border-black ml-20 w-[20vw] lg:ml-0 lg:mb-10"
          />
        </Link>

        <div className="border-2 border-yellow-600 flex justify-between items-center text-black font-bold text-lg lg:w-[50vw]">
          <ul className="hidden lg:flex justify-around items-center w-full">
            <li className="hover:text-amber-400">
              <Link href="/">首頁</Link>
            </li>
            <li className="hover:text-amber-400">
              <Link href="/events">祭典一覽</Link>
            </li>

            <li className="hover:text-amber-400">
              <Link href="/postEvent">提供祭典</Link>
            </li>
            <li className="hover:text-amber-400">
              <Link href="/myFavList">我的祭典</Link>
            </li>

            <li className="hover:text-amber-400">
              <Link href="/about">關於本站</Link>
            </li>
          </ul>

          {/* mobile button */}
          <div
            onClick={handleMobileNav}
            className="block absolute right-20 align-middle lg:hidden z-10 "
          >
            {nav ? <GrClose size={25} /> : <GrMenu size={25} />}
          </div>

          {/* mobile menu */}
          <div
            className={
              nav
                ? "lg:none absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-stone-200 text-center ease-in duration-300"
                : "lg:none absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-stone-200 text-center ease-in duration-300"
            }
          >
            <ul>
              <li className="text-2xl text-black mb-5 hover:text-amber-400">
                <Link href="/" onClick={handleMobileNav}>
                  首頁
                </Link>
              </li>
              <li className="text-2xl text-black mb-5 hover:text-amber-400">
                <Link href="/events" onClick={handleMobileNav}>
                  祭典一覽
                </Link>
              </li>

              <li className="text-2xl text-black mb-5 hover:text-amber-400">
                <Link href="/postEvent" onClick={handleMobileNav}>
                  提供祭典
                </Link>
              </li>
              <li className="text-2xl text-black mb-5 hover:text-amber-400">
                <Link href="/myFavList" onClick={handleMobileNav}>
                  我的祭典
                </Link>
              </li>
              <li className="text-2xl text-black mb-5 hover:text-amber-400">
                <Link href="/about" onClick={handleMobileNav}>
                  關於本站
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
