import MainMessage from "@/components/atoms/MainMessage";
import SubMessage from "@/components/atoms/SubMessage";
import ShowArticles from "@/components/organisms/ShowArticles";
import BoldImageFromRight from "@/components/atoms/BoldImageFromRight";
import SectionWrapper from "@/components/molecules/SectionWrapper";
import ArticleWrapper from "@/components/molecules/ArticleWrapper";

export default async function Blogs() {
  return (
    <>
      <SectionWrapper>
        <MainMessage>BLOG / COLUMN</MainMessage>
        <SubMessage>
          ウェブマーケティングに関するさまざまな情報をお届けします。
        </SubMessage>
      </SectionWrapper>
      <BoldImageFromRight src="/blog_main.png" alt="" />
      <ArticleWrapper>
        <ShowArticles />
      </ArticleWrapper>
    </>
  );
}
