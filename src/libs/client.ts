import { createClient } from "microcms-js-sdk";

console.log("Service Domain:", process.env.MICROCMS_SERVICE_DOMAIN);
console.log("API Key:", process.env.MICROCMS_API_KEY);

// エラーチェック
if (!process.env.MICROCMS_SERVICE_DOMAIN || !process.env.MICROCMS_API_KEY) {
  throw new Error(
    "Missing environment variables: Check MICROCMS_SERVICE_DOMAIN and MICROCMS_API_KEY",
  );
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || "",
  apiKey: process.env.MICROCMS_API_KEY || "",
});
