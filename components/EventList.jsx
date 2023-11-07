"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const EventList = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [activeData, setActiveData] = useState("");

  const filterDataByKeyword = (keyword, category) => {
    const filteredEvent = data.filter((event) =>
      category === "seasons"
        ? event.seasons.includes(keyword)
        : event.city.includes(keyword)
    );
    setFilteredData(filteredEvent);
    setActiveData(keyword);
  };

  return (
    <div className="py-10 px-20 mt-20">
      <div className="mb-10">
        <h1 className="text-3xl font-bold">祭典一覽</h1>

        <div
          className="mt-5 flex
        flex-col "
        >
          <div className="text-2xl mb-5 flex items-center">
            快速篩選&nbsp;
            <p className=" text-3xl font-bold p-2 rounded-lg">{activeData}</p>
          </div>
          <div>
            <div className="mb-2 flex gap-4">
              <button
                className={`btn-seasons border-2 border-amber-500 ${
                  activeData === "春天" ? "activeSeasonBtn" : ""
                }`}
                onClick={() => filterDataByKeyword("春天", "seasons")}
              >
                春天
              </button>
              <button
                className={`btn-seasons border-2 border-amber-500 ${
                  activeData === "夏天" ? "activeSeasonBtn" : ""
                }`}
                onClick={() => filterDataByKeyword("夏天", "seasons")}
              >
                夏天
              </button>
              <button
                className={`btn-seasons border-2 border-amber-500 ${
                  activeData === "秋天" ? "activeSeasonBtn" : ""
                }`}
                onClick={() => filterDataByKeyword("秋天", "seasons")}
              >
                秋天
              </button>
              <button
                className={`btn-seasons border-2 border-amber-500 ${
                  activeData === "冬天" ? "activeSeasonBtn" : ""
                }`}
                onClick={() => filterDataByKeyword("冬天", "seasons")}
              >
                冬天
              </button>
            </div>
            <div className="flex gap-4">
              <button
                className={`btn-city border-2 border-lime-500 ${
                  activeData === "東京" ? "activeCityBtn" : ""
                }`}
                onClick={() => filterDataByKeyword("東京", "city")}
              >
                東京
              </button>
              <button
                className={`btn-city border-2 border-lime-500 ${
                  activeData === "大阪" ? "activeCityBtn" : ""
                }`}
                onClick={() => filterDataByKeyword("大阪", "city")}
              >
                大阪
              </button>
              <button
                className={`btn-city border-2 border-lime-500 ${
                  activeData === "北海道" ? "activeCityBtn" : ""
                }`}
                onClick={() => filterDataByKeyword("北海道", "city")}
              >
                北海道
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" mb-10 grid grid-cols-1 gap-8 justify-items-center md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 2xl:gap-12">
          {filteredData.length > 0 ? (
            filteredData.map((event) => {
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

                        <p className="text-lg">{event.period}</p>
                      </div>
                      <div className="flex gap-2">
                        <div className="text-sm p-2 rounded-lg flex bg-red-400 text-white mt-2">
                          <p className="">{event.feature}</p>
                        </div>
                        <div className="text-sm p-2 rounded-lg flex bg-cyan-500 text-white mt-2">
                          <p>{event.city}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })
          ) : (
            <div className="w-full h-10 text-xl font-bold mb:w-full">
              抱歉，目前尚未有這類慶典情報!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventList;
