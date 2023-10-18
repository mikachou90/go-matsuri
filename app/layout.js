import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 字型
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Go Matsuri!",
  description: "日本慶典情報",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
