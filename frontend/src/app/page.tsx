"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const toTest = () => {
    router.push("/test");
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={toTest}>to Test page</button>
    </div>
  );
}
