import BoldImageFromRight from "@/components/atoms/BoldImageFromRight";
import EnTitleCenter from "@/components/atoms/EnTitleCenter";
import GoogleMap from "@/components/atoms/GoogleMap";
import ImageFromLeft from "@/components/atoms/ImageFromLeft";
import ImageFromRight from "@/components/atoms/ImageFromRight";
import MainMessage from "@/components/atoms/MainMessage";
import MoreButton from "@/components/atoms/MoreButton";
import SubMessage from "@/components/atoms/SubMessage";
import AccessWrapper from "@/components/molecules/AccessWrapper";
import ContentWithImage from "@/components/molecules/ContentWithImage";
import SectionWrapper from "@/components/molecules/SectionWrapper";
import TwoColumnsWrapper from "@/components/molecules/TwoColumnsWrapper";
import ShowArticles from "@/components/organisms/ShowArticles";
import SlickSlider from "@/components/organisms/SlickSlider";

export default async function Home() {
  return (
    <>
      <SectionWrapper>
        <MainMessage>
          Support
          <br />
          Your Challenge
        </MainMessage>
        <SubMessage>
          あなたの
          <span
            className={`shippori-mincho text-4xl font-extrabold text-teal-300 sm:text-7xl`}
          >
            挑戦
          </span>
          を応援します。
        </SubMessage>
      </SectionWrapper>
      <BoldImageFromRight src="/1.jpg" alt="テスト" />
      <TwoColumnsWrapper>
        <ContentWithImage
          title="ABOUT"
          subTitle="私たちの技術、あなたの未来"
          imageSrcPc="/aboutus.png"
          imageSrcSp="/aboutus_sp.png"
          imageAlt="イメージ"
          description="技術の進化は絶えません。私たちは、最新のウェブマーケティング戦略とホームページ制作技術を駆使して、あなたのビジネスを次のレベルへと押し上げます。私たちの知識と経験が、あなたのビジョンを具現化します。"
          link="/about"
          linkText="詳しくはこちら →"
        />
      </TwoColumnsWrapper>
      <ImageFromLeft src="/2.jpg" alt="テスト" />
      <TwoColumnsWrapper>
        <ContentWithImage
          title="SERVICE"
          subTitle="変革を導くウェブマーケティング"
          imageSrcPc="/service.png"
          imageSrcSp="/service_sp.png"
          imageAlt="イメージ"
          description="今日のデジタル時代において、革新的なウェブマーケティングは、企業が成長し続けるための鍵です。私たちは、目標を達成するためのカスタマイズされた戦略を提供します。SEO、SNSマーケティング、コンテンツマーケティング、PPC広告など、最新の技術と手法を駆使して目標達成へと導きます。"
          link="/service"
          linkText="詳しくはこちら →"
        />
      </TwoColumnsWrapper>
      <ImageFromRight src="/3.jpg" alt="テスト" />
      <SectionWrapper>
        <EnTitleCenter>WORKS</EnTitleCenter>
        <SlickSlider />
      </SectionWrapper>
      <SectionWrapper>
        <EnTitleCenter>
          BLOGS<span className="hidden sm:inline-block">/COLUMNS</span>
        </EnTitleCenter>
        <ShowArticles />
        <MoreButton link="/blogs">さらに記事を読む →</MoreButton>
      </SectionWrapper>
      <ImageFromLeft src="/4.jpg" alt="テスト" />
      <AccessWrapper>
        <EnTitleCenter>ACCESS</EnTitleCenter>
        <GoogleMap />
      </AccessWrapper>
    </>
  );
}
