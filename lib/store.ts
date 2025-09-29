import { create } from "zustand";
import { persist } from "zustand/middleware";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
};

type State = {
  cart: Product[];
  wishlist: Product[];
  wishlistCount: number;
  isDarkMode: boolean;
  newsletterEmails: string[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: number) => void;
  calculateTotal: () => number;
  toggleDarkMode: () => void;
  addNewsletterEmail: (email: string) => void;
};

type PersistedState = Pick<
  State,
  "cart" | "wishlist" | "wishlistCount" | "isDarkMode" | "newsletterEmails"
>;

const partializeState = (state: State): Partial<State> => ({
  cart: state.cart,
  wishlist: state.wishlist,
  wishlistCount: state.wishlistCount,
  isDarkMode: state.isDarkMode,
  newsletterEmails: state.newsletterEmails,
});

export const useStore = create<State>()(
  persist<State>(
    (set, get) => ({
      cart: [],
      wishlist: [],
      wishlistCount: 0,
      isDarkMode: true,
      newsletterEmails: [],
      addToCart: (product: Product) =>
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
      removeFromCart: (id: number) =>
        set((state) => ({ cart: state.cart.filter((p) => p.id !== id) })),
      updateQuantity: (id: number, quantity: number) =>
        set((state) => ({
          cart: state.cart.map((p) =>
            p.id === id ? { ...p, quantity: Math.max(1, Math.min(10, quantity)) } : p
          ),
        })),
      addToWishlist: (product: Product) =>
        set((state) => {
          const existing = state.wishlist.find((p) => p.id === product.id);
          if (existing) return state;
          return {
            wishlist: [...state.wishlist, { ...product, quantity: 1 }],
            wishlistCount: state.wishlistCount + 1,
          };
        }),
      removeFromWishlist: (id: number) =>
        set((state) => ({
          wishlist: state.wishlist.filter((p) => p.id !== id),
          wishlistCount: state.wishlistCount - 1,
        })),
      calculateTotal: () =>
        get().cart.reduce(
          (total, p) =>
            total +
            parseInt(p.price.replace("Rp ", "").replace(".", "")) * p.quantity,
          0
        ),
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      addNewsletterEmail: (email: string) =>
        set((state) => ({
          newsletterEmails: [...state.newsletterEmails, email],
        })),
    }),
    {
      name: "febsin-store",
      partialize: partializeState as any, // Temporary cast to bypass strict typing
    }
  )
);