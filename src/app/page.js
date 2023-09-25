import Image from "next/image";
import largeLogo from "public/logo-large.png";

export default function Home() {
  return (
    <main>
      <Image src={largeLogo} alt="logo" width="200" priority />
    </main>
  );
}
