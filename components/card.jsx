import matsuriData from "@/data/dummyData";
import Image from "next/image";

const Card = () => {
  return (
    <>
      <div className="card-wrapper">
        <div>
          <Image
            src={matsuriData[0].picture}
            width={300}
            height={150}
            alt="event picture"
          />
        </div>
        <div className="w-full py-2 flex flex-col items-center bg-white/50 absolute bottom-0 z-10 card-hover">
          <p>{matsuriData[0].eventName}</p>
          <p>{matsuriData[0].period}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
