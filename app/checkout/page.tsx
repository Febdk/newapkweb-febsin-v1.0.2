"use client";

import { useStore } from "@/lib/store";
import { useState } from "react";

export default function Checkout() {
  const { cart, calculateTotal } = useStore();
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    shipping: "JNE",
    payment: "Transfer Bank",
    discountCode: "",
  });
  const [error, setError] = useState("");

  const total = calculateTotal();
  const discountedTotal =
    form.discountCode === "DISKON20" ? total * 0.8 : total; // Contoh diskon 20% kalau kode benar

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.address || !form.phone) {
      setError("Semua field harus diisi!");
      return;
    }
    alert(
      `Pesanan berhasil! Total: Rp ${discountedTotal.toLocaleString()}. Terima kasih, ${
        form.name
      }!`
    );
  };

  return (
    <div className="py-8 px-2 sm:px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-black dark:text-white">
        Verifikasi Checkout
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
        Total item: {cart.length} | Total Harga: Rp{" "}
        {discountedTotal.toLocaleString()}
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Nama"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full bg-gray-200 dark:bg-gray-700 p-2 rounded-lg text-sm"
        />
        <input
          type="text"
          placeholder="Alamat Pengiriman"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          className="w-full bg-gray-200 dark:bg-gray-700 p-2 rounded-lg text-sm"
        />
        <input
          type="tel"
          placeholder="Nomor Telepon"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full bg-gray-200 dark:bg-gray-700 p-2 rounded-lg text-sm"
        />
        <select
          value={form.shipping}
          onChange={(e) => setForm({ ...form, shipping: e.target.value })}
          className="w-full bg-gray-200 dark:bg-gray-700 p-2 rounded-lg text-sm"
        >
          <option>JNE</option>
          <option>Tiki</option>
          <option>GoSend</option>
        </select>
        <select
          value={form.payment}
          onChange={(e) => setForm({ ...form, payment: e.target.value })}
          className="w-full bg-gray-200 dark:bg-gray-700 p-2 rounded-lg text-sm"
        >
          <option>Transfer Bank</option>
          <option>E-Wallet (GoPay/OVO)</option>
          <option>Kredit Card</option>
        </select>
        <input
          type="text"
          placeholder="Kode Diskon"
          value={form.discountCode}
          onChange={(e) => setForm({ ...form, discountCode: e.target.value })}
          className="w-full bg-gray-200 dark:bg-gray-700 p-2 rounded-lg text-sm"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white px-6 py-2 rounded text-base hover:bg-orange-600 transition-colors duration-300 hover:scale-105"
        >
          Konfirmasi Pesanan
        </button>
      </form>
    </div>
  );
}
