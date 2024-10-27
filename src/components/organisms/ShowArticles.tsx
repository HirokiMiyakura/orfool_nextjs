// app/blogs/page.tsx
import { fetchBlogs } from "@/app/hooks/useBlogs";
import { formatDate } from "@/app/hooks/useDateFormatter";
import Link from "next/link";

export default async function ShowArticles() {
  const blogs = await fetchBlogs();
  console.log(blogs);

  return (
    <article>
      {blogs.map((blog) => (
        <Link key={blog.id} href={`/blogs/${blog.id}`} className="text-black">
          <div className="mx-auto mb-14 block max-w-screen-xl rounded-xl bg-white shadow sm:flex">
            <div className="relative h-48 w-full sm:w-2/5 sm:pe-8">
              <img
                className="h-48 w-full rounded-t-xl object-cover sm:rounded-bl-xl sm:rounded-tr-none"
                src={blog.eyecatch.url}
                alt=""
              />
            </div>
            <div className="p-5 sm:pt-7">
              <p className="sm:text-1xl mb-2 text-sm text-gray-700">{formatDate(blog.publishedAt)}</p>
              <p className="text-1xl font-extrabold sm:text-2xl">{blog.title}</p>
            </div>
          </div>
        </Link>
      ))}
    </article>
  );
}
