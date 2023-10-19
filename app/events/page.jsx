import matsuriData from "@/data/dummyData";
import Image from "next/image";
import EventList from "@/components/EventList";
import Link from "next/link";

const Events = () => {
  return (
    <div className="global-padding mt-20">
      <div className="mb-10">
        <h1 className="text-3xl ">祭典一覽</h1>
        <div className="mt-5 flex items-center">
          <p className="mr-5">分類</p>
          <div className="flex gap-5">
            <div className="flex gap-2">
              <button className="btn-seasons">春天</button>
              <button className="btn-seasons">夏天</button>
              <button className="btn-seasons">秋天</button>
              <button className="btn-seasons">冬天</button>
            </div>
            <div className="flex gap-2">
              <button className="btn-city">東京</button>
              <button className="btn-city">大阪</button>
              <button className="btn-city">北海道</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Link href="/events/1">
            <EventList />
          </Link>
          <Link href="/events/1">
            <EventList />
          </Link>
          <Link href="/events/1">
            <EventList />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;
