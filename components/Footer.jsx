import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="w-full min-w-full">
        <div className="bg-stone-200 flex flex-col justify-center items-center py-4">
          <Image src="/logo-large-03.png" width="120" height="30" alt="logo" />
          <p className="text-zinc-400 mt-2">此網站僅為個人作品練習用。</p>
        </div>
      </div>
    </>
  );
}
