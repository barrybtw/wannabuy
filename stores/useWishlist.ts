import create from "zustand";
import { persist } from "zustand/middleware";

export interface Product {
  id?: string;
  name: string;
  price: number;
}

interface ProductState {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: string) => void;
}

export const useWishlist = create<ProductState>()(
  persist(
    (set, get) => ({
      products: [] as Product[],
      addProduct: (product: Product) =>
        set({
          products: [
            ...(get()!.products as Product[]),
            { ...product, id: (Math.random() * 100000).toString() },
          ],
        }),
      removeProduct: (id: string) =>
        set({ products: get()!.products!.filter((p) => p.id !== id) }),
    }),
    {
      name: "products-storage-zustand",
    },
  ),
);

export function useProducts() {
  return useWishlist((state) => state.products) as Product[];
}
