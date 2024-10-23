"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // usePathnameをインポート
import MenuList from "@/components/organisms/MenuList";
import SnsList from "@/components/organisms/SnsList";
import styles from "./Header.module.css"; // CSS Modules でスタイル管理

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // 現在のパスを取得

  const toggleMenu = () => setOpen((prev) => !prev);

  // パスが変更されたときにメニューを閉じる
  useEffect(() => {
    setOpen(false); // パスが変更されたらメニューを閉じる
  }, [pathname]);

  return (
    <>
      <header className="mx-auto flex w-full max-w-screen-xl items-center justify-between p-4 py-10 sm:p-8">
        <h1 className="text-4xl sm:text-5xl">
          <a className="font-extrabold" href="/">
            ORFOOL
          </a>
        </h1>

        {/* ハンバーガーボタン（モバイル用） */}
        <button
          onClick={toggleMenu}
          className={`md:hidden ${styles.hamburger}`}
        >
          <span className={`${styles.line} ${open ? styles.open : ""}`}></span>
        </button>

        {/* デスクトップ用メニュー */}
        <nav className={`hidden list-none items-center space-x-8 lg:flex`}>
          <MenuList className="font-extrabold" />
          <SnsList />
        </nav>
      </header>

      {/* モバイルフルスクリーンメニュー */}
      {open && (
        <div className={styles.overlay}>
          <button className={`${styles.closeButton}`} onClick={toggleMenu}>
            ✕
          </button>
          <MenuList className="mb-10 flex flex-col items-center gap-8 text-3xl text-white" />
        </div>
      )}
    </>
  );
}
