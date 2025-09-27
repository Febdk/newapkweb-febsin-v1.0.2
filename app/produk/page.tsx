"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useStore } from "@/lib/store";
import { toast } from "react-toastify";

const ProductList = () => {
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
      image: "/images/poloputih2.webp",
    },
    {
      id: 2,
      name: "Kemeja Slim Fit",
      price: "Rp 300.000",
      oldPrice: "Rp 350.000",
      category: "Smart Casual",
      slug: "kemeja-slim-fit",
      image: "/images/polohitam1.png",
    },
    {
      id: 3,
      name: "Jaket Denim",
      price: "Rp 450.000",
      oldPrice: "Rp 500.000",
      category: "Streetwear",
      slug: "jaket-denim",
      image: "/images/polohijau3.webp",
    },
  ]);

  const filteredProducts =
    activeCategory === "Semua"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleAddToCart = (product: any) => {
    addToCart(product); // Tambah object product, bukan cuma increment count
    toast.success(`${product.name} ditambahkan ke keranjang!`);
  };

  useEffect(() => {
    setActiveCategory(searchParams.get("category") || "Semua");
  }, [searchParams]);

  return (
    <div className="py-8 px-2 sm:px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-black dark:text-white">
        KOLEKSI TOPS FEBSIN
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base max-w-prose mx-auto">
        Jelajahi koleksi tops kami yang dirancang untuk menggabungkan gaya
        modern dengan nilai lokal Indonesia.
      </p>
      <div className="flex flex-wrap justify-center space-x-2 mb-6">
        {["Semua", "Casual", "Smart Casual", "Streetwear"].map((category) => (
          <button
            key={category}
            onClick={() => {
              router.push(`/produk?category=${category}`);
            }}
            className={`px-3 py-1 rounded-full text-sm ${
              activeCategory === category
                ? "bg-orange-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
            } hover:bg-orange-600 transition-colors duration-300 hover:scale-105`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-all duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-2"
            />
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {product.category}
            </p>
            <h3 className="text-lg font-bold text-black dark:text-white">
              {product.name}
            </h3>
            <div className="flex space-x-2 mt-2">
              <span className="text-orange-500 font-bold">{product.price}</span>
              <span className="text-gray-500 dark:text-gray-400 line-through">
                {product.oldPrice}
              </span>
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 w-full bg-orange-500 text-white px-3 py-2 rounded text-sm hover:bg-orange-600 transition-colors duration-300 hover:scale-105"
            >
              Tambah ke Keranjang
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Produk() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen text-black dark:text-white">
          Memuat produk...
        </div>
      }
    >
      <ProductList />
    </Suspense>
  );
}
