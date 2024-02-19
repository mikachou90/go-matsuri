"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getDb } from "../utils/firebaseInit";
import { ref, onValue } from "firebase/database";

const Card = () => {
  const [eventsData, setEventsData] = useState({});

  // make id = key and transfer data to array
  const eventsArray = Object.keys(eventsData).map((eventKey) => {
    return {
      ...eventsData[eventKey],
      id: eventKey,
    };
  });

  useEffect(() => {
    const db = getDb();
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

  const currentMonth = new Date().getMonth();
  const seasonMap = [
    "winter",
    "winter",
    "spring",
    "spring",
    "spring",
    "summer",
    "summer",
    "summer",
    "autumn",
    "autumn",
    "autumn",
    "winter",
  ];
  const targetSeason = seasonMap[currentMonth];

  const filteredData = eventsArray
    .filter((item) => item.season === targetSeason)
    .slice(0, 4);

  return (
    <>
      {filteredData?.map((event) => {
        return (
          <li key={event.id} className="list-none">
            <Link href={`/events/${event.id}`}>
              <div className="card-wrapper">
                <div>
                  <Image
                    src={event.picture || "/pic_missing.png"}
                    width={400}
                    height={150}
                    alt="event picture"
                    className="w-[300px]"
                  />
                </div>
                <div className="w-full py-4 flex flex-col items-center bg-white/50 absolute bottom-0 card-hover m">
                  <p className="text-xl">{event.name}</p>
                  <p className="text-xl">{event.period}</p>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default Card;
