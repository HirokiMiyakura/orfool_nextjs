import { members } from "@/data/memberData";
import { companyInfo } from "@/data/companyData";
import BoldImageFromRight from "@/components/atoms/BoldImageFromRight";
import EnTitle from "@/components/atoms/EnTitle";
import EnTitleCenter from "@/components/atoms/EnTitleCenter";
import GoogleMap from "@/components/atoms/GoogleMap";
import ImageFromLeft from "@/components/atoms/ImageFromLeft";
import ImageFromRight from "@/components/atoms/ImageFromRight";
import MainMessage from "@/components/atoms/MainMessage";
import MemberCard from "@/components/atoms/MemberCard";
import SubMessage from "@/components/atoms/SubMessage";
import SectionWrapper from "@/components/molecules/SectionWrapper";
import AccessWrapper from "@/components/molecules/AccessWrapper";
import TwoColumnsWrapper from "@/components/molecules/TwoColumnsWrapper";
import PolicyDetails from "@/components/molecules/PolicyDetails";

export default async function About() {
  return (
    <>
      <SectionWrapper>
        <MainMessage>ABOUT US</MainMessage>
        <SubMessage>我々について。</SubMessage>
      </SectionWrapper>
      <BoldImageFromRight src="/aboutus_main.png" alt="" />
      <TwoColumnsWrapper className="items-start">
        <div className="w-full sm:w-2/5">
          <EnTitle className="text-5xl sm:text-8xl">POLICY</EnTitle>
        </div>
        <PolicyDetails />
      </TwoColumnsWrapper>
      <ImageFromLeft src="/5.jpg" alt="" />
      <SectionWrapper>
        <EnTitleCenter>MEMBERS</EnTitleCenter>
        <div className="block gap-10 sm:flex">
          {members.map((member) => (
            <MemberCard
              key={member.name}
              imgSrc={member.imgSrc}
              name={member.name}
              position={member.position}
              description={member.description}
            />
          ))}
        </div>
      </SectionWrapper>
      <ImageFromRight src="/2.jpg" alt="" />
      <SectionWrapper>
        <EnTitleCenter>
          COMPANY
          <br />
          INFORMATION
        </EnTitleCenter>
        <table className="text-1xl w-full table-auto">
          <tbody>
            {companyInfo.map((info) => (
              <tr key={info.label} className="border-b">
                <th className="block w-full px-2 pb-2 pt-4 text-left sm:inline-block sm:w-1/4 sm:py-4">
                  {info.label}
                </th>
                <td className="block w-full px-2 pb-4 text-left sm:inline-block sm:w-auto sm:py-4">
                  {info.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </SectionWrapper>
      <AccessWrapper>
        <EnTitleCenter>ACCESS</EnTitleCenter>
        <GoogleMap />
      </AccessWrapper>
    </>
  );
}
