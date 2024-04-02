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
      <header className="z-10 py-5 fixed top-0  w-full flex justify-between items-center bg-amber-500 ">
        <Link href="/">
          <Image
            src="/logo-large-03.png"
            width="500"
            height="20"
            alt="logo"
            className="ml-10 w-[30vw] md:w-[15vw] "
          />
        </Link>

        <div className="flex justify-between items-center  font-bold text-md md:w-[60vw] lg:text-lg">
          <ul className="hidden md:flex justify-around items-center w-full">
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
            className="block absolute right-10 align-middle md:hidden z-10 "
          >
            {nav ? <GrClose size={20} /> : <GrMenu size={20} />}
          </div>

          {/* mobile menu */}
          <div
            className={
              nav
                ? "lg:none absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-amber-500  text-center ease-in duration-300"
                : "lg:none absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-amber-500    text-center ease-in duration-300"
            }
          >
            <ul>
              <li className="text-xl  mb-5 hover:text-white">
                <Link href="/" onClick={handleMobileNav}>
                  首頁
                </Link>
              </li>
              <li className="text-xl  mb-5 hover:text-white">
                <Link href="/events" onClick={handleMobileNav}>
                  祭典一覽
                </Link>
              </li>

              <li className="text-xl mb-5 hover:text-white">
                <Link href="/postEvent" onClick={handleMobileNav}>
                  提供祭典
                </Link>
              </li>
              <li className="text-xl  mb-5 hover:text-white">
                <Link href="/myFavList" onClick={handleMobileNav}>
                  我的祭典
                </Link>
              </li>
              <li className="text-xl mb-5 hover:text-white">
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
