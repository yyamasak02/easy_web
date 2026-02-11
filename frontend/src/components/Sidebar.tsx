"use client";

import { useState } from "react";
import { useMenu } from "@/hooks/useMenu";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { menuItems, isLoading } = useMenu();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 w-64 h-screen transition-transform 
          hidden sm:block
          bg-gray-50 dark:bg-gray-800
        `}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <img
                    src={`/topIcons/${item.iconName}.svg`}
                    alt={item.label}
                    className="w-5 h-5"
                  />
                  <span className="ml-3">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700 sm:hidden">
        <div className="flex justify-around items-center h-16">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <div className="w-6 h-6 flex items-center justify-center mb-1">
                <img
                  src={`/topIcons/${item.iconName}.svg`}
                  alt={item.label}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="text-[0.55rem] leading-none whitespace-nowrap px-1">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Padding for mobile bottom nav */}
      <div className="h-16 sm:hidden" />
    </>
  );
}
