import { ReactNode } from "react";

interface EnTitleCenterProps {
  children: ReactNode;
}

export default function EnTitleCenter({ children }: EnTitleCenterProps) {
  return (
    <div className="relative">
      {/* <span className="absolute text-teal-300 -left-2 -top-2">＊</span> */}
      <h2 className="mb-10 text-center text-5xl font-thin sm:mb-20 sm:text-9xl">
        {children}
      </h2>
    </div>
  );
}
