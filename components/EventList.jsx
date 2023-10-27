"use client";
import Image from "next/image";
import Link from "next/link";

const EventList = ({ data }) => {
  console.log("[data in components]", data);
  return (
    <>
      {data.map((event) => {
        return (
          <li key={event.id} className="list-none">
            <Link href={`/events/${event.id}`}>
              <div
                key={event.id}
                className="bg-stone-200 w-[300px] h-[400px] rounded-lg flex flex-col justify-center items-center p-2"
              >
                <Image
                  src={event.picture || "/pic_missing.png"}
                  width={200}
                  height={80}
                  alt="event picture"
                />
                <div className="mt-5 flex flex-col items-center">
                  <p className="text-xl font-bold text-center">{event.name}</p>
                  <p className="text-lg">{event.location}</p>
                  <p className="text-lg">{event.period}</p>
                </div>
                <div className="text-sm p-2 rounded-lg flex bg-red-400 text-white mt-2">
                  <p className="">{event.feature}</p>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default EventList;
