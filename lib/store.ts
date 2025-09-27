import { create } from "zustand";
import { persist } from "zustand/middleware";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

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

export const useStore = create(
  persist<State>(
    (set, get) => ({
      cart: [],
      wishlistCount: 0,
      isDarkMode: true,
      newsletterEmails: [],
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
      partialize: (state) =>
        ({
          cart: state.cart,
          wishlistCount: state.wishlistCount,
          isDarkMode: state.isDarkMode,
          newsletterEmails: state.newsletterEmails,
        } as Pick<
          State,
          "cart" | "wishlistCount" | "isDarkMode" | "newsletterEmails"
        >), // Pastikan semua properti data ada
    }
  )
);
