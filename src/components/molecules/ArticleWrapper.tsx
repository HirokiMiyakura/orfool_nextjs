// components/molecules/ArticleWrapper.tsx

type ArticleWrapperProps = {
  children: React.ReactNode;
};

export default function ArticleWrapper({ children }: ArticleWrapperProps) {
  return (
    <article data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" className="mx-auto -mt-24  w-full bg-slate-50 px-4 py-32 sm:px-8 sm:py-48">
      {children}
    </article>
  );
}
