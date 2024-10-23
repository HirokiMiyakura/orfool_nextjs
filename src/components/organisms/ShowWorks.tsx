import { fetchWorks } from "@/app/hooks/useWorks";
import Link from "next/link";

export default async function ShowWorks() {
  const works = await fetchWorks();

  return (
    <>
      <div className="flex">
        {works.map((work) => (
          <div key={work.id} className="w-1/3">
            <Link href={`/works/${work.id}`} className="text-black">
              <img
                className="h-48 rounded-l-xl object-cover hover:object-scale-down"
                src={work.image1.url}
                alt=""
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
