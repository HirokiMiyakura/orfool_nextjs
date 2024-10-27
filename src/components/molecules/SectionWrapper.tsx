// components/molecules/SectionWrapper.tsx

type SectionWrapperProps = {
  children: React.ReactNode;
};

export default function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <section data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="mx-auto w-full max-w-screen-xl px-4 py-32 sm:px-8 sm:py-48">
      {children}
    </section>
  );
}
