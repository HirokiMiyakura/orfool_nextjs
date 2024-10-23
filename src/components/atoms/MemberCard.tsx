// components/atoms/MemberCard.tsx
import Image from "next/image";

interface MemberCardProps {
  name: string;
  position: string;
  description: string;
  imgSrc: string;
}

export default function MemberCard({
  name,
  position,
  description,
  imgSrc,
}: MemberCardProps) {
  return (
    <div className="mb-10 w-full rounded-3xl bg-white p-6 shadow-md sm:mb-0 sm:w-1/3">
      <Image
        src={imgSrc}
        alt={`${name}'s profile picture`}
        width={80}
        height={80}
        className="mx-auto mb-8 rounded-full object-cover"
      />
      <h3 className="mb-2 text-center text-2xl font-bold">{name}</h3>
      <p className="mb-4 text-center text-sm font-thin text-gray-500">
        {position}
      </p>
      <p className="mt-8 font-thin leading-7 text-gray-700">{description}</p>
    </div>
  );
}
