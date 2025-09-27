import { create } from "zustand";
import { persist } from "zustand/middleware";

// --- DEFINISI TIPE ---

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
};

// Gunakan Omit untuk fungsi yang menambahkan produk baru, karena quantity akan diset ke 1
type ProductInput = Omit<Product, "quantity">;

// Definisikan State penuh
type State = {
  cart: Product[];
  wishlist: Product[]; // Data yang di-persist
  wishlistCount: number; // Data yang di-persist
  isDarkMode: boolean; // Data yang di-persist
  newsletterEmails: string[]; // Data yang di-persist

  // Method Signatures:
  addToCart: (product: ProductInput) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  addToWishlist: (product: ProductInput) => void;
  removeFromWishlist: (id: number) => void;
  calculateTotal: () => number;
  toggleDarkMode: () => void;
  addNewsletterEmail: (email: string) => void;
};

// Definisikan tipe untuk Data yang disimpan (Hanya data, bukan fungsi)
type PersistedState = Pick<
  State,
  "cart" | "wishlist" | "wishlistCount" | "isDarkMode" | "newsletterEmails"
>;

// --- STORE IMPLEMENTATION ---

export const useStore = create<State>()(
  // Gunakan 'persist' tanpa generic <State> di sini, karena sudah ada di create<State>()
  persist(
    (set, get) => ({
      // Inisialisasi State
      cart: [],
      wishlist: [],
      wishlistCount: 0,
      isDarkMode: true,
      newsletterEmails: [],

      // Definisi Methods
      addToCart: (product) =>
        set((state) => {
          const existing = state.cart.find((p) => p.id === product.id);
          if (existing) {
            return {
              cart: state.cart.map((p) =>
                p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
              ),
            };
          }
          return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),

      removeFromCart: (id) =>
        set((state) => ({ cart: state.cart.filter((p) => p.id !== id) })),

      updateQuantity: (id, quantity) =>
        set((state) => ({
          cart: state.cart.map((p) =>
            // Fix: Minimal 1, Max 10 (jika diinginkan)
            p.id === id
              ? { ...p, quantity: Math.max(1, Math.min(10, quantity)) }
              : p
          ),
        })), // <-- SINTAKS SUDAH BENAR DI SINI

      addToWishlist: (product) =>
        set((state) => {
          // Gunakan product input, tetapkan quantity ke 1 jika belum ada
          const existing = state.wishlist.find((p) => p.id === product.id);
          if (existing) return state;
          return {
            wishlist: [...state.wishlist, { ...product, quantity: 1 }],
            wishlistCount: state.wishlistCount + 1,
          };
        }),

      removeFromWishlist: (id) =>
        set((state) => ({
          wishlist: state.wishlist.filter((p) => p.id !== id),
          wishlistCount: state.wishlist.find((p) => p.id === id)
            ? state.wishlistCount - 1
            : state.wishlistCount, // Kurangi hitungan hanya jika item ditemukan
        })),

      calculateTotal: () =>
        get().cart.reduce(
          (total, p) =>
            total +
            parseInt(p.price.replace("Rp ", "").replace(".", "")) * p.quantity,
          0
        ),

      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),

      addNewsletterEmail: (email) =>
        set((state) => ({
          newsletterEmails: [...state.newsletterEmails, email],
        })),
    }),
    {
      name: "febsin-store",
      // partialize hanya mengembalikan data yang disetujui di PersistedState
      partialize: (state) => ({
        cart: state.cart,
        wishlist: state.wishlist, // Tambahkan wishlist ke partialize
        wishlistCount: state.wishlistCount,
        isDarkMode: state.isDarkMode,
        newsletterEmails: state.newsletterEmails,
      }),
      // HILANGKAN 'as PersistedState' dan gunakan 'as const' untuk stabilitas
    } as const
  )
);
