"use client";

import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const { isDarkMode, toggleDarkMode, cartCount } = useStore();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Tipe eksplisit di sini
    const value = e.target.value;
    setSearchQuery(value);
    if (value) {
      router.push(`/search?q=${value}`);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-800 z-50 shadow-md px-2 sm:px-4 transition-colors duration-300">
      <div className="container mx-auto py-2 sm:py-4 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
        <div className="text-lg sm:text-2xl font-bold text-orange-500">
          Febsin
        </div>
        <nav className="flex flex-wrap justify-center space-x-1 sm:space-x-4 text-xs sm:text-base">
          <a href="/" className="hover:text-orange-500 px-1">
            Home
          </a>
          <a href="/produk" className="hover:text-orange-500 px-1">
            Produk
          </a>
          <a href="/tentang-kami" className="hover:text-orange-500 px-1">
            Tentang Kami
          </a>
          <a href="/blog" className="hover:text-orange-500 px-1">
            Blog
          </a>
          <a href="/kontak" className="hover:text-orange-500 px-1">
            Kontak
          </a>
        </nav>
        <div className="flex space-x-1 sm:space-x-4 items-center">
          <input
            type="text"
            placeholder="Cari..."
            value={searchQuery}
            onChange={handleSearch}
            className="bg-gray-200 dark:bg-gray-700 p-1 sm:p-2 rounded-lg text-black dark:text-white w-20 sm:w-auto transition-colors duration-300"
          />
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              toggleDarkMode();
            }}
            className="text-black dark:text-white text-xl hover:scale-105 transition-transform duration-200"
          >
            {isDarkMode ? "🌙" : "☀️"}
          </button>
          <div className="relative" onClick={() => router.push("/keranjang")}>
            <span className="bg-orange-500 text-white rounded-full w-2 h-2 flex items-center justify-center text-[8px] absolute -top-1 -right-1">
              {cartCount}
            </span>
            <svg
              className="w-4 sm:w-6 h-4 sm:h-6 text-black dark:text-white transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
