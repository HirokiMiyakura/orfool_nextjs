"use client"; // クライアント側で実行する

import BoldImageFromRight from "@/components/atoms/BoldImageFromRight";
import EnTitleCenter from "@/components/atoms/EnTitleCenter";
import MainMessage from "@/components/atoms/MainMessage";
import SubMessage from "@/components/atoms/SubMessage";
import SectionWrapper from "@/components/molecules/SectionWrapper";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // 非同期処理を行うが、トップレベルで async は使わない
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
        } else {
          return response.json().then((data) => {
            console.error("エラー内容:", data.error);
            setStatus("error");
          });
        }
      })
      .catch(() => setStatus("error"));
  };

  return (
    <>
      <SectionWrapper>
        <MainMessage>CONTACT US</MainMessage>
        <SubMessage>
          ウェブマーケティングに関するみなさまの疑問にお答えいたします。
        </SubMessage>
      </SectionWrapper>
      <BoldImageFromRight src="/contact_main.png" alt="" />
      <SectionWrapper>
        <EnTitleCenter>FORM</EnTitleCenter>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="お名前"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded border p-4"
          />
          <input
            type="email"
            name="email"
            placeholder="メールアドレス"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded border p-4"
          />
          <textarea
            name="message"
            placeholder="お問い合わせ内容"
            value={formData.message}
            onChange={handleChange}
            required
            className="h-40 w-full rounded border p-4"
          />
          <button
            type="submit"
            className="w-full rounded bg-green-400 p-4 text-white hover:bg-green-600"
            disabled={status === "loading"}
          >
            {status === "loading" ? "送信中..." : "送信"}
          </button>
          {status === "success" && (
            <p className="text-green-500">送信が完了しました！</p>
          )}
          {status === "error" && (
            <p className="text-red-500">送信に失敗しました。</p>
          )}
        </form>
      </SectionWrapper>
    </>
  );
}
