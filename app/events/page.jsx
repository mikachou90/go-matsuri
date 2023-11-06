import EventList from "@/components/EventList";
import { doGet } from "@/api/googleScriptApi/route";

const Events = async () => {
  const data = await doGet();
  console.log("[fetched data in events page]", data);

  return (
    <div>
      <EventList data={data} />
    </div>
  );
};

export default Events;
