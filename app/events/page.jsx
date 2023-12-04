import EventList from "@/components/EventList";

const Events = async () => {
  return (
    <div className="py-10 px-20 mt-20">
      <h1 className="text-3xl font-bold">祭典一覽</h1>
      <EventList />
    </div>
  );
};

export default Events;
