"use client";

import { useEffect, useState } from "react";
export default function Test() {
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/hello`)
      .then((res) => res.text())
      .then((text) => setMsg(text));
  }, []);

  return (
    <main>
      <h1>Hello from Next.js</h1>
      <p>Backend says: {msg}</p>
    </main>
  );
}
