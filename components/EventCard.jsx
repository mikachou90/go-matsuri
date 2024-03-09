import { GoHeart, GoHeartFill } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";

const EventCard = ({ event, favBtnHandler }) => {
  return (
    <>
      <div
        key={event.id}
        id={event.id}
        className="bg-stone-200 w-[250px] h-[350px] rounded-lg flex flex-col justify-center items-center p-2 relative hover:shadow-xl transition duration-300 ease-in-out cursor-pointer"
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
            <div className="w-[160px] h-[140px] relative mt-2">
              <Image
                src={event.picture || "/pic_missing.png"}
                alt="event picture"
                fill
              />
            </div>

            <div className="mt-5 flex flex-col items-center">
              <p className="text-xl font-bold text-center">{event.name}</p>

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
    </>
  );
};

export default EventCard;
