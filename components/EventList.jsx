"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import matsuriData from "@/data/dummyData";
import { getEvent } from "@/api/eventData";

const EventList = () => {
  // Get event data
  useEffect(() => {
    const getEventData = async () => {
      try {
        const data = await getEvent();
        console.log("[event datas]", data.values);
      } catch (error) {
        throw error;
      }
    };
    getEventData();
  }, []);

  return (
    <>
      <div className="bg-stone-200 w-[300px] h-[380px] rounded-lg flex flex-col justify-center items-center">
        <Image
          src={matsuriData[0].picture}
          width={250}
          height={80}
          alt="event picture"
        />
        <div className="mt-5 flex flex-col items-center text-2xl">
          <p>{matsuriData[0].eventName}</p>
          <p>{matsuriData[0].location}</p>
          <p>{matsuriData[0].period}</p>
        </div>
        <div className="text-xl flex bg-red-400 text-white mt-2">
          <p className="mx-2">{matsuriData[0].feature[0]}</p>
          <p className="mx-2">{matsuriData[0].feature[1]}</p>
        </div>
      </div>
    </>
  );
};

export default EventList;
