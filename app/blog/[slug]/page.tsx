"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/lib/store";

export default function Blog() {
  const router = useRouter();
  const { addNewsletterEmail } = useStore();
  const [email, setEmail] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua Artikel");
  const articles = [
    {
      id: 1,
      title: "Tips Memilih Fashion Sesuai Kepribadian",
      slug: "tips-fashion",
      category: "Tren Fashion",
    },
    {
      id: 2,
      title: "Sejarah di Balik Febsin",
      slug: "sejarah-febsin",
      category: "Tentang Kami",
    },
  ];

  const filteredArticles =
    activeCategory === "Semua Artikel"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      addNewsletterEmail(email);
      alert(`Terima kasih, ${email} telah berlangganan!`);
      setEmail("");
    }
  };

  return (
    <div className="py-8 px-2 sm:px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-black dark:text-white">
        BLOG FEBSIN
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base max-w-prose mx-auto">
        Baca artikel terbaru tentang tren fashion dan cerita di balik Febsin.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="w-full h-32 bg-gray-300 dark:bg-gray-600 rounded-lg mb-2"></div>
              <h3 className="text-lg font-bold text-black dark:text-white">
                {article.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                Pelajari lebih lanjut tentang {article.category.toLowerCase()}
                ...
              </p>
              <button
                onClick={() => router.push(`/blog/${article.slug}`)}
                className="mt-4 bg-orange-500 text-white px-3 py-2 rounded text-sm hover:bg-orange-600 transition-colors duration-300 hover:scale-105"
              >
                Baca Selengkapnya
              </button>
            </div>
          ))}
        </div>
        <aside className="space-y-4">
          <div>
            <h4 className="font-bold text-black dark:text-white mb-2">
              Kategori
            </h4>
            {["Semua Artikel", "Tren Fashion", "Tentang Kami"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`block w-full text-left px-2 py-1 rounded text-sm ${
                  activeCategory === cat
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                } hover:bg-orange-600 transition-colors duration-300`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div>
            <h4 className="font-bold text-black dark:text-white mb-2">
              Newsletter
            </h4>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                placeholder="Email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-200 dark:bg-gray-700 p-2 rounded-lg text-sm transition-colors duration-300"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 text-white px-3 py-2 rounded text-sm hover:bg-orange-600 transition-colors duration-300 hover:scale-105"
              >
                Berlangganan
              </button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
}
