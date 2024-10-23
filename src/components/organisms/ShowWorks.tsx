import { fetchWorks } from "@/app/hooks/useWorks";
import Link from "next/link";

export default async function ShowWorks() {
  const works = await fetchWorks();
  const settings = {
    dots: true, // ドットナビゲーションを表示する
    infinite: true, // ループするかどうか
    speed: 500, // スライドの速度 (ms)
    slidesToShow: 3, // 一度に表示するスライドの数
    slidesToScroll: 1, // 一度にスクロールするスライドの数
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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
