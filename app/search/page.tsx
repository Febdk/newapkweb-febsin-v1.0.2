"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Suspense } from "react";

// Definisikan tipe untuk hasil pencarian
interface SearchResult {
  name: string;
  description: string;
}

const SearchContent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results] = useState<SearchResult[]>([
    {
      name: "Kaos Polos Hitam",
      description: "Kaos kasual dengan desain minimalis.",
    },
    {
      name: "Kemeja Slim Fit",
      description: "Kemeja elegan untuk gaya formal.",
    },
    { name: "Jaket Denim", description: "Jaket trendy dengan aksen denim." },
  ]); // Data dummy sementara

  const filteredResults = query
    ? results.filter((result) =>
        result.name.toLowerCase().includes(query.toLowerCase())
      )
    : results;

  return (
    <div className="py-8 px-2 sm:px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-black dark:text-white">
        Hasil Pencarian untuk "{query}"
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-6 text-sm">
        Menampilkan {filteredResults.length} hasil.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredResults.length === 0 ? (
          <p className="col-span-full text-center text-gray-600 dark:text-gray-400">
            Tidak ada hasil untuk "{query}". Coba kata kunci lain.
          </p>
        ) : (
          filteredResults.map((result, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
            >
              <h3 className="text-lg font-bold text-black dark:text-white">
                {result.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {result.description}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default function Search() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen text-black dark:text-white">
          Memuat hasil pencarian...
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
