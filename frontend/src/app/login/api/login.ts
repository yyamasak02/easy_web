import { redirect } from "next/navigation";

export interface LoginResponse {
  errorMessages: string;
}

export async function login(_: LoginResponse, formData: FormData) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`,
      {
        method: "POST",
        body: formData,
        cache: "no-store",
      },
    );
    const data = await response.json();
    if (!response.ok) {
      return {
        errorMessages: data.message || "Login failed",
      } as LoginResponse;
    }
  } catch (error: any) {
    console.error("Error during login:", error);
    return {
      errorMessages: error.message,
    } as LoginResponse;
  }
  redirect("/");
}
