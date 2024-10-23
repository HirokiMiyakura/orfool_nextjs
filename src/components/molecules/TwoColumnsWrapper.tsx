// components/molecules/SectionWrapper.tsx

type TwoColumnsWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export default function TwoColumnsWrapper({
  children,
  className = "items-center",
}: TwoColumnsWrapperProps) {
  return (
    <section
      className={`mx-auto block w-full max-w-screen-xl justify-between px-4 py-32 sm:flex sm:px-8 sm:py-60 ${className}`}
    >
      {children}
    </section>
  );
}
