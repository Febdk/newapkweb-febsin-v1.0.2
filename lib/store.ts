import { create } from 'zustand';

type State = {
  cartCount: number;
  wishlistCount: number;
  isDarkMode: boolean;
  newsletterEmails: string[];
  addToCart: () => void;
  addToWishlist: () => void;
  toggleDarkMode: () => void;
  addNewsletterEmail: (email: string) => void;
};

export const useStore = create<State>((set) => ({
  cartCount: 0,
  wishlistCount: 0,
  isDarkMode: true,
  newsletterEmails: [],
  addToCart: () => set((state) => ({ cartCount: state.cartCount + 1 })),
  addToWishlist: () => set((state) => ({ wishlistCount: state.wishlistCount + 1 })),
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  addNewsletterEmail: (email) => set((state) => ({ newsletterEmails: [...state.newsletterEmails, email] })),
}));