import { findUserByEmail } from "../user";
import { verifyPassword } from "../password";
import { User } from "../../generated/client";
import type { LoginSchema as LoginSchemaType } from "../../schemas/login";

export type LoginResult = {
  success: boolean;
  message: string;
};

export const executeLogin = async (
  prisma: any,
  loginSchema: LoginSchemaType,
): Promise<LoginResult> => {
  const user: User | null = await findUserByEmail(prisma, loginSchema.email);
  if (!user) {
    return { success: false, message: "User not found" };
  }
  const isValid: boolean = await verifyPassword(
    loginSchema.password,
    user.hash_password,
  );
  if (!isValid) {
    return { success: false, message: "Invalid password" };
  }
  return { success: true, message: "Login successful" };
};
