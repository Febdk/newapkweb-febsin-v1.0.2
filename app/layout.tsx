"use client";

import { useStore } from "@/lib/store";
import "@/styles/globals.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isDarkMode, toggleDarkMode, cart } = useStore(); // Ganti cartCount dengan cart
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value) {
      router.push(`/search?q=${e.target.value}`);
    }
  };

  return (
    <html lang="id" className={isDarkMode ? "dark" : ""}>
      <body className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white font-sans min-h-screen flex flex-col transition-colors duration-300">
        {/* Navbar */}
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
              {/* Tambah link keranjang kalau perlu */}
            </nav>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Cari produk..."
                className="bg-gray-200 dark:bg-gray-700 p-1 sm:p-2 rounded-lg text-sm transition-colors duration-300"
              />
              <button
                onClick={toggleDarkMode}
                className="text-black dark:text-white"
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
            <a href="/syarat-dan-ketentuan" className="underline">
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
