import matsuriData from "@/data/dummyData";
import Image from "next/image";
import Link from "next/link";

const Card = ({ data }) => {
  return (
    <>
      {data.map((event) => {
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
