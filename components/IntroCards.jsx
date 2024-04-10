import Image from "next/image";

export default function IntroCards({ src, intro, title, pageLink }) {
  return (
    <a href={pageLink}>
      <div className="introCardContainer">
        <Image
          src={src}
          width={1200}
          height={800}
          alt="intro picture"
          className="roundImg"
        />
        <p className="mt-5 text-lg font-bold  md:text-xl ">{title}</p>
        <div className="p-2 text-center text-sm sm:w-[20vw] sm:h-[10vh] md:text-md ">
          {intro}
        </div>
      </div>
    </a>
  );
}
