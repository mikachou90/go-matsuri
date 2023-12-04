"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getDb } from "@/utils/firebaseInit";
import { ref, onValue } from "firebase/database";
import { GoHeart, GoHeartFill } from "react-icons/go";

const EventList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentParams = {
    season: searchParams.get("season"),
    city: searchParams.get("city"),
  };

  // get all data from firebase
  const [eventsData, setEventsData] = useState({});
  const [newEventsArray, setNewEventsArray] = useState([]);

  const renderFavBtn = () => {
    let favIdArrs = JSON.parse(localStorage.getItem("isFavId")) || [];

    setNewEventsArray((preArray) =>
      preArray.map((event) =>
        favIdArrs.includes(event.id) ? { ...event, isMyFav: true } : event
      )
    );
  };

  useEffect(() => {
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
            isMyFav: false,
          };
        });
        setNewEventsArray(newArray);
        renderFavBtn();
      },

      {
        onlyOnce: true,
      }
    );
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

  // add to fav list button
  const favBtnHandler = (e) => {
    const id = e.currentTarget.dataset.id;

    // 將喜歡的event id暫存進localStorage
    let favIdArray = JSON.parse(localStorage.getItem("isFavId")) || [];
    console.log({ favIdArray });

    if (favIdArray.includes(id)) {
      favIdArray = favIdArray.filter((favId) => favId !== id);
    } else {
      favIdArray.push(id);
    }

    let favIdStr = JSON.stringify(favIdArray);
    localStorage.setItem("isFavId", favIdStr);
    console.log({ favIdStr });
    setNewEventsArray((preArray) =>
      preArray.map((event) =>
        event.id === id ? { ...event, isMyFav: !event.isMyFav } : event
      )
    );
  };

  return (
    <>
      <div className="mb-10">
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
                <li key={event.id} id={event.id} className="list-none">
                  <div
                    key={event.id}
                    id={event.id}
                    className="bg-stone-200 w-[300px] h-[400px] rounded-lg flex flex-col justify-center items-center p-2 relative"
                  >
                    {event.isMyFav ? (
                      <GoHeartFill
                        className="cardIcon "
                        size={25}
                        color="red"
                        onClick={favBtnHandler}
                        data-id={event.id}
                      />
                    ) : (
                      <GoHeart
                        className="cardIcon "
                        size={25}
                        onClick={favBtnHandler}
                        data-id={event.id}
                      />
                    )}

                    <Link href={`/events/${event.id}`}>
                      <div className="tag flex rounded-b-lg items-center justify-center">
                        <p>{event.feature}</p>
                      </div>
                      <div className="flex flex-col items-center">
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
                        <div className="flex justify-center gap-2">
                          <div className="text-sm p-2 rounded-lg flex bg-amber-500 text-white mt-2">
                            <p className="">{event.season}</p>
                          </div>
                          <div className="text-sm p-2 rounded-lg flex bg-lime-500 text-white mt-2">
                            <p>{event.city}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
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
