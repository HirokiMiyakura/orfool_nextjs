import { ReactNode } from "react";

interface LinkButtonProps {
  src: string;
  children: ReactNode;
}

export default function LinkButton({ children, src }: LinkButtonProps) {
  return (
    <p className="mt-10 text-2xl font-thin text-teal-300 duration-200 hover:font-normal hover:text-teal-600">
      <a href={src}>{children}</a>
    </p>
  );
}
