import matsuriData from "@/data/dummyData";
import Image from "next/image";

const Card = () => {
  return (
    <>
      <div className="card-wrapper">
        <div>
          <Image
            src={matsuriData[0].picture}
            width={400}
            height={150}
            alt="event picture"
            className="w-[300px]"
          />
        </div>
        <div className="w-full py-4 flex flex-col items-center bg-white/50 absolute bottom-0 card-hover m">
          <p className="text-xl">{matsuriData[0].eventName}</p>
          <p className="text-xl">{matsuriData[0].period}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
