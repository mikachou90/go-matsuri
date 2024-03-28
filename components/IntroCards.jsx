import React from "react";
import Image from "next/image";

export default function IntroCards({ src, intro, title }) {
  return (
    <div className="introCardContainer">
      <Image
        src={src}
        width={1200}
        height={800}
        alt="intro picture"
        className="roundImg"
      />
      <p className="text-lg font-bold mt-2 lg:text-2xl">{title}</p>
      <div className="p-2 rounded-lg w-[35vw] text-sm md:w-[15vw] lg:text-lg">
        {intro}
      </div>
    </div>
  );
}
