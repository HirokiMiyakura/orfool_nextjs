// hooks/useWorks.ts
import { client } from "@/libs/client";

export type Work = {
  id: string;
  title: string;
  description: string;
  technology: string;
  image1: { url: string };
  image2: { url: string };
  publishedAt: string;
};

// 記事一覧を取得する関数
export async function fetchWorks(): Promise<Work[]> {
  try {
    const data = await client.get({ endpoint: "works" });
    return data.contents as Work[];
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
}

// 個別記事を取得する関数
export async function fetchWork(id: string): Promise<Work | null> {
  try {
    const work = await client.get({
      endpoint: "works",
      contentId: id,
    });
    return work as Work;
  } catch (error) {
    console.error("Failed to fetch blog post:", error);
    return null;
  }
}
