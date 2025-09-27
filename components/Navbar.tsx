"use client";

import { useStore } from "@/lib/store";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { isDarkMode, toggleDarkMode, cart } = useStore();
  const router = useRouter();

  return (
    <nav className="bg-white dark:bg-gray-800 p-4 shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-black dark:text-white">
          Febsin
        </Link>
        <div className="space-x-4">
          <Link
            href="/produk"
            className="text-black dark:text-white hover:text-orange-500"
          >
            Produk
          </Link>
          <Link
            href="/tentang-kami"
            className="text-black dark:text-white hover:text-orange-500"
          >
            Tentang Kami
          </Link>
          <Link
            href="/blog"
            className="text-black dark:text-white hover:text-orange-500"
          >
            Blog
          </Link>
          <Link
            href="/kontak"
            className="text-black dark:text-white hover:text-orange-500"
          >
            Kontak
          </Link>
          <Link
            href="/keranjang"
            className="text-black dark:text-white hover:text-orange-500"
          >
            Keranjang ({cart.length})
          </Link>
          <button
            onClick={toggleDarkMode}
            className="text-black dark:text-white"
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}
