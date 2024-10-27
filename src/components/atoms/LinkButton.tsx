import { ReactNode } from "react";

interface LinkButtonProps {
  src: string;
  children: ReactNode;
}

export default function LinkButton({ children, src }: LinkButtonProps) {
  return (
    <p className="mt-10 text-2xl font-normal text-teal-600 duration-200 hover:text-teal-400">
      <a href={src}>{children}</a>
    </p>
  );
}
