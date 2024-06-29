"use client";
import { useState } from "react";
import { ListItem } from "./ListItem";
import { Modal } from "./Modal";

export type ScheduleClient = {
  id: string;
  name: string;
  type: string;
  price: number;
};

const fakeSchedule: ScheduleClient[] = [
  {
    id: "1",
    name: "João",
    type: "Corte normal",
    price: 25,
  },
  {
    id: "2",
    name: "Maria",
    type: "Corte normal",
    price: 25,
  },
  {
    id: "3",
    name: "José",
    type: "Corte normal",
    price: 25,
  },
  {
    id: "4",
    name: "Joana",
    type: "Corte normal",
    price: 25,
  },
];

const List = () => {
  const [open, setOpen] = useState(false);
  const [client, setClient] = useState<ScheduleClient | null>(null);

  const handleClose = () => {
    setOpen(!open);
  };

  const handleClick = (client: ScheduleClient) => {
    setClient(client);
    handleClose();
  };

  return (
    <>
      <Modal handleClose={handleClose} open={open} client={client} />
      <ul className="flex flex-col gap-2">
        {fakeSchedule.map((schedule) => (
          <ListItem
            key={schedule.id}
            client={schedule}
            handleClick={handleClick}
          />
        ))}
      </ul>
    </>
  );
};

export default List;
