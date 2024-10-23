// app/Work/[id]/page.tsx
import { fetchWork } from "../../hooks/useWorks";
import Image from "next/image";
import { notFound } from "next/navigation";

type WorkPostProps = {
  params: { id: string };
  // title: string;
  // eyecatch: { url: string };
  // content: string;
};

export default async function WorkPost({ params }: WorkPostProps) {
  const work = await fetchWork(params.id);

  console.log(params);

  // データが存在しない場合は404ページを表示
  if (!work) {
    notFound();
  }

  return (
    <section className="mx-auto w-full max-w-screen-xl py-48">
      <article className="p-4">
        <p className="mb-7">{work.publishedAt}</p>
        <h1 className="mb-10 text-4xl font-extrabold">{work.title}</h1>
        <div className="mb-6">
          <Image
            src={work.image1.url}
            alt={work.title}
            width={800}
            height={400}
            className="mb-20 w-full"
          />
        </div>
        <div className="mb-6">
          <Image
            src={work.image2.url}
            alt={work.title}
            width={800}
            height={400}
            className="mb-20 w-full"
          />
        </div>
        <p className="leading-8">{work.description}</p>
        <p>{work.technology}</p>
      </article>
    </section>
  );
}
