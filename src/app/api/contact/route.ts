// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    // Xserver の SMTP 設定
    const transporter = nodemailer.createTransport({
      host: "sv7037.xserver.jp",
      port: 465,
      secure: true, // SSL/TLS を使用
      auth: {
        user: process.env.XSERVER_EMAIL, // メールアドレス
        pass: process.env.XSERVER_PASSWORD, // メールパスワード
      },
    });

    // メールの内容を構成
    await transporter.sendMail({
      from: process.env.XSERVER_EMAIL, // 送信元メールアドレス
      to: process.env.XSERVER_EMAIL, // 受信先メールアドレス（自分宛に送信）
      subject: `お問い合わせ from ${name}`,
      text: `お名前: ${name}\nメール: ${email}\nメッセージ:\n${message}`,
    });

    return NextResponse.json({ message: "送信成功" }, { status: 200 });
  } catch (error) {
    console.error("メール送信に失敗:", error);
    return NextResponse.json({ message: "送信失敗" }, { status: 500 });
  }
}
