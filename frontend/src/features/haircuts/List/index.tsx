import { getHaicuts } from "@/lib/actions";
import { HaircutType } from "@/types";
import { ListItem } from "./ListItem";

export const List = async () => {
  const data = await getHaicuts();

  return (
    <ul className="flex flex-col gap-2">
      {data.haircutTypes.map((haircut: HaircutType) => (
        <ListItem key={haircut.id} haircutType={haircut} />
      ))}
    </ul>
  );
};
