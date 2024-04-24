import Image from "next/image";

export default function IntroCards({ src, intro, title, pageLink }) {
  return (
    <a
      href={pageLink}
      className="border-[2px] border-transparent rounded-lg hover:border-amber-400 hover:shadow-lg"
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
    </a>
  );
}
