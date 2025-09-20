"use client";

import { useState } from "react";

export default function Contact() {
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 md:1/2 lg:1/3 mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        お問い合わせフォーム
      </h1>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">お名前</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="例：山田 太郎"
          />
        </div>
        <div>
          <label className="block text-gray-700">メールアドレス</label>
          <input
            type="email"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="example@example.com"
          />
        </div>
        <div>
          <label className="block text-gray-700">電話番号</label>
          <input
            type="tel"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="000-0000-0000"
          />
        </div>
        <div>
          <label className="block text-gray-700">お問い合わせ内容</label>
          <textarea
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
            placeholder="お問い合わせ内容をご記入ください。"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          送信
        </button>
      </form>
    </div>
  );
}
