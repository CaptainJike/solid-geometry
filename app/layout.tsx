import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '高中数学实验室 · 知识公式与立体几何实验',
  description: '模块化学习高中数学知识点与常用公式，并通过 10 道立体几何题交互观察展开、截面、旋转与面积最值。',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
      </body>
    </html>
  );
}
