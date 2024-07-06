"use client";
import { ScheduleClient } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "../Modal";

type ListItemProps = {
  client: ScheduleClient;
};

export const ListItem = ({ client }: ListItemProps) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (client: ScheduleClient) => {
    setOpen(true);
  };

  return (
    <>
      <Modal handleClose={handleClose} open={open} client={client} />
      <li
        className="bg-secondary flex flex-col text-white rounded p-4 gap-2 font-semibold sm:flex-row sm:justify-between sm:items-center cursor-pointer"
        onClick={() => handleClick(client)}
      >
        <span className="flex items-center gap-6 w-52">
          <Image
            src="/person-sharp-active.svg"
            width={33}
            height={33}
            alt="User Icon"
          />
          {client.name}
        </span>
        <span className="uppercase">{client.type}</span>
        <span
          className={
            client.price > 0 ? " mr-5 text-green-500" : " mr-5 text-red-500"
          }
        >
          R${client.price.toFixed(2)}
        </span>
      </li>
    </>
  );
};
