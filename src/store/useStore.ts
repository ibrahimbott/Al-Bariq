import { create } from 'zustand';

interface StoreState {
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
  cart: any[];
  addToCart: (product: any) => void;
  removeFromCart: (productId: string) => void;
  wishlist: any[];
  toggleWishlist: (product: any) => void;
}

export const useStore = create<StoreState>((set) => ({
  language: 'en',
  setLanguage: (lang) => set({ language: lang }),
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (productId) => set((state) => ({ cart: state.cart.filter((item) => item.id !== productId) })),
  wishlist: [],
  toggleWishlist: (product) =>
    set((state) => {
      const exists = state.wishlist.find((item) => item.id === product.id);
      if (exists) {
        return { wishlist: state.wishlist.filter((item) => item.id !== product.id) };
      }
      return { wishlist: [...state.wishlist, product] };
    }),
}));
