import Image from "next/image";
import Link from "next/link";

export default function IntroCards({ src, intro, title, pageLink }) {
  return (
    <Link
      href={pageLink}
      className="border-[2px] border-transparent rounded-lg  sm:hover:border-amber-400 sm:hover:shadow-lg"
    >
      <div className="introCardContainer">
        <Image
          src={src}
          width={800}
          height={500}
          alt="intro picture"
          className="roundImg"
        />
        <p className="mt-5 text-base font-bold  lg:text-lg ">{title}</p>
        <div className="p-2 text-center text-sm sm:w-[20vw] sm:h-[10vh] lg:text-base ">
          {intro}
        </div>
      </div>
    </Link>
  );
}
