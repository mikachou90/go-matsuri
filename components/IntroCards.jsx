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
        <p className="mt-5 text-lg font-bold  md:text-2xl lg:text-3xl">
          {title}
        </p>
        <div className="p-2 w-[40vw]  text-sm sm:w-[30vw] sm:h-[8vh] md:text-xl lg:text-2xl">
          {intro}
        </div>
      </div>
    </a>
  );
}
