interface NormalImageProps {
  src: string;
  alt: string;
}

export default function NormalImage({ src, alt }: NormalImageProps) {
  return <img className="w-full max-w-full rounded-lg" src={src} alt={alt} />;
}
