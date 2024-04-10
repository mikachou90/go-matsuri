import { GoHeart, GoHeartFill } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";

const EventCard = ({ event, favBtnHandler }) => {
  return (
    <div
      key={event.id}
      id={event.id}
      className="w-[40vh] h-[60vh] p-1 rounded-lg relative eventCardWrapper"
    >
      <Link href={`/events/${event.id}`}>
        <div className="tag">
          <p>{event.feature}</p>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full h-[30vh] relative overflow-hidden">
            <Image
              src={event.picture || "/missing-pic.jpg"}
              alt="event picture"
              className="cardImg"
              fill
            />
          </div>

          <div className="flex flex-col my-2">
            <p className="text-xs font-bold truncate ... md:text-sm">
              {event.name}
            </p>
            <div className="w-full h-[15vh] py-1 text-clip overflow-hidden ...">
              <p className="text-xs md:text-sm">{event.description}</p>
            </div>
          </div>
        </div>
      </Link>
      <div className="border-t-[1px] border-stone-300 flex text-xs text-stone-400 mt-1 p-1 gap-1">
        <p>#{event.season}</p>
        <p>#{event.city}</p>
        <div className="w-full flex justify-end">
          {event.isMyFav ? (
            <GoHeartFill
              size={20}
              color="red"
              onClick={favBtnHandler}
              data-id={event.id}
              className="cursor-pointer"
            />
          ) : (
            <GoHeart
              size={20}
              onClick={favBtnHandler}
              data-id={event.id}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
