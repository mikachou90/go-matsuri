"use client";

import Image from "next/image";
import Link from "next/link";

const EventList = ({ data }) => {
  console.log("[data in components]", data);
  return (
    <div className="py-10 px-20 mt-20">
      <div className="mb-10">
        <h1 className="text-3xl font-bold">祭典一覽</h1>

        <div
          className="mt-5 flex
        flex-col "
        >
          <p className="text-2xl mb-2">快速篩選</p>
          <div>
            <div className="mb-2 flex gap-4">
              <button className="btn-seasons">春天</button>
              <button className="btn-seasons">夏天</button>
              <button className="btn-seasons">秋天</button>
              <button className="btn-seasons">冬天</button>
            </div>
            <div className="flex gap-4">
              <button className="btn-city">東京</button>
              <button className="btn-city">大阪</button>
              <button className="btn-city">北海道</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" mb-10 grid grid-cols-1 gap-8 justify-items-center md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 2xl:gap-12">
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
                      <p className="text-xl font-bold text-center">
                        {event.name}
                      </p>
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
        </div>
      </div>
    </div>
  );
};

export default EventList;
