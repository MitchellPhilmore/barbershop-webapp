import create from "zustand";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imgUrl: string;
  description?: string;

}

interface CartState {
  items: CartItem[];
  isCartOpen: boolean;
  selectedProduct?: CartItem
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  updateItemQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setSelectedProduct: (product:CartItem) => void
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  isCartOpen: false,
  addItem: (item) =>
    set((state) => {
      const itemIndex = state.items.findIndex((i) => i.id === item.id);
      if (itemIndex > -1) {
        // If item exists, update the quantity
        let newItems = [...state.items];
        newItems[itemIndex].quantity = item.quantity;
        return { ...state, items: newItems };
      } else {
        // If item doesn't exist, add it to the cart
        return { ...state, items: [...state.items, item] };
      }
    }),
    removeItem: (itemId) => set((state) => {
      // Filter out the item to remove by checking its id against all items in the cart
      const filteredItems = state.items.filter(item => item.id !== itemId);
  
      // Return the updated state with the item completely removed
      return {
        ...state,
        items: filteredItems
      };
    }),
  updateItemQuantity: (itemId, quantity) =>
    set((state) => {
      const newItems = state.items.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      );
      return { ...state, items: newItems };
    }),
  clearCart: () => set(() => ({ items: [] })),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  setSelectedProduct: (product:CartItem) => set((state) => ({selectedProduct: product}))
}));
