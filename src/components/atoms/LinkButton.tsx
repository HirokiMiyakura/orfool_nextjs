import { ReactNode } from 'react';

interface LinkButtonProps {
	src: string;
	children: ReactNode;
}

export default function LinkButton({ children, src }: LinkButtonProps) {
	return (
		<p className="text-2xl font-thin text-teal-300 mt-10 ">
			<a href="{src}">{children}</a>
		</p>
	);
}
