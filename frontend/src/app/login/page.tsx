"use client";

import { useState } from "react";

export default function Login() {
  return (
    <form
      action={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`}
      method="post"
    >
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
