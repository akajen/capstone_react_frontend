"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import IOrderItem from "./interfaces/OrderItem";
import IMenuItem from "./interfaces/MenuItem";

interface ICartState {
  cart: IOrderItem[];
  total: number;
  add: (item: IMenuItem) => void;
  delete: (itemId: number) => void;
  calculateTotal: () => void;
}

function parseAdditionToCart(item: IMenuItem): IOrderItem {
  const { id } = item;
  return { ...item, itemid: id, quantity: 1 };
}

export const useAddToCart = create<ICartState>()(
  persist<ICartState>(
    (set) => ({
      cart: [],
      total: 0,
      add: (item: IMenuItem) =>
        set((state) => {
          const existing = state.cart.find((i) => i.id === item.id);
          state.calculateTotal();
          if (existing) {
            return {
              cart: state.cart.map((i) =>
                i.id === item.id ? { ...i, quantity: (i.quantity ?? 0) + 1 } : i
              ),
            };
          }
          console.log("Adding item to cart: ", item);
          const updatedCart = [
            ...state.cart,
            parseAdditionToCart(item),
          ] as IOrderItem[];
          return { cart: updatedCart };
        }),
      delete: (itemId: number) =>
        set((state) => {
          const existingItem = state.cart.find((i) => i.itemid === itemId);

          if (!existingItem) {
            console.error("Item does not exist in this order.");
            return {}; // Return empty object to not change state
          }

          if (existingItem.quantity ?? 0 > 1) {
            // Return a new state with the updated quantity
            const updatedCart = state.cart.map((i) =>
              i.id === itemId ? { ...i, quantity: i.quantity ?? 0 - 1 } : i
            );
            return { cart: updatedCart };
          } else {
            // Return a new state without the item
            const updatedCart = state.cart.filter((i) => i.id !== itemId);
            return { cart: updatedCart };
          }
        }),
      calculateTotal: () =>
        set((state) => {
          return {
            total: state.cart.reduce(
              (prevVal, currentVal) =>
                prevVal + currentVal.price * (currentVal.quantity ?? 0),
              0
            ),
          };
        }),
    }), // name of the item in the storage (must be unique)
    {
      name: "cart-storage", // name of the item in the storage (must be unique)
    }
  )
);
