"use client"
import { create } from "zustand";
import IOrderItem from "./interfaces/OrderItem";

interface ICartState {
    items: IOrderItem[];
    add: (item: IOrderItem) => void;
    delete: (itemId: number) => void;
}

export const useAddToCart = create<ICartState>(set => ({
    items: [],
    add: (item: IOrderItem) => set(state => {
        const existing = state.items.find(i => i.id === item.id);
        if (existing) {
            return {
                items: state.items.map(i =>
                    i.id === item.id ? { ...i, quantity: item.quantity + item.quantity } : i
                ),
            };
        }
        return { items: [...state.items, item] };
    }),
    delete: (itemId: number) => set(state => {
        const existingItem = state.items.find(i => i.id === itemId);

        if (!existingItem) {
            console.error("Item does not exist in this order.");
            return {}; // Return empty object to not change state
        }

        if (existingItem.quantity > 1) {
            // Return a new state with the updated quantity
            return {
                items: state.items.map(i =>
                    i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
                )
            };
        } else {
            // Return a new state without the item
            return {
                items: state.items.filter(i => i.id !== itemId)
            };
        }
    }),
}))

export const handleATCClick = () => {
    console.log("added to cart")
}