"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { db } from "@/utils/firebaseInit";
import { ref, onValue } from "firebase/database";

const EventList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentParams = {
    season: searchParams.get("season"),
    city: searchParams.get("city"),
  };

  // get all data from firebase
  const [eventsData, setEventsData] = useState({});
  // make id = key and transfer data to array
  const eventsArray = Object.keys(eventsData).map((eventKey) => {
    return {
      ...eventsData[eventKey],
      id: eventKey,
    };
  });

  // render buttons
  const seasons = eventsArray
    .map(({ season }) => season)
    .filter(
      (season, index, currentArray) => currentArray.indexOf(season) === index
    );

  const cities = eventsArray
    .map(({ city }) => city)
    .filter(
      (city, index, currentArray) => currentArray.indexOf(city) === index
    );

  useEffect(() => {
    const eventsRef = ref(db);
    onValue(
      eventsRef,
      (snapshot) => {
        const data = snapshot.val();
        setEventsData(data.events);
      },
      {
        onlyOnce: true,
      }
    );
  }, []);

  //buttons function
  const handleButtonClick = ({ season, city, clear } = {}) => {
    if (clear) {
      //clean all
      return router.push(`/events`);
    }

    const searchParams = new URLSearchParams();

    if (season) {
      searchParams.append("season", season);
    }
    if (city) {
      searchParams.append("city", city);
    }

    return router.push(`/events?${searchParams.toString()}`);
  };

  // filter data
  const filteredData = eventsArray?.filter((event) => {
    const seasonMatch =
      !currentParams.season || event.season === currentParams.season;
    const cityMatch = !currentParams.city || event.city === currentParams.city;
    return seasonMatch && cityMatch;
  });

  return (
    <>
      <div className="mb-10">
        <h1 className="text-3xl font-bold">祭典一覽</h1>

        <div
          className="mt-5 flex
        flex-col "
        >
          <div className="text-2xl mb-5 flex items-center">快速篩選</div>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <div>
              <div className="mb-2 grid grid-cols-3 gap-3  sm:grid-cols-4 lg:gap-3">
                {seasons.map((season) => (
                  <button
                    key={season}
                    className={`btn border-2 border-amber-500 hover:bg-amber-500 hover:text-white ${
                      currentParams.season === season ? "activeSeasonBtn" : ""
                    }`}
                    onClick={() =>
                      handleButtonClick({ season, city: currentParams.city })
                    }
                  >
                    {season}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-1 grid-rows-3 mb-2 sm:grid-cols-4 sm:gird-rows-2 lg:grid-rows-1 lg:grid-cols-6 lg:gap-3">
                {cities.map((city) => (
                  <button
                    key={city}
                    className={` btn hover:bg-lime-500 hover:text-white border-2 border-lime-500 ${
                      currentParams.city === city ? "activeCityBtn" : ""
                    }`}
                    onClick={() =>
                      handleButtonClick({ city, season: currentParams.season })
                    }
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <button
                className="w-[85px] h-[45px] btn hover:bg-zinc-500 hover:text-white  border-2 border-zinc-500 "
                onClick={() => handleButtonClick({ clear: true })}
              >
                重設
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-10 grid grid-cols-1 gap-8 justify-items-center md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 2xl:gap-12">
          {filteredData?.length > 0 ? (
            filteredData.map((event) => {
              return (
                <li key={event.id} className="list-none">
                  <Link href={`/events/${event.id}`}>
                    <div
                      key={event.id}
                      className="bg-stone-200 w-[300px] h-[400px] rounded-lg flex flex-col justify-center items-center p-2 relative"
                    >
                      <div className="tag flex rounded-b-lg items-center justify-center">
                        <p>{event.feature}</p>
                      </div>
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
                        <div className="text-sm p-2 rounded-lg flex bg-amber-500 text-white mt-2">
                          <p className="">{event.season}</p>
                        </div>
                        <div className="text-sm p-2 rounded-lg flex bg-lime-500 text-white mt-2">
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
    </>
  );
};

export default EventList;
