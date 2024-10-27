import { ReactNode } from "react";

interface SubMessageProps {
  children: ReactNode;
}

export default function SubMessage({ children }: SubMessageProps) {
  return <p data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" className="mt-8 text-xl font-thin sm:text-3xl">{children}</p>;
}
