"use client";
import { useState, useEffect } from "react";
import { getDb } from "@/utils/firebaseInit";
import { ref, onValue } from "firebase/database";
import EventCard from "@/components/EventCard";

const MyFavList = () => {
  const [eventData, setEventsData] = useState({});
  const [newEventsArray, setNewEventsArray] = useState([]);

  const renderFavBtn = () => {
    if (typeof window !== "undefined") {
      let favIdArrs = JSON.parse(localStorage.getItem("isFavId")) || [];
      return favIdArrs;
    }

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

  let favIdArray = JSON.parse(localStorage.getItem("isFavId")) || [];

  const myFavEvents = newEventsArray.filter((event) =>
    favIdArray.includes(event.id)
  );

  //移除清單btn
  function cancelBtnHandler(e) {
    const id = e.currentTarget.dataset.id;

    //將id刪除
    favIdArray = favIdArray.filter((favId) => favId !== id);
    localStorage.setItem("isFavId", JSON.stringify(favIdArray));

    //更新data
    setNewEventsArray((prevArray) =>
      prevArray.filter((event) => event.id !== id)
    );
  }

  return (
    <div className="py-10 px-20 mt-20">
      <h1 className="text-3xl font-bold mb-10">我的祭典</h1>
      <div className="mb-10 grid grid-cols-1 gap-8 justify-items-center md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 2xl:gap-12">
        {myFavEvents?.length > 0 ? (
          myFavEvents.map((event) => {
            return (
              <li key={event.id} id={event.id} className="list-none">
                <EventCard event={event} cancelBtnHandler={cancelBtnHandler} />
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
    </div>
  );
};

export default MyFavList;
