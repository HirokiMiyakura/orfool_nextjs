// components/AOSInitializer.tsx
'use client'; // クライアント側で実行

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInitializer: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // アニメーションの長さ
      once: true, // 1度だけ実行
    });
  }, []);

  return null; // このコンポーネント自体はUIを持ちません
};

export default AOSInitializer;
