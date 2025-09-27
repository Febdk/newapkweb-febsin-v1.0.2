"use client";

import { useParams } from "next/navigation";
import { useStore } from "@/lib/store";
import { toast } from "react-toastify";

export default function ProductDetail() {
  const { addToCart } = useStore();
  const { slug } = useParams();
  const products = [
    {
      id: 1,
      name: "Kaos Polos Hitam",
      price: "Rp 150.000",
      category: "Casual",
      slug: "kaos-polos-hitam",
      image: "/images/polohijau3.webp",
    },
    {
      id: 2,
      name: "Kemeja Slim Fit",
      price: "Rp 300.000",
      category: "Smart Casual",
      slug: "kemeja-slim-fit",
      image: "/images/polohitam1.png",
    },
    {
      id: 3,
      name: "Jaket Denim",
      price: "Rp 450.000",
      category: "Streetwear",
      slug: "jaket-denim",
      image: "/images/poloputih2.webp",
    },
  ];
  const product = products.find((p) => p.slug === slug);

  if (!product)
    return <div className="py-8 px-4 text-center">Produk tidak ditemukan</div>;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} ditambahkan ke keranjang!`);
  };

  return (
    <div className="py-8 px-2 sm:px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {product.category}
          </p>
          <h2 className="text-2xl font-bold text-black dark:text-white">
            {product.name}
          </h2>
          <p className="text-orange-500 font-bold mt-2">{product.price}</p>
          <button
            onClick={handleAddToCart}
            className="mt-4 w-full bg-orange-500 text-white px-4 py-2 rounded text-sm hover:bg-orange-600 transition-colors duration-300 hover:scale-105"
          >
            Tambah ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
}
