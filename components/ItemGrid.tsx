import React from 'react';
import ItemCard from './ItemCard';
import type { Item } from '@/data/parsedItems';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {ChevronsUpDown} from "lucide-react"
import { Button } from './ui/button';
import { cn } from '@/lib/utils';


interface ItemGridProps {
  category: string;
  items: Item[];
}

const ItemGrid: React.FC<ItemGridProps> = ({ category, items }) => {

  return (
    <div className="w-full mx-auto p-4 transition-all">
      <Collapsible defaultOpen>
        <h2 className="text-2xl font-bold mb-4" id={category} >
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon" className="mr-2"><ChevronsUpDown/></Button>
          </CollapsibleTrigger>
          {category}
        </h2>
        <CollapsibleContent
          className={cn("text-popover-foreground outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2")}
        >
          <div className="flex flex-wrap gap-4">
            {items.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>

  );
};

export default ItemGrid;