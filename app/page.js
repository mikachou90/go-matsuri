import Image from "next/image";
import Link from "next/link";
import matsuriData from "../data/dummyData";
import Card from "@/components/card";

export default function Home() {
  return (
    <div>
      <div>
        <div className="w-full mt-10 hero-img ">
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
        <div className="w-full flex flex-col items-center my-10 ">
          <p className="text-2xl font-bold my-3">近期祭典:</p>

          <div className="p-2 border-2 border-red-400 flex wrap">
            {/* event cards render here */}
            <Link href="/events/1">
              <Card />
            </Link>
            <Link href="/events/1">
              <Card />
            </Link>
            <Link href="/events/1">
              <Card />
            </Link>
            <Link href="/events/1">
              <Card />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
