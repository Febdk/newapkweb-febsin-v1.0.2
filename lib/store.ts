import { create } from "zustand";
import { persist } from "zustand/middleware"; 

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

// Definisikan State penuh (termasuk methods)
type State = {
  cart: Product[];
  wishlistCount: number;
  isDarkMode: boolean;
  newsletterEmails: string[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  calculateTotal: () => number;
  addToWishlist: () => void;
  toggleDarkMode: () => void;
  addNewsletterEmail: (email: string) => void;
};

// Definisikan tipe untuk Data yang disimpan (Pick dari State)
type PersistedState = Pick<
  State,
  "cart" | "wishlistCount" | "isDarkMode" | "newsletterEmails"
>;


// PERBAIKAN UTAMA: Tambahkan <State> pada create()
export const useStore = create<State>()(
  // Hilangkan generic kedua pada persist, biarkan hanya <State>
  persist(
    (set, get) => ({
      // Inisialisasi State
      cart: [],
      wishlistCount: 0,
      isDarkMode: true,
      newsletterEmails: [],
      
      // Definisi Methods
      addToCart: (product) =>
        set((state) => ({ cart: [...state.cart, product] })),
      removeFromCart: (id) =>
        set((state) => ({ cart: state.cart.filter((p) => p.id !== id) })),
      calculateTotal: () =>
        get().cart.reduce(
          (total, p) =>
            total + parseInt(p.price.replace("Rp ", "").replace(".", "")),
          0
        ),
      addToWishlist: () =>
        set((state) => ({ wishlistCount: state.wishlistCount + 1 })),
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      addNewsletterEmail: (email) =>
        set((state) => ({
          newsletterEmails: [...state.newsletterEmails, email],
        })),
    }),
    {
      name: "febsin-store",
      // Gunakan partialize dan Type Assertion yang telah disiapkan
      partialize: (state) => 
        ({
          cart: state.cart,
          wishlistCount: state.wishlistCount,
          isDarkMode: state.isDarkMode,
          newsletterEmails: state.newsletterEmails,
        } as PersistedState), // Gunakan PersistedState
    }
  )
);