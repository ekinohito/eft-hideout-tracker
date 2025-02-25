// components/HideoutRequirements.tsx
"use client";

import { useState } from "react";
import { hideoutModules } from "../data/hideoutModules";
import { calculateItemNeeds } from "../utils/calculateItemNeeds";
import { barterItemCategories, BarterCategory } from "../data/barterItemCategories";
import Image from "next/image";

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

  // Group items into categories, including "Other Items" for unclassified items
  const categorizedItems: Record<string, ItemNeed[]> = {};
  const otherItems: ItemNeed[] = [];

  // Create a map of item IDs to categories for efficient lookup
  const itemCategoryMap = new Map<string, BarterCategory>(
    barterItemCategories.flatMap((category) =>
      category.items.map((item) => [item.id, category] as [string, BarterCategory])
    )
  );

  // Process itemNeeds into categories
  Object.entries(itemNeeds).forEach(([itemId, quantity]) => {
    const item: ItemNeed = { id: itemId, quantity };
    const category = itemCategoryMap.get(itemId);

    if (category) {
      categorizedItems[category.id] = [...(categorizedItems[category.id] || []), item];
    } else {
      otherItems.push(item);
    }
  });

  // Sort items within each category alphabetically by ID
  Object.keys(categorizedItems).forEach((categoryId) => {
    categorizedItems[categoryId].sort((a, b) => a.id.localeCompare(b.id));
  });
  otherItems.sort((a, b) => a.id.localeCompare(b.id));

  // If there are other items, add them to the categorizedItems under "Other Items"
  if (otherItems.length > 0) {
    categorizedItems["other_items"] = otherItems;
  }

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
      {Object.entries(categorizedItems).map(([categoryId, items]) => (
        <div key={categoryId} className="mb-8">
          <h2 className="text-2xl font-bold text-white border-b-2 border-red-600 pb-2 mb-4">
            {categoryId === "other_items" ? "Other Items" : barterItemCategories.find((c) => c.id === categoryId)?.name || "Unknown Category"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => {
              const owned = ownedItems[item.id] || 0;
              const needed = Math.max(item.quantity - owned, 0);
              return (
                <div
                  key={item.id}
                  className="bg-gray-800 border border-red-600 p-4 rounded-lg text-center mb-4"
                >
                  {/* Placeholder for icon; replace with <img> if icons are added
                  <div className="w-10 h-10 bg-gray-700 flex items-center justify-center mx-auto mb-2 text-xl">
                    {item.id[0].toUpperCase()}
                  </div> */}

                  {/* Replace placeholder with <img> and fallback to letter on error */}
                  <div className="w-20 h-20 flex items-center justify-center mx-auto mb-2">
                    <Image
                      src={`/icons/${item.id}.png`} // Assuming images are in public/icons/
                      alt={`${item.id.replace(/_/g, " ")} Icon`}
                      className="w-20 h-20 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        const fallbackDiv = document.createElement('div');
                        fallbackDiv.className = 'w-10 h-10 bg-gray-700 flex items-center justify-center text-xl';
                        fallbackDiv.textContent = item.id[0].toUpperCase();
                        (e.target as HTMLImageElement).parentNode?.replaceChild(fallbackDiv, e.target as HTMLImageElement);
                      }}
                    />
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
        </div>
      ))}
    </div>
  );
}