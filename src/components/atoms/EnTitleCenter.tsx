import { ReactNode } from 'react';

interface EnTitleCenterProps {
	children: ReactNode;
}

export default function EnTitleCenter({ children }: EnTitleCenterProps) {
	return (
		<div className="relative">
			{/* <span className="absolute text-teal-300">＊</span> */}
			<h2 className="text-9xl text-center font-thin mb-20">{children}</h2>
		</div>
	);
}
