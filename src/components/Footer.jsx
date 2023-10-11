import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="bg-gray-300 flex justify-center p-[0.5rem]">
        <Image src="/logo-large.png" width="150" height="20" alt="logo" />
      </div>
    </>
  );
}
