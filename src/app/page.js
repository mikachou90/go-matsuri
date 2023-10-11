import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <header className="pr-[10rem] pl-[10rem] fixed w-full">
      <div className="flex justify-center mb-[0.5rem]">
        <Link href="/">
          <Image src="/logo-large.png" width="200" height="20" alt="logo" />
        </Link>
      </div>
      <Navbar />
    </header>
  );
}
