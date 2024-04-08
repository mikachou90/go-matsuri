"use client";
import EventCard from "../../components/EventCard";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getDb } from "../../utils/firebaseInit";
import { ref, onValue, update, get } from "firebase/database";

const Events = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentParams = {
    season: searchParams.get("season"),
    city: searchParams.get("city"),
  };

  // get all data from firebase
  const [eventsData, setEventsData] = useState({});
  const [newEventsArray, setNewEventsArray] = useState([]);

  const fetchData = () => {
    const db = getDb();
    const eventsRef = ref(db);
    onValue(
      eventsRef,
      (snapshot) => {
        const data = snapshot.val();
        setEventsData(data.events);

        // make id = key and transfer data to array
        const newArray = Object.keys(data.events).map((eventKey) => {
          return {
            ...data.events[eventKey],
            id: eventKey,
          };
        });

        setNewEventsArray(newArray);
      },

      {
        onlyOnce: true,
      }
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  // filter data
  const filteredData =
    newEventsArray?.filter((event) => {
      const seasonMatch =
        !currentParams.season || event.season === currentParams.season;
      const cityMatch =
        !currentParams.city || event.city === currentParams.city;
      return seasonMatch && cityMatch;
    }) ?? [];

  // render filter buttons
  let seasons = [];
  let cities = [];
  if (filteredData) {
    seasons = filteredData
      .map(({ season }) => season)
      .filter(
        (season, index, currentArray) => currentArray.indexOf(season) === index
      );
    cities = filteredData
      .map(({ city }) => city)
      .filter(
        (city, index, currentArray) => currentArray.indexOf(city) === index
      );
  } else {
    seasons = [];
    cities = [];
  }

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

  const favBtnHandler = async (e) => {
    const id = e.currentTarget.dataset.id;

    const db = getDb();
    const eventRef = ref(db, "events/" + id);

    const snapshot = await get(eventRef);
    if (snapshot.exists()) {
      const isMyFav = snapshot.val().isMyFav;

      await update(eventRef, { isMyFav: !isMyFav });
      await fetchData();
    } else {
      console.log("No such event!");
    }
  };

  return (
    <div id="eventPage">
      <section id="eventPageBanner">
        <div className="w-[70%] h-[60%] bg-white/80 p-2  rounded-xl flex flex-col justify-center items-center relative">
          <p className="font-bold text-xs sm:text-lg xl:text-2xl">
            為你的旅程增添更多色彩!
          </p>
          <h1 className="font-bold text-2xl py-1 sm:text-3xl sm:py-5 xl:text-5xl ">
            探索祭典
          </h1>
        </div>
      </section>

      <div id="layoutContainer">
        <section id="filterBtn" className="mb-10">
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
                        handleButtonClick({
                          city,
                          season: currentParams.season,
                        })
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
        </section>

        <section
          id="eventCards"
          className="mb-10 grid grid-cols-1 gap-8 justify-items-center md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 2xl:gap-12"
        >
          {filteredData?.length > 0 ? (
            filteredData.map((event) => {
              return (
                <li key={event.id} id={event.id} className="list-none">
                  <EventCard event={event} favBtnHandler={favBtnHandler} />
                </li>
              );
            })
          ) : (
            <div className="w-full h-10 text-xl font-bold mb:w-full">
              抱歉，目前尚未有這類慶典情報!
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Events;
