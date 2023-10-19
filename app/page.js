import Image from "next/image";
import Link from "next/link";
import matsuriData from "../data/dummyData";

export default function Home() {
  return (
    <div>
      <div>
        <div className="w-full mt-10 border-2 border-orange-500 hero-img ">
          <div className="w-full h-full bg-black/60 flex flex-col items-center justify-center  ">
            <h1 className="font-bold text-white text-5xl">
              Make your journey even better!
            </h1>
            <br />
            <p className="font-bold text-white text-center text-2xl">
              找尋在你旅遊期間舉辦的祭典，讓旅程更添增美好回憶!
            </p>
          </div>
        </div>
        <div className="w-full border-2 border-black global-padding flex flex-col items-center mb-10 ">
          <p className="text-2xl font-bold my-3">近期祭典:</p>

          <div className="cards-grid p-5 border-2 border-red-400 ">
            {/* event cards render here */}
            <Link href="/events">
              <div className="w-[300px] bg-stone-100 shadow-md flex flex-col items-center ">
                <Image
                  src={matsuriData[0].picture}
                  width={300}
                  height={100}
                  objectFit="cover"
                  alt="event picture"
                />
                <div className="flex flex-col items-center py-2">
                  <p>{matsuriData[0].eventName}</p>
                  <p>{matsuriData[0].period}</p>
                </div>
              </div>
            </Link>
            <Link href="/events">
              <div className="w-[300px] bg-stone-100 shadow-md flex flex-col items-center">
                <Image
                  src={matsuriData[0].picture}
                  width={300}
                  height={100}
                  objectFit="cover"
                  alt="event picture"
                />
                <div className="flex flex-col items-center py-2">
                  <p>{matsuriData[0].eventName}</p>
                  <p>{matsuriData[0].period}</p>
                </div>
              </div>
            </Link>
            <Link href="/events">
              <div className="w-[300px] bg-stone-100 shadow-md flex flex-col items-center">
                <Image
                  src={matsuriData[0].picture}
                  width={300}
                  height={100}
                  objectFit="cover"
                  alt="event picture"
                />
                <div className="flex flex-col items-center py-2">
                  <p>{matsuriData[0].eventName}</p>
                  <p>{matsuriData[0].period}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
