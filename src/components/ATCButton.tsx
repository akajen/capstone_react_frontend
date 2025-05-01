"use client";
import { useAddToCart } from "@/lib/useAddToCart";
import menuItems from "@/dummydata";

export default function ATCButton({ itemId }: { itemId: number }) {
  const { add } = useAddToCart();

  const handleATCClick = (e: React.MouseEvent) => {
    const itemId = parseInt(e.currentTarget.id, 10);
    const itemToAdd = menuItems.find((item) => item.id === itemId);

    if (itemToAdd) {
      add(itemToAdd);
    } else console.error("Item not found in menuItems");
  };

  return (
    <button
      onClick={handleATCClick}
      id={`${itemId}`}
      className="bg-blue-900 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer"
    >
      Add to Cart
    </button>
  );
}
