"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getDb } from "../../utils/firebaseInit";
import { ref, onValue, get, update } from "firebase/database";
import EventCard from "../../components/EventCard";
import { GoSearch } from "react-icons/go";

const MyFavList = () => {
  const [eventData, setEventsData] = useState({});
  const [newEventsArray, setNewEventsArray] = useState([]);
  const [favEvents, setFavEvents] = useState([]);

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

  useEffect(() => {
    if (newEventsArray.length > 0) {
      const favList = newEventsArray.filter((event) => event.isMyFav === true);
      setFavEvents(favList);
    }
  }, [newEventsArray]);

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
    <div id="myFavListPage">
      <section id="myFavPageBanner">
        <div className="w-[70%] h-[60%] bg-white/80 p-2  rounded-xl flex flex-col justify-center items-center relative">
          <p className="font-bold text-xs sm:text-lg xl:text-2xl">
            把所有喜歡的祭典都放進這裡吧！
          </p>
          <h1 className="font-bold text-2xl py-1 sm:text-3xl sm:py-5 xl:text-5xl ">
            我的祭典清單
          </h1>
        </div>
      </section>

      <section id="layoutContainer" className="mb-10">
        <div className="flex justify-center my-10">
          <p className="font-bold text-lg">祭典清單</p>
        </div>
        <div className=" rounded-xl grid grid-cols-1 gap-8 justify-items-center md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 2xl:gap-12">
          {favEvents?.length > 0 ? (
            favEvents.map((event) => {
              return (
                <li key={event.id} id={event.id} className="list-none">
                  <EventCard event={event} favBtnHandler={favBtnHandler} />
                </li>
              );
            })
          ) : (
            <div className="w-full h-10 text-xl font-bold mb:w-full">
              尚未有任何祭典加入清單中，
              <br />
              趕快找尋你最愛的祭典吧!
            </div>
          )}
        </div>
      </section>
      <Link
        href="events"
        className="flex items-center justify-center text-base font-bold cursor-pointer hover:text-amber-500 transition-all duration-300 ease-in-out"
      >
        <GoSearch />
        <p className="ml-1">回到探索祭典</p>
      </Link>
    </div>
  );
};

export default MyFavList;
