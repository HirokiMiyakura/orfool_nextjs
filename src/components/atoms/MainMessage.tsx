import { ReactNode } from "react";

interface MainMessageProps {
  children: ReactNode;
}

export default function MainMessage({ children }: MainMessageProps) {
  return (
    <h2 className="text-5xl font-extrabold leading-snug sm:text-9xl">
      {children}
    </h2>
  );
}
