import { create } from "zustand";
import { persist } from "zustand/middleware";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
};

// Gunakan Omit untuk fungsi yang menambahkan produk baru
type ProductInput = Omit<Product, "quantity">;

// Definisikan State penuh
type State = {
  cart: Product[];
  wishlist: Product[];
  wishlistCount: number;
  isDarkMode: boolean;
  newsletterEmails: string[];

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

// Definisikan tipe untuk Data yang disimpan
type PersistedState = Pick<
  State,
  "cart" | "wishlist" | "wishlistCount" | "isDarkMode" | "newsletterEmails"
>;

export const useStore = create<State>()(
  // Gunakan persist tanpa generic kedua, agar tidak memicu TS2345/TS2344
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],
      wishlistCount: 0,
      isDarkMode: true,
      newsletterEmails: [],

      // Metode Cart
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
            p.id === id
              ? { ...p, quantity: Math.max(1, Math.min(10, quantity)) }
              : p
          ),
        })), // <-- PERBAIKAN: Koma (,) ditambahkan di sini

      // Metode Wishlist
      addToWishlist: (product) =>
        set((state) => {
          const existing = state.wishlist.find((p) => p.id === product.id);
          if (existing) return state;
          return {
            wishlist: [...state.wishlist, { ...product, quantity: 1 }],
            wishlistCount: state.wishlistCount + 1,
          };
        }),

      removeFromWishlist: (id) =>
        set((state) => {
          const isProductInWishlist = state.wishlist.some((p) => p.id === id);

          return {
            wishlist: state.wishlist.filter((p) => p.id !== id),
            // Kurangi count hanya jika produk ditemukan dan dihapus
            wishlistCount: isProductInWishlist
              ? state.wishlistCount - 1
              : state.wishlistCount,
          };
        }),

      // Metode Lain
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
      partialize: (state) => ({
        cart: state.cart,
        wishlist: state.wishlist,
        wishlistCount: state.wishlistCount,
        isDarkMode: state.isDarkMode,
        newsletterEmails: state.newsletterEmails,
      }),
    } as const // Menggunakan 'as const' untuk mengatasi sisa konflik typing di Zustand
  )
);
