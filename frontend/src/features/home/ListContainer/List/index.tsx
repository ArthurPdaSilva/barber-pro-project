import { ScheduleClient } from "@/types";
import { ListItem } from "./ListItem";

async function getSchedules() {
  const response = await fetch("http://localhost:3001/schedules");
  const data = await response.json();
  return data;
}

type ListProps = {
  handleClick: (client: ScheduleClient) => void;
};

export const List = async ({ handleClick }: ListProps) => {
  const data = await getSchedules();

  return (
    <ul className="flex flex-col gap-2">
      {data.schedules.map((schedule: ScheduleClient) => (
        <ListItem
          key={schedule.id}
          client={schedule}
          handleClick={handleClick}
        />
      ))}
    </ul>
  );
};
