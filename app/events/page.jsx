import matsuriData from "../../data/dummyData";
import Image from "next/image";

const page = () => {
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
          <p className="font-bold text-xl">名稱: {matsuriData[0].eventName}</p>
          <br />
          <p className="font-bold text-xl">
            簡介: {matsuriData[0].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
