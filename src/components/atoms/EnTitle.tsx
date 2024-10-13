import { ReactNode } from 'react';

interface EnTitleProps {
	children: ReactNode;
}

export default function EnTitle({ children }: EnTitleProps) {
	return (
		<div className="relative">
			<span className="absolute text-teal-300 left-0 top-0">＊</span>
			<h2 className="text-9xl font-thin mb-20">{children}</h2>
		</div>
	);
}
