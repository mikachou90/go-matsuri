import Image from "next/image";
import matsuriData from "../data/dummyData";

export default function Home() {
  return (
    <div className="globalPadding mt-20">
      <div>
        <div className="w-full border-2 border-black hero-img mb-10">
          <div className="w-full h-full bg-black/60 flex flex-col items-center justify-center globalPadding ">
            <h1 className="font-bold text-white text-5xl">
              Make your journey even better!
            </h1>
            <br />
            <p className="font-bold text-white text-center text-2xl">
              找尋與你旅遊期間相符的祭典，讓旅程更添增美好回憶!
            </p>
          </div>
        </div>
        <div className="w-full border-2 border-red-400 flex flex-col items-center">
          <p className="mx-5 text-xl">近期祭典:</p>
          <div className="flex">
            <div className="border-2 border-black w-[200px] flex flex-col items-center p-5 m-5">
              <Image
                src={matsuriData[0].picture}
                width={150}
                height={80}
              ></Image>
              <div className="mt-2">
                <p>{matsuriData[0].eventName}</p>
                <p>{matsuriData[0].period}</p>
              </div>
            </div>
            <div className="border-2 border-black w-[200px] flex flex-col items-center p-5 m-5">
              <Image
                src={matsuriData[0].picture}
                width={150}
                height={80}
              ></Image>
              <div className="mt-2">
                <p>{matsuriData[0].eventName}</p>
                <p>{matsuriData[0].period}</p>
              </div>
            </div>
            <div className="border-2 border-black w-[200px] flex flex-col items-center p-5 m-5">
              <Image
                src={matsuriData[0].picture}
                width={150}
                height={80}
              ></Image>
              <div className="mt-2">
                <p>{matsuriData[0].eventName}</p>
                <p>{matsuriData[0].period}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
