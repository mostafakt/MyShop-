import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string | null;
};

type CartState = {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
};

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const recalc = (items: CartItem[]) => {
  const totalItems = items.reduce((s, it) => s + it.quantity, 0);
  const totalPrice = items.reduce((s, it) => s + it.price * it.quantity, 0);
  return { items, totalItems, totalPrice };
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<{ item: CartItem }>) {
      const { item } = action.payload;
      const existing = state.items.find((i) => i.productId === item.productId);
      if (existing) {
        existing.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
      const r = recalc(state.items);
      state.items = r.items;
      state.totalItems = r.totalItems;
      state.totalPrice = r.totalPrice;
    },

    updateQuantity(
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) {
      const { productId, quantity } = action.payload;
      const item = state.items.find((i) => i.productId === productId);
      if (!item) return;
      item.quantity = Math.max(0, quantity);
      state.items = state.items.filter((i) => i.quantity > 0);
      const r = recalc(state.items);
      state.items = r.items;
      state.totalItems = r.totalItems;
      state.totalPrice = r.totalPrice;
    },

    removeItem(state, action: PayloadAction<{ productId: string }>) {
      state.items = state.items.filter(
        (i) => i.productId !== action.payload.productId
      );
      const r = recalc(state.items);
      state.items = r.items;
      state.totalItems = r.totalItems;
      state.totalPrice = r.totalPrice;
    },

    clearCart(state) {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, updateQuantity, removeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
