// app/blog/[id]/page.tsx
import { fetchBlog } from "../../hooks/useBlogs";
import { formatDate } from "../../hooks/useDateFormatter";
import Image from "next/image";
import { notFound } from "next/navigation";

type BlogPostProps = {
  params: { id: string };
};

export default async function BlogPost({ params }: BlogPostProps) {
  const blog = await fetchBlog(params.id);
  console.log(params);
  if (!blog) {
    notFound();
  }

  return (
    <section className="mx-auto w-full max-w-screen-xl py-48">
      <article className="p-4">
        <p className="mb-4">{formatDate(blog.publishedAt)}</p>
        <h1 className="mb-20 text-4xl font-extrabold">{blog.title}</h1>
        <div className="mb-6">
          <Image
            src={blog.eyecatch.url}
            alt={blog.title}
            width={800}
            height={400}
            className="mb-20 w-full"
          />
        </div>
        <div
          className="leading-8"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>
    </section>
  );
}
