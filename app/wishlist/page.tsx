'use client';

import { useStore } from '@/lib/store';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

export default function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart } = useStore();
  const router = useRouter();

  const handleAddToCart = (product: any) => {
    addToCart(product);
    removeFromWishlist(product.id);
    toast.success(`${product.name} dipindahkan ke keranjang!`, { position: 'top-right' });
  };

  return (
    <div className="py-8 px-2 sm:px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-black dark:text-white">Wishlist</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Total item: {wishlist.length}</p>
      {wishlist.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400">
          Wishlist kosong.{' '}
          <button
            onClick={() => router.push('/produk')}
            className="text-orange-500 underline"
          >
            Jelajahi produk
          </button>
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex items-center space-x-4 sm:space-x-6"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                loading="lazy"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-bold text-black dark:text-white">{product.name}</h3>
                <p className="text-orange-500">{product.price}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-orange-500 text-white px-3 py-1 rounded text-sm hover:bg-orange-600 transition-colors duration-300 hover:scale-105 sm:px-4"
                >
                  Pindah ke Keranjang
                </button>
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}