import { findUserByEmail } from "../user";
import { verifyPassword } from "../password";

export const executeLogin = async (
  prisma: any,
  email: string,
  plainPassword: string,
): Promise<{ success: boolean; message: string }> => {
  const user = await findUserByEmail(prisma, email);
  if (!user) {
    return { success: false, message: "User not found" };
  }
  const isValid = await verifyPassword(plainPassword, user.hash_password);
  if (!isValid) {
    return { success: false, message: "Invalid password" };
  }
  return { success: true, message: "Login successful" };
};
