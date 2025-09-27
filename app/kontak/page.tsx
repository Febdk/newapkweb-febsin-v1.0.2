"use client";

import { useState } from "react";

export default function Kontak() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Semua field harus diisi!");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Email tidak valid!");
      return;
    }
    setError("");
    alert(`Terima kasih, ${form.name}! Pesan Anda telah dikirim.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="py-8 px-2 sm:px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-black dark:text-white">
        HUBUNGI KAMI
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base max-w-prose mx-auto">
        Kami siap membantu Anda dengan pertanyaan atau kolaborasi.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-bold text-black dark:text-white mb-2">
            Kontak Info
          </h3>
          <p className="text-gray-600 dark:text-gray-400">Jakarta, Indonesia</p>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            +62 123 456 789
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            info@febsin.com
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-black dark:text-white mb-2">
            Kirim Pesan
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Nama"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-gray-200 dark:bg-gray-700 p-2 rounded-lg text-sm transition-colors duration-300"
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-gray-200 dark:bg-gray-700 p-2 rounded-lg text-sm transition-colors duration-300"
            />
            <textarea
              placeholder="Pesan"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-gray-200 dark:bg-gray-700 p-2 rounded-lg h-24 text-sm transition-colors duration-300"
            ></textarea>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white px-3 py-2 rounded text-sm hover:bg-orange-600 transition-colors duration-300 hover:scale-105"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
