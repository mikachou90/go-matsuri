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
      <header className="fixed top-0 w-full flex justify-between items-center bg-yellow-400 global-padding ">
        <Link href="/">
          <Image
            src="/logo-large-03.png"
            width="250"
            height="20"
            alt="logo"
            className="lg:w-[250px]"
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
              <Link href="/about">關於本站</Link>
            </li>
          </ul>

          {/* mobile button */}
          <div
            onClick={handleMobileNav}
            className="block absolute right-20 align-middle lg:hidden z-10 "
          >
            {nav ? <GrClose size={20} /> : <GrMenu size={20} />}
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
                <Link href="/">首頁</Link>
              </li>
              <li className="text-2xl text-black mb-5 hover:text-white">
                <Link href="/events">祭典一覽</Link>
              </li>

              <li className="text-2xl text-black mb-5 hover:text-white">
                <Link href="/about">關於本站</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
