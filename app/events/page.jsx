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
  const [newEventsArray, setNewEventsArray] = useState([]);

  const fetchData = () => {
    const db = getDb();
    const eventsRef = ref(db);
    onValue(
      eventsRef,
      (snapshot) => {
        const data = snapshot.val();

        // make id = key and transfer data to new array
        const newArray = Object.keys(data.events).map((eventKey) => {
          return {
            ...data.events[eventKey],
            id: eventKey,
          };
        });

        console.log("data", data);
        console.log("newArray", newArray);
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
            className="my-5 py-2 flex
        flex-col items-center"
          >
            <div>
              <h1 className="text-lg font-bold">分類篩選</h1>
              <p></p>
            </div>

            <div className="w-full bg-stone-100 rounded-lg shadow-md md:w-[60%]">
              <div id="btnWrapper">
                <p className="font-bold">季節:</p>
                {seasons.map((season) => (
                  <button
                    key={season}
                    className={`btn ${
                      currentParams.season === season ? "activeBtn" : ""
                    }`}
                    onClick={() =>
                      handleButtonClick({ season, city: currentParams.city })
                    }
                  >
                    {season}
                  </button>
                ))}
              </div>
              <div id="btnWrapper">
                <p className="font-bold">城市:</p>
                <div></div>
                {cities.map((city) => (
                  <button
                    key={city}
                    className={` btn ${
                      currentParams.city === city ? "activeBtn" : ""
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
            <div className="mt-3">
              <button
                className="btn"
                onClick={() => handleButtonClick({ clear: true })}
              >
                重設
              </button>
            </div>
          </div>
        </section>

        <section
          id="eventCards"
          className="mb-10 grid grid-cols-2 gap-5 justify-items-center md:grid-cols-3 md:gap-8 xl:grid-cols-4 2xl:grid-cols-5"
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
