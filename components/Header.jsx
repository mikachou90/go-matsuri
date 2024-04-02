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
      <header className="z-10 py-10 fixed top-0 p-3 w-full flex justify-between items-center bg-amber-300 lg:flex-col ">
        <Link href="/">
          <Image
            src="/logo-large-03.png"
            width="500"
            height="20"
            alt="logo"
            className="ml-20 w-[30vw] md:w-[20vw] lg:ml-0 lg:mb-10"
          />
        </Link>

        <div className="flex justify-between items-center text-black font-bold text-lg lg:w-[50vw] lg:text-2xl">
          <ul className="hidden lg:flex justify-around items-center w-full">
            <li className="hover:text-white">
              <Link href="/">首頁</Link>
            </li>
            <li className="hover:text-white">
              <Link href="/events">祭典一覽</Link>
            </li>

            <li className="hover:text-white">
              <Link href="/postEvent">提供祭典</Link>
            </li>
            <li className="hover:text-white">
              <Link href="/myFavList">我的祭典</Link>
            </li>

            <li className="hover:text-white">
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
                ? "lg:none absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-amber-300  text-center ease-in duration-300"
                : "lg:none absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-amber-300    text-center ease-in duration-300"
            }
          >
            <ul>
              <li className="text-2xl text-black mb-5 hover:text-white">
                <Link href="/" onClick={handleMobileNav}>
                  首頁
                </Link>
              </li>
              <li className="text-2xl text-black mb-5 hover:text-white">
                <Link href="/events" onClick={handleMobileNav}>
                  祭典一覽
                </Link>
              </li>

              <li className="text-2xl text-black mb-5 hover:text-white">
                <Link href="/postEvent" onClick={handleMobileNav}>
                  提供祭典
                </Link>
              </li>
              <li className="text-2xl text-black mb-5 hover:text-white">
                <Link href="/myFavList" onClick={handleMobileNav}>
                  我的祭典
                </Link>
              </li>
              <li className="text-2xl text-black mb-5 hover:text-white">
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
