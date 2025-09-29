"use client";

import { useParams } from "next/navigation";
import { useStore } from "@/lib/store";
import { toast } from "react-toastify";
import Image from "next/image";
import { FaHeart } from "react-icons/fa"; // Pastikan import ini ada

export default function ProductDetail() {
  const { addToCart, addToWishlist, wishlist } = useStore();
  const { slug } = useParams();
  const products = [
    {
      id: 1,
      name: "Kaos Polos Hitam",
      price: "Rp 150.000",
      category: "Casual",
      slug: "kaos-polos-hitam",
      image: "/images/poloputih2.webp",
      quantity: 1,
    },
    {
      id: 2,
      name: "Kemeja Slim Fit",
      price: "Rp 300.000",
      category: "Smart Casual",
      slug: "kemeja-slim-fit",
      image: "/images/polohitam1.png",
      quantity: 1,
    },
    {
      id: 3,
      name: "Jaket Denim",
      price: "Rp 450.000",
      category: "Streetwear",
      slug: "jaket-denim",
      image: "/images/polohijau3.webp",
      quantity: 1,
    },
  ];
  const product = products.find((p) => p.slug === slug);

  if (!product)
    return (
      <div className="py-8 px-4 text-center text-black dark:text-white">
        Produk tidak ditemukan
      </div>
    );

  const isInWishlist = wishlist.some((p) => p.id === product.id);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} ditambahkan ke keranjang!`, {
      position: "top-right",
    });
  };

  const handleAddToWishlist = () => {
    if (!isInWishlist) {
      addToWishlist(product);
      toast.success(`${product.name} ditambahkan ke wishlist!`, {
        position: "top-right",
      });
    }
  };

  return (
    <div className="py-8 px-2 sm:px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={300}
            loading="lazy"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {product.category}
          </p>
          <h2 className="text-2xl font-bold text-black dark:text-white">
            {product.name}
          </h2>
          <p className="text-orange-500 font-bold mt-2">{product.price}</p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mt-4">
            <button
              onClick={handleAddToCart}
              className="w-full sm:w-auto bg-orange-500 text-white px-4 py-2 rounded text-sm hover:bg-orange-600 transition-colors duration-300 hover:scale-105"
            >
              Tambah ke Keranjang
            </button>
            <button
              onClick={handleAddToWishlist}
              className={`w-full sm:w-auto px-4 py-2 rounded text-sm ${
                isInWishlist
                  ? "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                  : "bg-red-500 text-white hover:bg-red-600 transition-colors duration-300 hover:scale-105"
              }`}
              disabled={isInWishlist}
            >
              <FaHeart className="inline mr-2" />{" "}
              {isInWishlist ? "Sudah di Wishlist" : "Tambah ke Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
