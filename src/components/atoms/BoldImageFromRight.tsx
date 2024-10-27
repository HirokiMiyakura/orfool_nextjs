import Image from "next/image";

interface BoldImageFromRightProps {
  src: string;
  alt: string;
}

export default function BoldImageFromRight({
  src,
  alt,
}: BoldImageFromRightProps) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      style={{
        position: "relative",
        width: "90vw",
        height: "40vh",
        marginLeft: "10vw",
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
