import Image from 'next/image';

interface NormalImageProps {
	src: string;
	alt: string;
}

export default function NormalImage({ src, alt }: NormalImageProps) {
	return (
		// <p className="w-full max-w-full">
		// 	<Image src={src} alt={alt} layout="fill" />
		// </p>
		<img className="w-full max-w-full rounded-lg" src={src} alt={alt} />
	);
}
