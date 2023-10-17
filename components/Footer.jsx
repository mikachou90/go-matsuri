import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="w-full">
        <div className="bg-gray-300 flex justify-center">
          <Image src="/logo-large.png" width="200" height="30" alt="logo" />
        </div>
      </div>
    </>
  );
}
