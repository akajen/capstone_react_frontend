"use client";

import IMenuItem from "@/lib/interfaces/MenuItem";
import ATCButton from "@/components/ATCButton";
import { useState } from "react";

export default function MenuCard({ product }: { product: IMenuItem }) {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);
  return (
    <div key={product.id} className="group">
      <div
        aria-label={product.name}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1726064855857-4540ed3834db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative aspect-square w-full rounded-lg bg-gray-200 object-cover hover:opacity-10 transition-opacity xl:aspect-7/8"
      >
        {hovered && (
          <p className="absolute top-0 left-0 text-sm text-black font-semibold z-999">
            {product.description}
          </p>
        )}
      </div>

      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">
        ${product.price.toFixed(2)}
      </p>
      <ATCButton itemId={product.id} />
    </div>
  );
}
