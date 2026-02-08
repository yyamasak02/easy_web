import { fetchMenuItems } from "@/api/menu";
import { useEffect, useState } from "react";

type MenuItem = { label: string; href: string };

export const useMenu = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchMenuItems();
        setMenuItems(data);
      } catch (error) {
        console.error("Failed to fetch menu:", error);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);
  return { menuItems, isLoading };
};
