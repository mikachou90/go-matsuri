import matsuriData from "@/data/dummyData";
import Image from "next/image";
import Link from "next/link";

export function generateMetadata({ params }) {
  return {
    title: `Go Matsuri! | ${params.event_id}`,
    description: "日本慶典情報",
  };
}

const Event = ({ params }) => {
  const event_id = params.event_id;
  return (
    <div className="mt-5">
      <div
        id={matsuriData.id}
        className="w-full flex flex-col items-center pt-[100px] pb-[50px] px-4"
      >
        <h1 className="font-bold text-2xl mb-5 lg:text-4xl ">
          {matsuriData[0].eventName}
        </h1>
        <div className="px-5 xl:flex xl:mt-5">
          <Image
            src={matsuriData[0].picture}
            width={400}
            height={300}
            alt="event picture"
            className="md:w-[600px] lg:w-[800px]"
          />
          <div className="w-[400px] mt-[30px] md:w-[600px] lg:w-[800px] xl:ml-10">
            <p className="font-bold text-lg md:text-xl lg:text-2xl  ">
              名稱: {matsuriData[0].eventName}
            </p>
            <p className="font-bold text-lg md:text-xl lg:text-2xl">
              舉辦期間: {matsuriData[0].period}
            </p>
            <p className="font-bold text-lg md:text-xl lg:text-2xl">
              地點: {matsuriData[0].location}
            </p>
            <p className="font-bold text-lg md:text-xl lg:text-2xl">
              交通: {matsuriData[0].transportation[0].line}
              &nbsp;
              {matsuriData[0].transportation[0].station}
              &nbsp;
              {matsuriData[0].transportation[0].route}
            </p>
            <p className="font-bold text-lg text-amber-600 md:text-xl lg:text-2xl">
              <Link href={matsuriData[0].webLink}>相關連結</Link>
            </p>
            <br />
            <p className="font-bold text-lg md:text-xl lg:text-2xl">
              簡介: {matsuriData[0].description}
            </p>
            <br />
            <p className="text-gray-400 lg:text-lg">
              本網站提供的情報僅供參考，實際舉辦日期與期間請以該祭典主辦單位公布為主。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
