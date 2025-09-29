'use client';

import Link from 'next/link';
import { useStore } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

export default function Navbar() {
  const { cart, wishlist, toggleDarkMode, isDarkMode } = useStore();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      router.push(`/search?q=${searchQuery}`);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 p-4 shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-orange-500">
          Febsin
        </Link>
        <div className="flex space-x-4 items-center">
          <Link href="/" className="text-black dark:text-white hover:text-orange-500">
            Home
          </Link>
          <Link href="/produk" className="text-black dark:text-white hover:text-orange-500">
            Produk
          </Link>
          <Link href="/tentang-kami" className="text-black dark:text-white hover:text-orange-500">
            Tentang Kami
          </Link>
          <Link href="/blog" className="text-black dark:text-white hover:text-orange-500">
            Blog
          </Link>
          <Link href="/kontak" className="text-black dark:text-white hover:text-orange-500">
            Kontak
          </Link>
          <Link href="/keranjang" className="relative text-black dark:text-white hover:text-orange-500">
            <FaShoppingCart size={20} />
            {cart.reduce((sum, p) => sum + p.quantity, 0) > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full px-1 text-xs">
                {cart.reduce((sum, p) => sum + p.quantity, 0)}
              </span>
            )}
          </Link>
          <Link href="/wishlist" className="relative text-black dark:text-white hover:text-orange-500">
            <FaHeart size={20} />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 text-xs">
                {wishlist.length}
              </span>
            )}
          </Link>
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="text"
              placeholder="Cari..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-200 dark:bg-gray-700 p-1 rounded-lg text-sm w-32 sm:w-48 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </form>
          <button
            onClick={toggleDarkMode}
            className="text-black dark:text-white text-xl"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}