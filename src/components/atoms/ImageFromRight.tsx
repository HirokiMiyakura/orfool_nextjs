import Image from 'next/image';

interface ImageFromRightProps {
	src: string;
	alt: string;
}

export default function ImageFromRight({ src, alt }: ImageFromRightProps) {
	return (
		<div
			style={{
				position: 'relative',
				width: '90vw',
				height: '20vh',
				marginLeft: '10vw',
			}}
		>
			<Image
				src={src}
				alt={alt}
				layout="fill" // 親要素にフィットさせる
				objectFit="cover" // 画像の拡大・縮小方法を指定
			/>
		</div>
	);
}
