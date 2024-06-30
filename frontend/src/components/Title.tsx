import Link from "next/link";

type TitleProps = {
  title: string;
  link: string;
};

export const Title = ({ link, title }: TitleProps) => {
  return (
    <div className="flex gap-4 mt-16 flex-wrap ">
      <h1 className="text-white font-semibold text-4xl">{title}</h1>
      <Link
        href={link}
        className="text-white p-2 text-xl bg-gray-800 hover:bg-gray-900 rounded font-semibold transition-colors duration-200 "
      >
        Adicionar
      </Link>
    </div>
  );
};
