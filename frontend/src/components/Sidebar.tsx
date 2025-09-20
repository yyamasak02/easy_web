"use client";

import { useEffect, useState } from "react";

type MenuItem = {
  label: string;
  href: string;
};

export default function Sidebar() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchMenuItems = async () => {
      // ここでAPIからメニュー項目を取得する例
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/menu`,
      );
      const data = await response.json();
      setMenuItems(data);
    };

    fetchMenuItems();
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm.75 4.5a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <aside
        className={`
          fixed top-0 left-0 z-40 w-64 h-screen transition-transform 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          sm:translate-x-0 
          bg-gray-50 dark:bg-gray-800
        `}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <span className="ml-3">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
