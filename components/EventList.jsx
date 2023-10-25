import Image from "next/image";

const EventList = ({ id, picture, title, period, location, feature }) => {
  return (
    <>
      <div
        id={id}
        className="bg-stone-200 w-[300px] h-[380px] rounded-lg flex flex-col justify-center items-center"
      >
        <Image src={picture} width={250} height={80} alt="event picture" />
        <div className="mt-5 flex flex-col items-center text-2xl">
          <p>{title}</p>
          <p>{location}</p>
          <p>{period}</p>
        </div>
        <div className="text-xl flex bg-red-400 text-white mt-2">
          <p className="">{feature}</p>
        </div>
      </div>
    </>
  );
};

export default EventList;
