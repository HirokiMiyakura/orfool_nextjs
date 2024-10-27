import { ReactNode } from "react";

interface MainMessageProps {
  children: ReactNode;
}

export default function MainMessage({ children }: MainMessageProps) {
  return (
    <h2 data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" className="text-5xl font-extrabold leading-snug sm:text-9xl">
      {children}
    </h2>
  );
}
