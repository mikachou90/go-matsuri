import Image from "next/image";

export default function Home() {
  return (
    <header>
      <Image src="/logo-large.png" width={200} height={20} alt="logo" />
    </header>
  );
}
