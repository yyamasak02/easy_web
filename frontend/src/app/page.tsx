"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const toLogin = () => {
    router.push("/login");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <button
        onClick={toLogin}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        to Login page
      </button>
    </main>
  );
}
