import { Hono } from "hono";

const menu = new Hono();
menu.get("/", (c) => {
  const menuItems = [
    { label: "ホーム", href: "/" },
    { label: "ログイン", href: "/login" },
    { label: "体験レッスン", href: "/test" },
    { label: "カレンダー", href: "/calender" },
    { label: "お問い合わせ", href: "/contact" },
    { label: "アクセス", href: "/access" },
    { label: "料金表", href: "/fee" },
  ];
  return c.json(menuItems);
});

export default menu;
