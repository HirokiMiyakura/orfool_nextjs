import Link from "next/link";
import { ReactNode } from "react";

interface MoreButtonProps {
  children: ReactNode;
  link: string;
}

export default function MoreButton({ children, link }: MoreButtonProps) {
  return (
    <Link href={link}>
      <div className="mx-auto mt-40 w-full bg-black px-0 py-4 text-center text-lg font-thin text-white duration-200 hover:bg-green-400 sm:w-4/5 sm:px-40 sm:py-7">
        {children}
      </div>
    </Link>
  );
}
