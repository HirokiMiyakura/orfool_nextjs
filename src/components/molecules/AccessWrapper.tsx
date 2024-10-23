// components/molecules/ArticleWrapper.tsx

type AccessWrapperProps = {
  children: React.ReactNode;
};

export default function AccessWrapper({ children }: AccessWrapperProps) {
  return (
    <article className="mx-auto w-full py-32 sm:py-60">{children}</article>
  );
}
