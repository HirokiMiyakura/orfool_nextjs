import BoldImageFromRight from "@/components/atoms/BoldImageFromRight";
import ImageFromLeft from "@/components/atoms/ImageFromLeft";
import MainMessage from "@/components/atoms/MainMessage";
import SubMessage from "@/components/atoms/SubMessage";
import { TableOne } from "@/components/molecules/Table1";
import { TableTwo } from "@/components/molecules/Table2";
import SectionBlock from "@/components/molecules/SectionBlock";
import SectionWrapper from "@/components/molecules/SectionWrapper";

export default async function About() {
  return (
    <>
      <SectionWrapper>
        <MainMessage>OUR SERVICE</MainMessage>
        <SubMessage>変革を導くウェブマーケティング。</SubMessage>
      </SectionWrapper>
      <BoldImageFromRight src="/service_main.png" alt="" />
      <SectionBlock
        title="CREATIVE"
        subtitle="ホームページ制作"
        content={
          <>
            <p className="font-thin leading-8">
              私たちは、透明性と信頼を重んじ、わかりやすい料金設定を導入しています。
              <br />
              私たちの料金プランはシンプルで明確、あなたのビジネスニーズに合わせて柔軟にカスタマイズ可能です。
            </p>
            <p className="mt-4 font-thin leading-8">
              初期コンサルテーションを通じて、あなたの要望と予算に最適なソリューションを提案します。
            </p>
            <TableOne />
          </>
        }
      />
      <ImageFromLeft src="/2.jpg" alt="クリエイティブに関するイメージ画像" />
      <SectionBlock
        title="WEB MARKETING"
        subtitle="ホームページ運用"
        content={
          <>
            <p className="font-thin leading-8">
              ビジネスが成長し変化するにつれて、あなたのウェブサイトも進化する必要があります。
              <br />
              私たちは、あなたのビジネスの拡大に合わせて、ウェブサイトの機能拡張やリニューアル、マーケティングの支援を行います。
            </p>
            <p className="mt-4 font-thin leading-8">
              あなたのビジネスの将来に向けた計画を共に立て、実現に向けてサポートします。
            </p>
            <TableTwo />
            <ul className="mt-10">
              <li className="text-right text-xs sm:text-base">
                ※1 アカウント開設費用は別途発生いたします。
              </li>
              <li className="text-right text-xs sm:text-base">
                ※2 広告費の12.5%が運用費用として別途発生いたします。
              </li>
            </ul>
          </>
        }
      />
    </>
  );
}
