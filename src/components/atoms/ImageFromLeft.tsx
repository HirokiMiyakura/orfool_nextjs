import Image from "next/image";

interface ImageFromLeftProps {
  src: string;
  alt: string;
}

export default function ImageFromLeft({ src, alt }: ImageFromLeftProps) {
  return (
    <div className="relative mr-7 h-28 w-11/12 sm:h-80">
      <Image
        src={src}
        alt={alt}
        layout="fill" // 親要素にフィットさせる
        objectFit="cover" // 画像の拡大・縮小方法を指定
      />
    </div>
  );
}
