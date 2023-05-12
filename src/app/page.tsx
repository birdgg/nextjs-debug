import Image from "next/image";
import { Tweet } from "react-tweet";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Tweet id="1657020420338380800" />
    </main>
  );
}
