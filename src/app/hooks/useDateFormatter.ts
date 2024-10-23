// hooks/useDateFormatter.ts

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }); // 例: "2024年10月8日"
}
