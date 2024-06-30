import Link from "next/link";

type HeaderAddProps = {
  title: string;
  link: string;
};

export const HeaderAdd = ({ link, title }: HeaderAddProps) => {
  return (
    <div className="flex gap-4 mt-16 flex-wrap ">
      <Link
        href={link}
        className="text-white p-2 bg-gray-800 hover:bg-gray-900 rounded font-semibold transition-colors duration-200 text-xl "
      >
        {"<"} Voltar
      </Link>
      <h1 className="text-white font-semibold text-4xl">{title}</h1>
    </div>
  );
};
