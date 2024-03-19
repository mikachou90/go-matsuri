"use client";
import { useState, useEffect } from "react";
import { getDb } from "../../utils/firebaseInit";
import { ref, onValue, get, update } from "firebase/database";
import EventCard from "../../components/EventCard";

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
    <div className="py-10 px-20 mt-20">
      <h1 className="text-3xl font-bold mb-10">我的祭典</h1>
      <div className="mb-10 grid grid-cols-1 gap-8 justify-items-center md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 2xl:gap-12">
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
    </div>
  );
};

export default MyFavList;
