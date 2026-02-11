"use client";

import TextField from "@/components/TextField";
import LoginButton from "./LoginButton";
import { login } from "../api/login";
import { useActionState } from "react";
import Message from "./Message";

export default function LoginForm() {
  const [state, formAction] = useActionState(login, { errorMessages: "" });
  return (
    <form action={formAction}>
      {state.errorMessages && <Message message={state.errorMessages}></Message>}
      <TextField type="text" name="email" placeholder="email" />
      <TextField type="password" name="password" placeholder="Password" />
      <LoginButton />
    </form>
  );
}
