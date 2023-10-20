import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="w-full min-w-full">
        <div className="bg-gray-300 flex flex-col justify-center items-center py-8">
          <Image src="/logo-large-03.png" width="150" height="30" alt="logo" />
          <p className="text-zinc-400 mt-5">COPYRIGHT BY M.C</p>
        </div>
      </div>
    </>
  );
}
