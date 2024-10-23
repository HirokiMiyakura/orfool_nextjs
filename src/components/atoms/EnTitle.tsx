import { ReactNode } from "react";
import clsx from "clsx"; // 複数のクラス名を安全に組み合わせるためのライブラリ

interface EnTitleProps {
  children: ReactNode;
  className?: string;
}

export default function EnTitle({ children, className }: EnTitleProps) {
  return (
    <div className="relative">
      <span className="absolute -left-2 -top-2 text-teal-300">＊</span>
      <h2 className={clsx("mb-10 font-thin sm:mb-20", className)}>
        {children}
      </h2>
    </div>
  );
}
