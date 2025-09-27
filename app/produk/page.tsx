'use client';

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useStore } from "@/lib/store";
import { toast } from "react-toastify";

export default function Produk() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { addToCart } = useStore();
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get("category") || "Semua"
  );
  const [products] = useState([
    {
      id: 1,
      name: "Kaos Polos Hitam",
      price: "Rp 150.000",
      oldPrice: "Rp 200.000",
      category: "Casual",
      slug: "kaos-polos-hitam",
    },
    {
      id: 2,
      name: "Kemeja Slim Fit",
      price: "Rp 300.000",
      oldPrice: "Rp 350.000",
      category: "Smart Casual",
      slug: "kemeja-slim-fit",
    },
    {
      id: 3,
      name: "Jaket Denim",
      price: "Rp 450.000",
      oldPrice: "Rp 500.000",
      category: "Streetwear",
      slug: "jaket-denim",
    },
  ]);

  const filteredProducts =
    activeCategory === "Semua"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleAddToCart = (product: any) => {
    addToCart();
    toast.success(`${product.name} ditambahkan ke keranjang!`);
  };

  useEffect(() => {
    setActiveCategory(searchParams.get("category") || "Semua");
  }, [searchParams]);

  return (
    <div className="py-4 sm:py-8 px-2 sm:px-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-4">
        Koleksi Unggulan
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-2 sm:mb-4 text-sm sm:text-base">
        Jelajahi koleksi terbaik kami
      </p>
      <div className="flex flex-wrap justify-center space-x-1 sm:space-x-2 mb-2 sm:mb-4">
        {[
          "Semua",
          "Casual",
          "Smart Casual",
          "Chic",
          "Streetwear",
          "Vintage",
          "Formal",
        ].map((category) => (
          <button
            key={category}
            onClick={() => {
              router.push(`/produk?category=${category}`);
            }}
            className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm ${
              activeCategory === category
                ? "bg-orange-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
            } hover:bg-orange-600 transition`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 p-2 sm:p-3 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="relative">
              <div className="bg-orange-500 text-white px-1 py-0.5 text-[10px] sm:text-xs rounded-tl-lg absolute top-0 left-0">
                Baru
              </div>
              <div className="w-full h-24 sm:h-32 md:h-40 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mt-1 text-xs sm:text-sm">
              {product.category}
            </p>
            <h3 className="text-black dark:text-white font-bold mt-1 text-sm sm:text-base">
              {product.name}
            </h3>
            <div className="flex space-x-1 mt-1">
              <span className="text-orange-500 font-bold text-sm">
                {product.price}
              </span>
              <span className="text-gray-500 dark:text-gray-400 line-through text-xs sm:text-sm">
                {product.oldPrice}
              </span>
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-2 w-full bg-orange-500 text-white px-2 py-1 rounded text-xs sm:text-sm hover:bg-orange-600 transition"
            >
              Tambah ke Keranjang
            </button>
            <button
              onClick={() => router.push(`/produk/${product.slug}`)}
              className="mt-1 w-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-2 py-1 rounded text-xs sm:text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              Lihat Detail
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
