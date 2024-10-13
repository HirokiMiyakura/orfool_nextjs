import { ReactNode } from 'react';

interface SubTitleProps {
	children: ReactNode;
}

export default function SubTitle({ children }: SubTitleProps) {
	return <p className="text-4xl font-extrabold mb-10">{children}</p>;
}
