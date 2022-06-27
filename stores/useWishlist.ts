import create from "zustand";
import { persist } from "zustand/middleware";

interface Product {
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
      products: [
        {
          id: "1",
          name: "Product 1",
          price: 10,
        },
      ],
      addProduct: (product: Product) =>
        set({
          products: [
            ...get()!.products,
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
