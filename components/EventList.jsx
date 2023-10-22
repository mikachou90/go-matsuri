import Image from "next/image";
import matsuriData from "@/data/dummyData";

const EventList = () => {
  return (
    <>
      {/* <div className="p-5 h-200 bg-stone-200 grid grid-cols-7 mb-5 ">
        <div className="flex items-center justify-center ">
          <Image
            src={matsuriData[0].picture}
            width={300}
            height={150}
            alt="event picture"
          />
        </div>
        <div className="flex items-center justify-center">
          <p>{matsuriData[0].eventName}</p>
        </div>
        <div className="flex items-center justify-center">
          <p>{matsuriData[0].period}</p>
        </div>
        <div className="flex items-center justify-center">
          <p>{matsuriData[0].location}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>{matsuriData[0].feature[0]}</p>

          <p>{matsuriData[0].feature[1]}</p>
        </div>
        <div className="flex items-center justify-center col-span-2">
          <p>{matsuriData[0].description}</p>
        </div>
      </div> */}

      <div className="bg-stone-200 w-[400px] h-[450px] rounded-lg flex flex-col justify-center items-center">
        <Image
          src={matsuriData[0].picture}
          width={350}
          height={80}
          alt="event picture"
        />
        <div className="mt-5 flex flex-col items-center text-xl">
          <p>{matsuriData[0].eventName}</p>
          <p>{matsuriData[0].location}</p>
          <p>{matsuriData[0].period}</p>
        </div>
        <div className="text-lg flex bg-red-400 text-white mt-2">
          <p className="mx-2">{matsuriData[0].feature[0]}</p>
          <p className="mx-2">{matsuriData[0].feature[1]}</p>
        </div>
      </div>
    </>
  );
};

export default EventList;
