import matsuriData from "@/data/dummyData";
import Image from "next/image";
import Link from "next/link";
import { getEventDetail } from "@/api/events/route";

export function generateMetadata({ params }) {
  return {
    title: `Go Matsuri! | ${params.event_id}`,
    description: "日本慶典情報",
  };
}

const Event = async ({ params }) => {
  const data = await getEventDetail(params.event_id);
  console.log("[data in eventDetil]", data);

  return (
    <div className="mt-5">
      <div
        id={data.id}
        className="w-full flex flex-col items-center pt-[100px] pb-[50px] px-4"
      >
        <h1 className="font-bold text-2xl mb-5 lg:text-4xl ">{data.name}</h1>
        <div className="px-5 xl:flex xl:mt-5">
          <Image
            src={data.picture || "/pic_missing.png"}
            width={400}
            height={300}
            alt="event picture"
            className="md:w-[600px] lg:w-[800px]"
          />
          <div className="w-[400px] mt-[30px] md:w-[600px] lg:w-[800px] xl:ml-10">
            <p className="font-bold text-lg md:text-xl lg:text-2xl  ">
              名稱: {data.name}
            </p>
            <p className="font-bold text-lg md:text-xl lg:text-2xl">
              舉辦期間: {data.period}
            </p>
            <p className="font-bold text-lg md:text-xl lg:text-2xl">
              地點: {data.location}
            </p>
            <p className="font-bold text-lg md:text-xl lg:text-2xl">
              交通: {data.station}
            </p>
            <p className="font-bold text-lg text-amber-600 md:text-xl lg:text-2xl">
              <Link href={data.link}>相關連結</Link>
            </p>
            <br />
            <p className="font-bold text-lg md:text-xl lg:text-2xl">
              簡介: {data.description}
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
