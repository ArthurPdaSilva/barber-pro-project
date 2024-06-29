import Image from "next/image";
import { ScheduleClient } from ".";

type ModalProps = {
  client: ScheduleClient | null;
  open: boolean;
  handleClose: () => void;
};

export const Modal = ({ client, handleClose, open }: ModalProps) => {
  if (!client) return;

  return (
    <div
      className={`absolute flex inset-0 bg-black z-50 bg-opacity-40 ${
        open ? "flex" : "hidden"
      } `}
    >
      <div className="flex flex-col bg-secondary p-4 gap-4 w-3/12 m-auto rounded">
        <h1 className="text-white text-2xl font-semibold">Próximo</h1>
        <ul>
          <li className="bg-secondary flex p-1 text-white gap-5 text-lg w-full">
            <Image
              height={30}
              width={30}
              src="/person-sharp-active.svg"
              alt="User Icon"
            />
            {client.name}
          </li>
          <li className="bg-secondary flex p-1 text-white gap-5 text-lg w-full">
            <Image
              height={30}
              width={30}
              src="/scissors.svg"
              alt="Scissor Icon"
            />
            {client.type}
          </li>
          <li className="bg-secondary flex p-1 text-white gap-5 text-lg w-full">
            <Image height={30} width={30} src="/money.svg" alt="Money Icon" />
            <span
              className={
                client.price > 0 ? " mr-5 text-green-500" : " mr-5 text-red-500"
              }
            >
              R${client.price.toFixed(2)}
            </span>
          </li>
        </ul>
        <button
          className="bg-terciary text-white font-bold p-2 rounded"
          onClick={handleClose}
        >
          Finalizar Serviço
        </button>
      </div>
    </div>
  );
};
