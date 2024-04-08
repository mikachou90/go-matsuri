import { GoHeart, GoHeartFill } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";

const EventCard = ({ event, favBtnHandler }) => {
  return (
    <div
      key={event.id}
      id={event.id}
      className="border-2 border-gray-200 w-[40vh] h-[60vh] p-1 rounded-lg relative hover:shadow-xl transition duration-300 ease-in-out cursor-pointer"
    >
      {/* {event.isMyFav ? (
        <GoHeartFill
          className="cardIcon"
          size={20}
          color="red"
          onClick={favBtnHandler}
          data-id={event.id}
        />
      ) : (
        <GoHeart
          className="cardIcon "
          size={20}
          onClick={favBtnHandler}
          data-id={event.id}
        />
      )} */}

      <Link href={`/events/${event.id}`}>
        {/* <div className="tag flex rounded-b-lg items-center justify-center">
          <p>{event.feature}</p>
        </div> */}
        <div className="w-full flex flex-col">
          <div className="w-full h-[30vh] relative">
            <Image
              src={event.picture || "/missing-pic.jpg"}
              alt="event picture"
              className="rounded-lg"
              fill
            />
          </div>

          <div className="flex flex-col mt-2">
            <p className="text-xs font-bold truncate ... md:text-base">
              {event.name}
            </p>
            <div className="w-full h-[15vh] py-1 text-clip overflow-hidden ...">
              <p className="text-xs md:text-base">{event.description}</p>
            </div>
          </div>
          <div className="border-t-[1px] border-stone-300 flex text-xs text-amber-500 mt-1 p-1 gap-1">
            <p>#{event.season}</p>
            <p>#{event.city}</p>
            <div className="w-full flex justify-end">
              {event.isMyFav ? (
                <GoHeartFill
                  size={20}
                  color="red"
                  onClick={favBtnHandler}
                  data-id={event.id}
                />
              ) : (
                <GoHeart size={20} onClick={favBtnHandler} data-id={event.id} />
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
