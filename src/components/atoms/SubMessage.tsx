import { ReactNode } from 'react';

interface SubMessageProps {
	children: ReactNode;
}

export default function SubMessage({ children }: SubMessageProps) {
	return <p className="text-3xl font-thin mt-8">{children}</p>;
}
