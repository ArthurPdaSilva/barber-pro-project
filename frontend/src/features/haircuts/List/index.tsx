import { HaircutType } from "@/types";
import { ListItem } from "./ListItem";

async function getHaicuts() {
  const response = await fetch("http://localhost:3001/haircuts");
  const data = await response.json();
  return data;
}

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
