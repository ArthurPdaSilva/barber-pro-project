"use client";
import { ScheduleClient } from "@/types";
import { useState } from "react";
import { List } from "./List";
import { Modal } from "./Modal";

export const ListContainer = () => {
  const [open, setOpen] = useState(false);
  const [client, setClient] = useState<ScheduleClient | null>(null);

  const handleClose = () => {
    setOpen(!open);
  };

  const handleClick = (client: ScheduleClient) => {
    console.log(client);
    setClient(client);
    handleClose();
  };

  return (
    <>
      <Modal handleClose={handleClose} open={open} client={client} />
      <List handleClick={handleClick} />
    </>
  );
};
