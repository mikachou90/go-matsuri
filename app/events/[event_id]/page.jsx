"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getDb } from "../../../utils/firebaseInit";
import { ref, onValue } from "firebase/database";
import Link from "next/link";

const Event = ({ params }) => {
  const eventId = params.event_id;

  // get all data from firebase
  const [data, setData] = useState({});

  useEffect(() => {
    const db = getDb();
    const eventsRef = ref(db, `/events/${eventId}`);
    onValue(
      eventsRef,
      (snapshot) => {
        const data = snapshot.val();
        setData(data);
      },
      {
        onlyOnce: true,
      }
    );
  }, [eventId]);

  return (
    <div id="layoutContainer" className="mt-20">
      <div
        id={data.id}
        className="w-full flex flex-col items-center py-5 text-stone-600"
      >
        <h1 className="border-b-[2px] border-amber-500 font-bold text-lg mb-4 lg:text-xl xl:text-2xl ">
          {data.name}
        </h1>
        <div className="mb-5 text-stone-400 font-bold flex gap-3 items-center justify-center text-sm md:text-base">
          <p className="border-[1px] border-amber-500 py-1 px-2 text-amber-500 ">
            {data.feature}
          </p>
          <p className="truncate">#{data.season}</p>
          <p>#{data.city}</p>
        </div>

        <div className="w-full p-5 flex flex-col items-center  lg:flex-row lg:mt-5">
          <div className="relative w-full h-[40vh] md:h-[30vh] lg:w-[50%] lg:h-[60vh] lg:mx-2">
            <Image
              src={data.picture || "/missing-pic.jpg"}
              alt="event picture"
              className="object-cover"
              fill
            />
          </div>

          <div className="py-5 w-full text-sm md:text-base lg:w-[50%] lg:h-[60vh]">
            <div className="bg-amber-200 p-5 rounded-lg text-center leading-6">
              <p>
                {data.description}
                <br />
              </p>
            </div>
            <br />
            <div className="h-[25vh] flex flex-col justify-around  ">
              <div className="flex py-1 border-b-[2px] border-amber-200">
                <p className="mx-5">日期</p>
                <p>{data.period}</p>
              </div>
              <div className="flex py-1 border-b-[2px] border-amber-200">
                <p className="mx-5">地點</p>
                <p>{data.location}</p>
              </div>
              <div className="flex py-1  border-b-[2px] border-amber-200">
                <p className="mx-5">交通</p>
                <p>{data.station}</p>
              </div>

              <p className="py-1 mx-5 text-amber-500 ">
                <Link href={data.link || ""}>相關連結</Link>
              </p>
            </div>
            <br />
            <p className="text-stone-400 text-xs lg:text-base">
              本網站提供的情報僅供參考，實際舉辦日期與期間請以該祭典主辦單位公布為主。
            </p>
            <div className="w-full mt-10 flex justify-end font-bold text-white text-xs lg:text-base">
              <Link
                href="/"
                className="mx-2 py-1 px-2 bg-stone-400 rounded-md hover:bg-stone-500"
              >
                回首頁
              </Link>
              <Link
                href="/events"
                className="mx-2 py-1 px-2 bg-stone-400 rounded-md hover:bg-stone-500"
              >
                回一覽表
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
