import { GoHeart, GoHeartFill } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";

const EventCard = ({ event, favBtnHandler, deleteHandler }) => {
  return (
    <>
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
            onClick={event.isMyFav ? deleteHandler : favBtnHandler}
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
