"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GrClose, GrMenu } from "react-icons/gr";
export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleMobileNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className=" flex justify-between items-center text-white font-bold  ">
        <ul className="hidden sm:flex justify-around items-center border-2 border-white w-full bg-red-700 h-[2rem]">
          <li className="">
            <Link href="/">首頁</Link>
          </li>
          <li className="">
            <Link href="/">祭典一覽</Link>
          </li>
          <li className="">
            <Link href="/">最近祭典</Link>
          </li>
          <li className="">
            <Link href="/">聯絡我們</Link>
          </li>
        </ul>

        {/* mobile button */}
        <div onClick={handleMobileNav} className="block sm:hidden z-10">
          {nav ? <GrClose size={20} /> : <GrMenu size={20} />}
        </div>

        {/* mobile menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-red-700 text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-red-700 text-center ease-in duration-300"
          }
        >
          <ul>
            <li className="text-2xl text-white mb-5 hover:text-gray-300">
              <Link href="/">首頁</Link>
            </li>
            <li className="text-2xl text-white mb-5 hover:text-gray-300">
              <Link href="/">祭典一覽</Link>
            </li>
            <li className="text-2xl text-white mb-5 hover:text-gray-300">
              <Link href="/">最近祭典</Link>
            </li>
            <li className="text-2xl text-white mb-5 hover:text-gray-300">
              <Link href="/">聯絡我們</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
