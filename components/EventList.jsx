"use client";
import Image from "next/image";
import Link from "next/link";

const EventList = ({ data }) => {
  console.log("[data in components]", data);
  return (
    <>
      {data.map((event) => {
        return (
          <div
            key={event.id}
            className="bg-stone-200 w-[300px] h-[400px] rounded-lg flex flex-col justify-center items-center"
          >
            <Image
              src={event.picture || "/pic_missing.png"}
              width={200}
              height={80}
              alt="event picture"
            />
            <div className="mt-5 flex flex-col items-center text-2xl">
              <p>{event.name}</p>
              <p>{event.location}</p>
              <p>{event.period}</p>
            </div>
            <div className="text-xl flex bg-red-400 text-white mt-2">
              <p className="">{event.feature}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default EventList;
