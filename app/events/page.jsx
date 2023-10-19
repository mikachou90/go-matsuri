import matsuriData from "@/data/dummyData";
import Image from "next/image";
import Card from "@/components/card";

const Events = () => {
  return (
    <div className="global-padding mt-20">
      <div>
        <h1 className="text-xl">祭典一覽</h1>
        <button>Sort</button>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default Events;
