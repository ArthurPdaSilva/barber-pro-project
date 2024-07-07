import { getSchedules } from "@/lib/actions";
import { ScheduleClient } from "@/types";
import { ListItem } from "./ListItem";

export const List = async () => {
  const data = await getSchedules();

  return (
    <ul className="flex flex-col gap-2">
      {data.schedules.map((schedule: ScheduleClient) => (
        <ListItem key={schedule.id} client={schedule} />
      ))}
    </ul>
  );
};
