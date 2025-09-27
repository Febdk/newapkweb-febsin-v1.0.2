'use client';

import { useState } from 'react';
import { useStore } from '../lib/store';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const { isDarkMode, toggleDarkMode, cartCount } = useStore();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      router.push(`/search?q=${searchQuery}`);
    }
  };

  return (
    <nav className="bg-black p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-orange-500 text-xl font-bold">Febsin</div>
      <ul className="flex space-x-6">
        <li><a href="/" className="text-white">Home</a></li>
        <li><a href="/produk" className="text-white">Produk</a></li>
        <li><a href="/tentang-kami" className="text-white">Tentang Kami</a></li>
        <li><a href="/blog" className="text-white">Blog</a></li>
        <li><a href="/kontak" className="text-white">Kontak</a></li>
        <li>
          <input type="text" placeholder="Cari produk.." className="p-2 rounded-lg text-black" 
                 value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={handleSearch} />
        </li>
        <li>
          <button onClick={toggleDarkMode} className="text-white">{isDarkMode ? '☀️' : '🌙'}</button>
        </li>
        <li>
          <a href="/keranjang" className="text-white relative">🛒 <span className="bg-orange-500 text-white rounded-full px-1 absolute -top-2 -right-2">{cartCount}</span></a>
        </li>
      </ul>
    </nav>
  );
}