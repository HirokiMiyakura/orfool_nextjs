import EnTitle from "@/components/atoms/EnTitle";
import SubTitle from "@/components/atoms/SubTitle";
import NormalImage from "@/components/atoms/NormalImage";
import LinkButton from "@/components/atoms/LinkButton";

type ContentWithImageProps = {
  title: string;
  subTitle: string;
  imageSrcPc: string;
  imageSrcSp: string;
  imageAlt: string;
  description: string;
  link: string;
  linkText: string;
};

export default function ContentWithImage({
  title,
  subTitle,
  imageSrcPc,
  imageSrcSp,
  imageAlt,
  description,
  link,
  linkText,
}: ContentWithImageProps) {
  return (
    <>
      <div className="w-full sm:w-3/6">
        <EnTitle className="text-5xl sm:text-9xl">{title}</EnTitle>
        <SubTitle>{subTitle}</SubTitle>
        <div className="mb-7 block sm:hidden">
          <NormalImage src={imageSrcSp} alt={imageAlt} />
        </div>
        <p className="font-thin leading-loose">{description}</p>
        <LinkButton src={link}>{linkText}</LinkButton>
      </div>
      <div className="hidden sm:block sm:w-2/6">
        <NormalImage src={imageSrcPc} alt={imageAlt} />
      </div>
    </>
  );
}
