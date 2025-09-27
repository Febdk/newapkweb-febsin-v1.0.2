"use client";

import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaTrash } from "react-icons/fa"; // Ikon hapus dari react-icons

export default function Keranjang() {
  const { cart, removeFromCart, calculateTotal } = useStore();
  const router = useRouter();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleSelectItem = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const selectedTotal = cart
    .filter((p) => selectedItems.includes(p.id))
    .reduce(
      (total, p) =>
        total + parseInt(p.price.replace("Rp ", "").replace(".", "")),
      0
    );

  const handleCheckout = () => {
    if (selectedItems.length === 0) {
      alert("Pilih produk terlebih dahulu!");
      return;
    }
    router.push("/checkout");
  };

  return (
    <div className="py-8 px-2 sm:px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-black dark:text-white">
        Keranjang Belanja
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
        Total item: {cart.length}
      </p>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400">
          Keranjang kosong.{" "}
          <button
            onClick={() => router.push("/produk")}
            className="text-orange-500 underline"
          >
            Belanja sekarang
          </button>
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {cart.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex items-center space-x-4"
            >
              <input
                type="checkbox"
                checked={selectedItems.includes(product.id)}
                onChange={() => handleSelectItem(product.id)}
                className="form-checkbox h-5 w-5 text-orange-500"
              />
              <div className="flex-1">
                <h3 className="font-bold text-black dark:text-white">
                  {product.name}
                </h3>
                <p className="text-orange-500">{product.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(product.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash size={20} />
              </button>
            </div>
          ))}
          <p className="text-right font-bold mt-4">
            Total (terpilih): Rp {selectedTotal.toLocaleString()}
          </p>
          <button
            onClick={handleCheckout}
            className="w-full bg-orange-500 text-white px-6 py-2 rounded text-base hover:bg-orange-600 transition-colors duration-300 hover:scale-105"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
