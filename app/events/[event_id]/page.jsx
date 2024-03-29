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
    <div className="mt-5">
      <div
        id={data.id}
        className="w-full flex flex-col items-center pt-[100px] pb-[50px] px-4"
      >
        <h1 className="font-bold text-xl mb-5 md:text-2xl lg:text-3xl ">
          {data.name}
        </h1>
        <div className="mb-5 flex gap-4 text-lg font-bold md:text-xl">
          <div className="w-[100px] text-white bg-red-400 flex justify-center p-1 rounded-lg ">
            <p className="truncate">{data.feature}</p>
          </div>
          <div className="w-[100px]  text-white bg-lime-500  flex justify-center p-1 rounded-lg ">
            <p>{data.city}</p>
          </div>
        </div>

        <div className="px-5 flex flex-col items-center  xl:flex-row xl:mt-5">
          <Image
            src={data.picture || "/pic_missing.png"}
            width={300}
            height={300}
            alt="event picture"
            className="sm:w-[500px] lg:w-[600]"
          />
          <div className="w-[300px] mt-[30px] font-bold text-lg sm:w-[500px] sm:text-xl lg:w-[600px] xl:ml-10">
            <p>名稱: {data.name}</p>
            <p>舉辦期間: {data.period}</p>
            <p>地點: {data.location}</p>
            <p>交通: {data.station}</p>
            <p className=" text-amber-600 ">
              <Link href={data.link || ""}>相關連結</Link>
            </p>
            <br />
            <p>
              簡介:
              <br /> {data.description}
            </p>
            <br />
            <p className="text-gray-400 lg:text-lg">
              本網站提供的情報僅供參考，實際舉辦日期與期間請以該祭典主辦單位公布為主。
            </p>
            <div className="w-full mt-5 p-2  flex justify-end text-gray-500 font-bold text-lg">
              <Link href="/" className="mx-2 hover:text-gray-800">
                回首頁
              </Link>
              <Link href="/events" className="mx-2 hover:text-gray-800">
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
