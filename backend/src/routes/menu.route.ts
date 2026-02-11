import { Hono } from "hono";
import { MenuItemResponse } from "../schemas/menu.schema";

const menu = new Hono();
menu.get("/", (c) => {
  const menuItems: MenuItemResponse = {
    menuItems: [
      { label: "ホーム", href: "/", iconName: "home" },
      { label: "体験レッスン", href: "/challenge", iconName: "challenge" },
      { label: "カレンダー", href: "/calendar", iconName: "calendar" },
      { label: "お問い合わせ", href: "/contact", iconName: "contact" },
      { label: "アクセス", href: "/access", iconName: "access" },
      { label: "料金表", href: "/fee", iconName: "fee" },
    ],
  };
  return c.json(menuItems);
});

export default menu;
