"use client";

import { useStore } from "@/lib/store";
import "@/styles/globals.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isDarkMode, toggleDarkMode, cart, wishlist } = useStore();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      router.push(`/search?q=${searchQuery}`);
    }
  };

  return (
    <html lang="id" className={isDarkMode ? "dark" : ""}>
      <body className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white font-sans min-h-screen flex flex-col transition-colors duration-300">
        {/* Navbar */}
        <header className="fixed top-0 w-full bg-white dark:bg-gray-800 p-4 shadow-md z-10">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-orange-500">
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
                className="relative text-black dark:text-white hover:text-orange-500"
              >
                <FaShoppingCart size={20} />
                {cart.reduce((sum, p) => sum + p.quantity, 0) > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full px-1 text-xs">
                    {cart.reduce((sum, p) => sum + p.quantity, 0)}
                  </span>
                )}
              </Link>
              <Link
                href="/wishlist"
                className="relative text-black dark:text-white hover:text-orange-500"
              >
                <FaHeart size={20} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 text-xs">
                    {wishlist.length}
                  </span>
                )}
              </Link>
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  placeholder="Cari..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-gray-200 dark:bg-gray-700 p-1 rounded-lg text-sm w-32 sm:w-48 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </form>
              <button
                onClick={toggleDarkMode}
                className="text-black dark:text-white text-xl"
              >
                {isDarkMode ? "☀️" : "🌙"}
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow pt-16">{children}</main>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 text-black dark:text-white py-4 px-2 sm:px-4 mt-auto">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
            <div>
              <h4 className="font-bold mb-1 text-sm sm:text-base">
                Tentang Kami
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Febsin adalah brand fashion lokal yang menggabungkan modernitas
                dan nilai budaya Indonesia.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-1 text-sm sm:text-base">Kategori</h4>
              <div className="space-y-1">
                {["Casual", "Smart Casual", "Streetwear"].map((cat) => (
                  <a
                    key={cat}
                    href={`/produk?category=${cat}`}
                    className="block text-gray-600 dark:text-gray-400 hover:text-orange-500"
                  >
                    {cat}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-1 text-sm sm:text-base">
                Kontak & Newsletter
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Jakarta, Indonesia
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                +62 123 456 789
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                info@febsin.com
              </p>
              <input
                type="email"
                placeholder="Email Anda"
                className="w-full bg-gray-200 dark:bg-gray-700 p-1 sm:p-2 rounded-lg mt-1 text-sm transition-colors duration-300"
              />
              <button className="w-full bg-orange-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded mt-1 text-sm hover:bg-orange-600 transition-colors duration-300 hover:scale-105">
                Berlangganan
              </button>
            </div>
          </div>
          <div className="text-center text-gray-500 dark:text-gray-400 mt-2 text-xs sm:text-sm">
            © 2024 Febsin. All rights reserved. |{" "}
            <a href="/kebijakan-privasi" className="underline">
              Kebijakan Privasi
            </a>{" "}
            |{" "}
            <a href="/syarat-dan-kententuan" className="underline">
              Syarat & Ketentuan
            </a>{" "}
            |{" "}
            <a href="/faq" className="underline">
              FAQ
            </a>
          </div>
        </footer>

        {/* Toast Container */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </body>
    </html>
  );
}
