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
    <div>
      <div
        id={matsuriData.id}
        className="w-full flex flex-col items-center pt-[100px] pb-[50px]"
      >
        <h1 className="font-bold text-3xl mb-5">{matsuriData[0].eventName}</h1>
        <Image
          src={matsuriData[0].picture}
          width={800}
          height={300}
          alt="event picture"
        />
        <div className="w-[800px] mt-[30px]">
          <p className="font-bold text-xl">名稱: {matsuriData[0].eventName}</p>
          <p className="font-bold text-xl">舉辦期間: {matsuriData[0].period}</p>
          <p className="font-bold text-xl">地點: {matsuriData[0].location}</p>
          <p className="font-bold text-xl">
            交通: {matsuriData[0].transportation[0].line}
            {matsuriData[0].transportation[0].station}
            {matsuriData[0].transportation[0].route}
          </p>
          <p className="font-bold text-xl text-amber-600">
            <Link href={matsuriData[0].webLink}>相關連結</Link>
          </p>
          <br />
          <p className="font-bold text-xl">
            簡介: {matsuriData[0].description}
          </p>
          <br />
          <p className="text-gray-400">
            本網站提供的情報僅供參考，實際舉辦日期與期間請以該祭典主辦單位公布為主。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event;
