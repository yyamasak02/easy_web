// components/TopNav.tsx
"use client";

import { useState } from "react";

type TopNavProps = {
  siteName: string;
  siteTopUrl: string;
  menuItems: { label: string; href: string }[];
};

export default function TopNav(props: TopNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* ロゴ */}
        <a
          href={props.siteTopUrl}
          className="flex items-center space-x-2 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            {props.siteName}
          </span>
        </a>

        {/* ハンバーガーメニュー */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5h14a1 1 0 100-2H3a1 1 0 000 2zm14 4H3a1 1 0 000 2h14a1 1 0 100-2zm0 6H3a1 1 0 000 2h14a1 1 0 100-2z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        {/* メニューリンク */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse mt-4 md:mt-0">
            {props.menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded md:bg-transparent md:p-0 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
