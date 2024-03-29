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
      <header className="z-50 px-20 fixed top-0 w-full h-[60px] md:h-[70px] flex justify-between items-center bg-yellow-400 global-padding ">
        <Link href="/">
          <Image
            src="/logo-large-03.png"
            width="500"
            height="20"
            alt="logo"
            className="sm:w-[200px]"
          />
        </Link>

        <div className=" flex justify-between items-center text-black font-bold text-lg w-[400px]">
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
                ? "lg:none absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-yellow-400 text-center ease-in duration-300"
                : "lg:none absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-yellow-400 text-center ease-in duration-300"
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
