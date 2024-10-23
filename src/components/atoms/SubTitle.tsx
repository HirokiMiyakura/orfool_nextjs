import { ReactNode } from "react";

interface SubTitleProps {
  children: ReactNode;
}

export default function SubTitle({ children }: SubTitleProps) {
  return (
    <p className="shippori-mincho mb-7 text-xl font-extrabold sm:mb-10 sm:text-4xl">
      {children}
    </p>
  );
}
