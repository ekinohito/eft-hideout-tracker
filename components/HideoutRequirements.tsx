// components/HideoutRequirements.tsx
"use client";

import { useState } from "react";
import { hideoutModules } from "../data/hideoutModules";
import { calculateItemNeeds } from "../utils/calculateItemNeeds";

interface ItemNeed {
  id: string;
  quantity: number;
}

interface HideoutRequirementsProps {
  completedLevels: Record<string, number>;
}

export default function HideoutRequirements({
  completedLevels,
}: HideoutRequirementsProps) {
  // State to track owned items, typed as a record of item IDs to numbers
  const [ownedItems, setOwnedItems] = useState<Record<string, number>>({});

  // Calculate item needs based on completed levels and hideoutModules
  const itemNeeds = calculateItemNeeds(completedLevels, hideoutModules);

  // Convert itemNeeds to an array for rendering, sorted alphabetically by item ID
  const items: ItemNeed[] = Object.entries(itemNeeds)
    .map(([id, quantity]) => ({ id, quantity }))
    .sort((a, b) => a.id.localeCompare(b.id));

  // Handle increment/decrement for +/- buttons
  const handleQuantityChange = (itemId: string, change: number) => {
    setOwnedItems((prev) => {
      const current = prev[itemId] || 0;
      const newValue = Math.max(0, Math.min(itemNeeds[itemId] || 0, current + change));
      return {
        ...prev,
        [itemId]: newValue,
      };
    });
  };

  return (
    <div className="container mx-auto p-6">
      {items.map((item) => {
        const owned = ownedItems[item.id] || 0;
        const needed = Math.max(item.quantity - owned, 0);
        return (
          <div
            key={item.id}
            className="bg-gray-800 border border-red-600 p-4 rounded-lg text-center mb-4"
          >
            {/* Placeholder for icon; replace with <img> if icons are added */}
            <div className="w-10 h-10 bg-gray-700 flex items-center justify-center mx-auto mb-2 text-xl">
              {item.id[0].toUpperCase()}
            </div>
            <p className="font-semibold text-white">{item.id.replace(/_/g, " ")}</p>
            <p className="text-gray-300">Required: {item.quantity}</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <button
                onClick={() => handleQuantityChange(item.id, -1)}
                disabled={owned <= 0}
                className={`w-8 h-8 bg-gray-700 border border-red-600 rounded-full text-white hover:bg-gray-600 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:border-gray-600`}
              >
                -
              </button>
              <span className="text-white">{owned}</span>
              <button
                onClick={() => handleQuantityChange(item.id, 1)}
                disabled={owned >= item.quantity}
                className={`w-8 h-8 bg-gray-700 border border-red-600 rounded-full text-white hover:bg-gray-600 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:border-gray-600`}
              >
                +
              </button>
            </div>
            <p className="text-gray-300 mt-2">Needed: {needed}</p>
            {needed === 0 && (
              <span className="text-green-500 text-xl mt-2">✔</span>
            )}
          </div>
        );
      })}
    </div>
  );
}