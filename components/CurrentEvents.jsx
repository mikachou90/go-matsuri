"use client";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { getDb } from "../utils/firebaseInit";
import { ref, onValue } from "firebase/database";

export default function CurrentEvents() {
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
      {filteredData.length > 0 ? (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {filteredData?.map((event) => {
            return (
              <SwiperSlide key={event.key}>
                <li key={event.id} className="list-none m-auto">
                  <Link href={`/events/${event.id}`}>
                    <div className="card-wrapper">
                      <div className="image-wrapper">
                        <Image
                          src={
                            event.picture ? event.picture : "/missing-pic.jpg"
                          }
                          alt="event picture"
                          fill
                        />
                      </div>
                      <div className="py-2 sm:w-[40%] sm:px-2">
                        <p className="text-xl font-bold mb-1 md:text-2xl md:mb-2 lg:mb-5">
                          {event.name}
                        </p>
                        <div className="h-[5vh] text-clip overflow-hidden ... sm:h-[30vh]">
                          <p className=" text-lg md:text-xl  ">
                            {event.description}
                          </p>
                        </div>
                      </div>
                      <div className="absolute right-2 bottom-5">
                        <p className="text-lg bg-orange-800 text-white px-2 py-1 rounded ">
                          詳細
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : null}
    </>
  );
}
