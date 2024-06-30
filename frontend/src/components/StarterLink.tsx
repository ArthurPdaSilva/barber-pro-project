import Link from "next/link";

type StarterLinkProps = {
  href: string;
  text: string;
  textLink: string;
};

export const StarterLink = ({ href, text, textLink }: StarterLinkProps) => {
  return (
    <p className="text-white">
      {text}{" "}
      <Link className="text-gray-500" href={href}>
        {textLink}
      </Link>
    </p>
  );
};
