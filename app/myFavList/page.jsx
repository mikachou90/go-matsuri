"use client";
import { useState, useEffect } from "react";
import { getDb } from "@/utils/firebaseInit";
import { ref, onValue } from "firebase/database";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

const MyFavList = () => {
  const [eventsData, setEventsData] = useState({});
  const [newEventsArray, setNewEventsArray] = useState([]);

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
      },
      {
        onlyOnce: true,
      }
    );
  }, []);

  let favIdArray = JSON.parse(localStorage.getItem("isFavId"));

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
                <div
                  key={event.id}
                  id={event.id}
                  className="bg-stone-200 w-[300px] h-[400px] rounded-lg flex flex-col justify-center items-center p-2 relative"
                >
                  <IoCloseOutline
                    className="cardIcon"
                    size={30}
                    data-id={event.id}
                    onClick={cancelBtnHandler}
                  />

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
            <p>
              尚未有任何祭典加入清單
              <br />
              趕快找尋你最愛的祭典吧!!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyFavList;
