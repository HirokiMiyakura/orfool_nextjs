"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import { fetchWorks, Work } from "@/app/hooks/useWorks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default function SlickSlider() {
  const [works, setWorks] = useState<Work[]>([]);

  useEffect(() => {
    async function loadWorks() {
      const data = await fetchWorks();
      setWorks(data);
    }
    loadWorks();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  if (works.length === 0) {
    return <p>制作実績がありません。</p>;
  }

  return (
    <Slider {...settings}>
      {works.map((work) => (
        <Link key={work.id} href={`/works/${work.id}`} className="text-black">
          <div className="justify-between p-0 sm:p-4">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={work.image1.url}
                alt={work.title}
                className="h-64 w-full object-cover"
              />
              <div className="h-96 p-4">
                <h3 className="my-4 text-xl font-semibold">{work.title}</h3>
                <p className="mb-4 font-thin leading-8">{work.description}</p>
                <p className="text-sm text-gray-500">
                  使用技術: {work.technology}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </Slider>
  );
}
