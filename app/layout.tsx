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
  const { isDarkMode, toggleDarkMode, cartCount } = useStore();
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
                onClick={toggleDarkMode}
                className="text-black dark:text-white text-xl hover:scale-105 transition-transform duration-200"
              >
                {isDarkMode ? "🌙" : "☀️"}
              </button>
              <div
                className="relative"
                onClick={() => router.push("/keranjang")}
              >
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

        {/* Main Content */}
        <main className="flex-grow pt-16 pb-16">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-200 dark:bg-gray-800 py-4 sm:py-8 px-2 sm:px-4 transition-colors duration-300">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
            <div>
              <h4 className="font-bold mb-1 text-sm sm:text-base">Febsin</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Fashion dengan Karakter Kuat
              </p>
              <div className="flex space-x-1 mt-1">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-white"
                >
                  I
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-white"
                >
                  F
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-white"
                >
                  T
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-white"
                >
                  T
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-1 text-sm sm:text-base">
                Menu Utama
              </h4>
              {["Home", "Produk", "Tentang Kami", "Blog", "Kontak"].map(
                (link) => (
                  <a
                    key={link}
                    href={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="block text-gray-600 dark:text-gray-400 text-sm hover:text-orange-500 transition-colors duration-300"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
            <div>
              <h4 className="font-bold mb-1 text-sm sm:text-base">Kategori</h4>
              {["Casual", "Smart Casual", "Chic", "Streetwear"].map((cat) => (
                <a
                  key={cat}
                  href={`/produk?category=${cat}`}
                  className="block text-gray-600 dark:text-gray-400 text-sm hover:text-orange-500 transition-colors duration-300"
                >
                  {cat}
                </a>
              ))}
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
  