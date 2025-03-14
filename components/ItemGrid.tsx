import React from 'react';
import ItemCard from './ItemCard'; // Assuming ItemCard is in the same directory or adjust the path
import type { Item } from '@/data/parsedItems';

interface ItemGridProps {
  category: string;
  items: Item[];
}

const ItemGrid: React.FC<ItemGridProps> = ({ category, items }) => {

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4" id={category} >{category}</h2>
      <div className="flex flex-wrap gap-4">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemGrid;