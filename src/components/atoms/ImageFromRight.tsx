import Image from "next/image";

interface ImageFromRightProps {
  src: string;
  alt: string;
}

export default function ImageFromRight({ src, alt }: ImageFromRightProps) {
  return (
    <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="relative h-28 w-full sm:h-80">
      <div className="absolute right-0 h-full w-11/12">
        <Image
          src={src}
          alt={alt}
          layout="fill" // 親要素にフィットさせる
          objectFit="cover" // 画像の拡大・縮小方法を指定
        />
      </div>
    </div>
  );
}
