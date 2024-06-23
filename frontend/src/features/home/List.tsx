import Image from "next/image";

const List = () => {
  return (
    <ul className="flex  flex-col gap-2  ">
      <li className="bg-secondary flex flex-col text-white rounded p-4 gap-2 font-semibold sm:flex-row sm:justify-between sm:items-center ">
        <p className="flex items-center gap-6 ">
          <Image
            src="/person-sharp.svg"
            width={33}
            height={33}
            alt="User Icon"
          />
          Arthur Games
        </p>
        <p>Corte normal </p>
        <p className="mr-5">R$ 45.00</p>
      </li>
      <li className="bg-secondary flex flex-col text-white rounded p-4 gap-2 font-semibold sm:flex-row sm:justify-between sm:items-center ">
        <p className="flex items-center gap-6 ">
          <Image
            src="/person-sharp.svg"
            width={33}
            height={33}
            alt="User Icon"
          />
          Francis
        </p>
        <p>Corte e Barba </p>
        <p className="mr-5">R$ 70.00</p>
      </li>
      <li className="bg-secondary flex flex-col text-white rounded p-4 gap-2 font-semibold sm:flex-row sm:justify-between sm:items-center ">
        <p className="flex items-center gap-6 ">
          <Image
            src="/person-sharp.svg"
            width={33}
            height={33}
            alt="User Icon"
          />
          Edu
        </p>
        <p>Corte normal </p>
        <p className="mr-5">R$ 45.00</p>
      </li>
    </ul>
  );
};

export default List;
