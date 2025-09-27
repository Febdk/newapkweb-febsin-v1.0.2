'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/lib/store";

export default function Blog() {
  const router = useRouter();
  const { addNewsletterEmail } = useStore();
  const [activeCategory, setActiveCategory] = useState("Semua Artikel");
  const [email, setEmail] = useState("");

  const categories = ["Semua Artikel", "Tentang Kami", "Tren Fashion"];
  const articles = [
    {
      id: 1,
      title: "Tips Memilih Fashion Sesuai Kepribadian",
      slug: "tips-fashion",
      category: "Tren Fashion",
    },
    {
      id: 2,
      title: "Sejarah Febsin",
      slug: "sejarah-febsin",
      category: "Tentang Kami",
    },
    {
      id: 3,
      title: "Trend Streetwear 2025",
      slug: "trend-streetwear",
      category: "Tren Fashion",
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
    <div className="py-4 sm:py-8 px-2 sm:px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4">
        <div className="md:col-span-2 order-2 md:order-1">
          <div className="bg-white dark:bg-gray-800 p-2 sm:p-3 rounded-lg mb-2 sm:mb-4">
            <div className="w-full h-24 sm:h-32 bg-gray-300 dark:bg-gray-600 rounded-lg mb-1 sm:mb-2"></div>
            <div className="bg-orange-500 text-white px-1 py-0.5 text-[10px] sm:text-xs rounded-tl-lg inline-block mb-0.5 sm:mb-1">
              Featured
            </div>
            <h3 className="text-xs sm:text-sm md:text-xl font-bold text-black dark:text-white">
              Tips Memilih Fashion Sesuai Kepribadian
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-0.5 sm:mt-1 text-[10px] sm:text-xs">
              Pelajari cara memilih pakaian...
            </p>
            <button
              onClick={() => router.push("/blog/tips-fashion")}
              className="mt-0.5 sm:mt-1 bg-orange-500 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm hover:bg-orange-600 transition"
            >
              Baca Selengkapnya
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {filteredArticles
              .filter((a) => a.category !== "Tren Fashion")
              .map((article) => (
                <div
                  key={article.id}
                  className="bg-white dark:bg-gray-800 p-2 sm:p-3 rounded-lg"
                >
                  <div className="w-full h-16 sm:h-20 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
                  <h4 className="text-black dark:text-white font-bold mt-0.5 sm:mt-1 text-xs sm:text-sm">
                    {article.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-0.5 text-[10px] sm:text-xs">
                    Snippet...
                  </p>
                  <button
                    onClick={() => router.push(`/blog/${article.slug}`)}
                    className="mt-0.5 sm:mt-1 bg-orange-500 text-white px-1 sm:px-2 py-0.5 rounded text-xs sm:text-sm hover:bg-orange-600 transition"
                  >
                    Baca Selengkapnya
                  </button>
                </div>
              ))}
          </div>
        </div>
        <aside className="order-1 md:order-2 space-y-1 sm:space-y-2">
          <div>
            <h4 className="font-bold mb-0.5 sm:mb-1 text-xs sm:text-sm">
              Kategori Blog
            </h4>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`block w-full text-left px-0.5 sm:px-1 py-0.5 rounded text-xs ${
                  activeCategory === cat
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                } hover:bg-orange-600 transition`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div>
            <h4 className="font-bold mb-0.5 sm:mb-1 text-xs sm:text-sm">
              Arsip Blog
            </h4>
            {["September 2025", "Agustus 2025"].map((archive) => (
              <p key={archive} className="px-0.5 sm:px-1 py-0.5 text-xs">
                {archive}
              </p>
            ))}
          </div>
          <div>
            <form onSubmit={handleSubscribe} className="space-y-1">
              <input
                type="email"
                placeholder="Email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-200 dark:bg-gray-700 p-0.5 sm:p-1 rounded-lg mb-0.5 sm:mb-1 text-xs sm:text-sm"
                required
              />
              <button
                type="submit"
                className="w-full bg-orange-500 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm hover:bg-orange-600 transition"
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
