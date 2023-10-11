import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <header className="pt-[0.5rem] pr-[10rem] pl-[10rem] fixed top-0 w-full">
        <div className="flex justify-center mb-[0.5rem]">
          <Link href="/">
            <Image src="/logo-large.png" width="300" height="20" alt="logo" />
          </Link>
        </div>
        <Navbar />
      </header>
    </>
  );
}
