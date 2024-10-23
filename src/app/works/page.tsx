import BoldImageFromRight from "@/components/atoms/BoldImageFromRight";
import MainMessage from "@/components/atoms/MainMessage";
import SubMessage from "@/components/atoms/SubMessage";
import SectionWrapper from "@/components/molecules/SectionWrapper";
import SlickSlider from "@/components/organisms/SlickSlider";

export default function Works() {
  return (
    <>
      <SectionWrapper>
        <MainMessage>OUR WORKS</MainMessage>
        <SubMessage>制作実績</SubMessage>
      </SectionWrapper>
      <BoldImageFromRight src="/aboutus_main.png" alt="" />
      <section className="mx-auto w-full max-w-screen-xl px-4 py-32 sm:px-0 sm:py-48">
        <SlickSlider />
      </section>
    </>
  );
}
