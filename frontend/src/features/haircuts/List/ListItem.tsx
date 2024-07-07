import { HaircutType } from "@/types";
import Image from "next/image";
import Link from "next/link";

type ListItemProps = {
  haircutType: HaircutType;
};

export const ListItem = ({ haircutType }: ListItemProps) => {
  return (
    <Link href={`/haircuts/${haircutType.id}`}>
      <li className="bg-secondary flex flex-col text-white rounded p-4 gap-2 font-semibold sm:flex-row sm:justify-between sm:items-center cursor-pointer">
        <span className="flex items-center gap-6">
          <Image src="/pricetag.svg" width={33} height={33} alt="price tag" />
          {haircutType.name}
        </span>
        <span
          className={
            haircutType.price > 0
              ? " mr-5 text-green-500"
              : " mr-5 text-red-500"
          }
        >
          R${haircutType.price.toFixed(2)}
        </span>
      </li>
    </Link>
  );
};
