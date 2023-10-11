import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <header className="pt-[0.5rem] pr-[10rem] pl-[10rem] fixed w-full">
        <div className="flex justify-center mb-[0.5rem]">
          <Link href="/">
            <Image src="/logo-large.png" width="300" height="20" alt="logo" />
          </Link>
        </div>
        <Navbar />
      </header>
      <div className="pr-[10rem] pl-[10rem]"></div>
      <div className="fixed bottom-0 pr-[10rem] pl-[10rem] w-full">
        <Footer />
      </div>
    </div>
  );
}
