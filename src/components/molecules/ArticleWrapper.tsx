// components/molecules/ArticleWrapper.tsx

type ArticleWrapperProps = {
  children: React.ReactNode;
};

export default function ArticleWrapper({ children }: ArticleWrapperProps) {
  return (
    <article className="mx-auto w-full bg-slate-50 px-4 py-32 sm:px-8 sm:py-48">
      {children}
    </article>
  );
}
