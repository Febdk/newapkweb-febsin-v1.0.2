"use client";

import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";

export default function Keranjang() {
  const { cartCount } = useStore();
  const router = useRouter();

  return (
    <div className="py-8 px-2 sm:px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-black dark:text-white">
        Keranjang Belanja
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
        Total item: {cartCount}
      </p>
      {cartCount === 0 ? (
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
          {/* Placeholder item */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="font-bold text-black dark:text-white">
              Produk Contoh
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Rp 150.000</p>
            <button className="mt-2 bg-red-500 text-white px-3 py-1 rounded text-sm">
              Hapus
            </button>
          </div>
          <button className="bg-orange-500 text-white px-6 py-2 rounded text-sm hover:bg-orange-600">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
