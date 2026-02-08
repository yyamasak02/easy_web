export const fetchMenuItems = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/menu`,
  );
  const data = await response.json();
  return data;
};
