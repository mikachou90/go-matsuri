import EventList from "@/components/EventList";
import Link from "next/link";
import { getEvents } from "@/api/eventData";

const Events = async () => {
  const eventData = await getEvents();

  console.log("[events data]", eventData);

  return (
    <div className="py-10 px-20 mt-20">
      <div className="mb-10">
        <h1 className="text-3xl font-bold">祭典一覽</h1>

        <div
          className="mt-5 flex
        flex-col "
        >
          <p className="text-2xl mb-2">快速篩選</p>
          <div>
            <div className="mb-2 flex gap-4">
              <button className="btn-seasons">春天</button>
              <button className="btn-seasons">夏天</button>
              <button className="btn-seasons">秋天</button>
              <button className="btn-seasons">冬天</button>
            </div>
            <div className="flex gap-4">
              <button className="btn-city">東京</button>
              <button className="btn-city">大阪</button>
              <button className="btn-city">北海道</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" mb-10 grid grid-cols-1 gap-8 justify-items-center md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 2xl:gap-12">
          {eventData
            ? eventData.map((data) => {
                <Link key={data.id} href={`/events/${data.id}`}>
                  <EventList
                    id={data.id}
                    picture={data.picture}
                    title={data.name}
                    period={data.period}
                    location={data.location}
                    feature={data.feature}
                  />
                </Link>;
              })
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

export default Events;
