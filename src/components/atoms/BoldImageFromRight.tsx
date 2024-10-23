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
