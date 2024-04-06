import { create } from "zustand";

interface Product {
  id: string;
  imgUrl: string;
  name: string;
  description: string;
  userId: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

interface ProductState {
  items: [];
  setItems: (items: Product[]) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  items: [],
  setItems: (products: any) => set({ items: products }),
}));
