"use client";

import { useState } from "react";
import { hideoutData, Category, Item } from "../data/hideoutData";

export default function HideoutRequirements() {
  // State to track owned items, typed as a record of item names to numbers
  const [ownedItems, setOwnedItems] = useState<Record<string, number>>({});

  // Handle increment/decrement for +/- buttons
  const handleQuantityChange = (itemName: string, change: number) => {
    setOwnedItems((prev) => {
      const current = prev[itemName] || 0;
      const newValue = Math.max(0, Math.min(hideoutData.flatMap((c) => c.items).find((i) => i.name === itemName)?.required || 0, current + change));
      return {
        ...prev,
        [itemName]: newValue,
      };
    });
  };

  return (
    <div className="container mx-auto p-6">
      {hideoutData.map((category: Category) => (
        <div key={category.category} className="mb-8">
          <h2 className="text-2xl font-bold text-white border-b-2 border-red-600 pb-2 mb-4">
            {category.category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {category.items.map((item: Item) => {
              const owned = ownedItems[item.name] || 0;
              const needed = Math.max(item.required - owned, 0);
              const itemRequirement = item.required;

              return (
                <div
                  key={item.name}
                  className="bg-gray-800 border border-red-600 p-4 rounded-lg text-center"
                >
                  {/* Placeholder for icon; replace with <img> if icons are added */}
                  <div className="w-10 h-10 bg-gray-700 flex items-center justify-center mx-auto mb-2 text-xl">
                    {item.name[0]}
                  </div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-gray-300">Required: {item.required}</p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <button
                      onClick={() => handleQuantityChange(item.name, -1)}
                      disabled={owned <= 0}
                      className={`w-8 h-8 bg-gray-700 border border-red-600 rounded-full text-white hover:bg-gray-600 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:border-gray-600`}
                    >
                      -
                    </button>
                    <span className="text-white">{owned}</span>
                    <button
                      onClick={() => handleQuantityChange(item.name, 1)}
                      disabled={owned >= itemRequirement}
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
        </div>
      ))}
    </div>
  );
}