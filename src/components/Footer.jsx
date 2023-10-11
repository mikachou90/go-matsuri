import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="pt-[0.5rem] pr-[10rem] pl-[10rem] fixed bottom-0 w-full">
        <div className="bg-gray-300 flex justify-center">
          <Image src="/logo-large.png" width="150" height="20" alt="logo" />
        </div>
      </div>
    </>
  );
}
