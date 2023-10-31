import EventList from "@/components/EventList";
import { getEvents } from "@/api/events/route";

const Events = async () => {
  const data = await getEvents();
  console.log("[fetched data in events page]", data);

  return (
    <div>
      <EventList data={data} />
    </div>
  );
};

export default Events;
