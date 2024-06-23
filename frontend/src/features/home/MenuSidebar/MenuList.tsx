import Image from "next/image";
import Link from "next/link";

type MenuListProps = {
  isOpen: boolean;
};

const MenuList = ({ isOpen }: MenuListProps) => {
  return (
    <ul
      className={`absolute left-0 flex-col gap-5 mr-20 transform transition-transform duration-200 ${
        isOpen ? "translate-y-24 opacity-100" : "translate-y-0 opacity-0"
      } sm:flex w-full sm:relative sm:opacity-100 sm:translate-y-0`}
    >
      <Link href="/">
        <li className="bg-secondary flex p-1 text-white gap-5 text-lg w-full">
          <Image
            height={20}
            width={20}
            src="/scissors.svg"
            alt="Scissor Icon"
          />
          Agenda
        </li>
      </Link>

      <Link href="/haircuts">
        <li className="bg-secondary flex p-1 text-white gap-5 text-lg w-full">
          <Image
            height={20}
            width={20}
            src="/clipboard.svg"
            alt="Clipboard Icon"
          />
          Cortes
        </li>
      </Link>

      <Link href="/settings">
        <li className="bg-secondary flex p-1 text-white gap-5 text-lg w-full">
          <Image
            height={20}
            width={20}
            src="/settings.svg"
            alt="Settings Icon"
          />
          Minha Conta
        </li>
      </Link>
    </ul>
  );
};

export default MenuList;
