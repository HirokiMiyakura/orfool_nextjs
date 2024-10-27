// components/molecules/SectionBlock.tsx

import EnTitle from "@/components/atoms/EnTitle";

type SectionBlockProps = {
  title: string;
  subtitle: string;
  content: React.ReactNode;
};

export default function SectionBlock({
  title,
  subtitle,
  content,
}: SectionBlockProps) {
  return (
    <section className="mx-auto w-full max-w-screen-xl px-4 py-32 sm:px-8 sm:py-48">
      <EnTitle className="text-5xl sm:text-9xl">{title}</EnTitle>
      <h3 data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" className="shippori-mincho mb-10 text-2xl sm:text-4xl">{subtitle}</h3>
      <div>{content}</div>
    </section>
  );
}
