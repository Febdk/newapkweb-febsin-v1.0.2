"use client";

import Link from "next/link";
import { useStore } from "@/lib/store";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

export default function Navbar() {
  const { cart, wishlist, toggleDarkMode, isDarkMode } = useStore();

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-orange-500">
          Febsin
        </Link>
        <div className="flex space-x-4 items-center">
          <Link
            href="/"
            className="text-black dark:text-white hover:text-orange-500"
          >
            Home
          </Link>
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
            className="relative text-black dark:text-white"
          >
            <FaShoppingCart size={20} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full px-2 text-xs">
                {cart.reduce((sum, p) => sum + p.quantity, 0)}
              </span>
            )}
          </Link>
          <Link
            href="/wishlist"
            className="relative text-black dark:text-white"
          >
            <FaHeart size={20} />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
                {wishlist.length}
              </span>
            )}
          </Link>
          <button
            onClick={toggleDarkMode}
            className="text-black dark:text-white"
          >
            {isDarkMode ? "🌞" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}
