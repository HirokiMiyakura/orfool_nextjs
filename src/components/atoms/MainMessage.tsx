import { ReactNode } from 'react';

interface MainMessageProps {
	children: ReactNode;
}

export default function MainMessage({ children }: MainMessageProps) {
	return <h2 className="text-9xl font-extrabold">{children}</h2>;
}
