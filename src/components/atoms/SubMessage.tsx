import { ReactNode } from "react";

interface SubMessageProps {
  children: ReactNode;
}

export default function SubMessage({ children }: SubMessageProps) {
  return <p className="mt-8 text-xl font-thin sm:text-3xl">{children}</p>;
}
