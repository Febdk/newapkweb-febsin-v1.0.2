"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/lib/store";
import { toast } from "react-toastify";

export default function Home() {
  const { addToCart } = useStore();
  const router = useRouter();
  const [promoVisible, setPromoVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setPromoVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleBuyNow = () => {
    addToCart();
    toast.success("Produk ditambahkan ke keranjang!");
    router.push("/produk");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start text-center px-2 sm:px-4 pt-16">
      {/* Hero Section */}
      <div className="max-w-md sm:max-w-lg py-8">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight animate-fadeIn">
          <span className="text-black dark:text-white">MODERNITAS,</span>
          <span className="text-orange-500"> KARAKTER,</span>
          <span className="text-black dark:text-white"> DAN KARYA LOKAL</span>
        </h1>
        <p className="mt-4 text-sm sm:text-lg text-gray-600 dark:text-gray-300">
          Febsin menghadirkan fashion berkualitas tinggi yang mencerminkan
          kekuatan karakter dan keaslian karya lokal Indonesia.
        </p>
        <div className="mt-6 space-x-2 flex flex-col sm:flex-row justify-center">
          <button
            onClick={() => router.push("/produk")}
            className="bg-orange-500 text-white px-3 sm:px-6 py-1 sm:py-2 rounded-lg text-sm sm:text-base hover:bg-orange-600 transition-colors duration-300 hover:scale-105"
          >
            Lihat Koleksi Kami
          </button>
          <button
            onClick={handleBuyNow}
            className="bg-transparent border border-black dark:border-white text-black dark:text-white px-3 sm:px-6 py-1 sm:py-2 rounded-lg text-sm sm:text-base hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300 hover:scale-105"
          >
            Beli Sekarang
          </button>
        </div>
        {promoVisible && (
          <p className="mt-4 text-sm text-green-600 animate-pulse">
            Promo: Diskon 20% untuk 48 jam berikutnya!
          </p>
        )}
      </div>

      {/* About Section */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 py-8 px-2 sm:px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 text-black dark:text-white">
          TENTANG FEBSIN
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-4 text-sm sm:text-base max-w-prose mx-auto">
          Febsin adalah perwujudan dari kekuatan karakter dan karya lokal. Kami
          berkomitmen pada sustainable fashion, mendukung pengrajin lokal, dan
          menciptakan desain yang edgy serta versatile.
        </p>
        <div className="flex justify-center">
          <svg
            className="w-48 h-48 sm:w-64 sm:h-64 text-orange-500"
            viewBox="0 0 100 100"
          >
            {/* Radar Chart Simpel (Placeholder) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="50"
              y1="10"
              x2="50"
              y2="90"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="10"
              y1="90"
              x2="90"
              y2="90"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="90"
              y1="90"
              x2="10"
              y2="90"
              stroke="currentColor"
              strokeWidth="2"
            />
            {/* Data Points (Placeholder) */}
            <circle cx="50" cy="20" r="3" fill="currentColor" />
            <circle cx="20" cy="70" r="3" fill="currentColor" />
            <circle cx="80" cy="70" r="3" fill="currentColor" />
          </svg>
        </div>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          Spektrum Gaya Febsin: Edgy, Versatile, Sustainable, Local.
        </p>
      </div>
    </div>
  );
}
