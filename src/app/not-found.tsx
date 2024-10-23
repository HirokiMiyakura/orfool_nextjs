import MainMessage from "@/components/atoms/MainMessage";
import SubMessage from "@/components/atoms/SubMessage";
import SectionWrapper from "@/components/molecules/SectionWrapper";
import BoldImageFromRight from "@/components/atoms/BoldImageFromRight";

export default function notFound() {
  return (
    <>
      <SectionWrapper>
        <MainMessage>404ページ</MainMessage>
        <SubMessage>ページが見つかりません</SubMessage>
      </SectionWrapper>
      <BoldImageFromRight src="/aboutus_main.png" alt="" />
    </>
  );
}
