"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/lib/store";
import { toast } from "react-toastify";

type TeaserProduct = {
  name: string;
  price: string;
  category: string;
};

export default function Home() {
  const { addToCart, cart } = useStore();
  const router = useRouter();
  const [promoVisible, setPromoVisible] = useState(false);
  const teaserProducts: TeaserProduct[] = [
    // Definisi teaserProducts dengan tipe
    { name: "Kaos Polos Hitam", price: "Rp 150.000", category: "Casual" },
    { name: "Kemeja Slim Fit", price: "Rp 300.000", category: "Smart Casual" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setPromoVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleBuyNow = () => {
    if (cart.length === 0) {
      toast.warning(
        "Ups anda belum menambahkan produk! Lihat koleksi terlebih dahulu.",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          onClose: () => router.push("/produk"),
        }
      );
    } else {
      router.push("/keranjang");
    }
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

      {/* Teaser Produk */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 py-8">
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 text-black dark:text-white">
          Teaser Koleksi
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {teaserProducts.map(
            (
              product: TeaserProduct,
              index: number // Tipekan product dan index
            ) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
              >
                <div className="w-full h-32 bg-gray-300 dark:bg-gray-600 rounded-lg mb-2"></div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {product.category}
                </p>
                <h4 className="font-bold text-black dark:text-white">
                  {product.name}
                </h4>
                <p className="text-orange-500 font-bold mt-1">
                  {product.price}
                </p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Testimonial */}
      <div className="w-full py-8">
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 text-black dark:text-white">
          Apa Kata Pelanggan
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <p className="text-gray-600 dark:text-gray-400">
              "Kualitas luar biasa, desain edgy!"
            </p>
            <p className="mt-2 font-bold text-black dark:text-white">
              - Sarah K.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <p className="text-gray-600 dark:text-gray-400">
              "Sustainable dan stylish, love it!"
            </p>
            <p className="mt-2 font-bold text-black dark:text-white">
              - Andi L.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <p className="text-gray-600 dark:text-gray-400">
              "Pelayanan cepat, recommended!"
            </p>
            <p className="mt-2 font-bold text-black dark:text-white">
              - Rina S.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
