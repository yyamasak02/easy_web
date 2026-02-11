import bcrypt from "bcryptjs";

const SALT_ROUNDS: number = 10;

export type PasswordInfo = {
  hash: string;
  salt: string;
};

export const createHashPassword = async (
  plainPassword: string,
): Promise<PasswordInfo> => {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hash = await bcrypt.hash(plainPassword, salt);
  return { hash, salt };
};

export const verifyPassword = async (
  plainPassword: string,
  hash: string,
): Promise<boolean> => {
  return await bcrypt.compare(plainPassword, hash);
};
