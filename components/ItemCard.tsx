import React from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'; // Adjust the import path based on your setup
import Image from 'next/image';

interface Item {
    url: string;
    id: string;
    category: string;
    name: string;
    iconUrl: string;
    isBarterItem: boolean;
    isCraftingItem: boolean;
    isAuxiliaryCraftingItem: boolean;
    questRequirements: {
        questUrl: string;
        questId: string;
        questName: string;
        quantity: number;
        inRaid: boolean;
        notes: string;
    }[];
    hideoutRequirements: {
        hideoutModuleUrl: string;
        hideoutModuleId: string;
        hideoutModuleName: string;
        quantity: number;
        inRaid: boolean;
        notes: string;
    }[];
}

interface ItemCardProps {
    item: Item;
}

// Function to calculate total items needed
const calculateTotalNeeded = (item: Item): number => {
    const questTotal = item.questRequirements.reduce((sum, req) => sum + req.quantity, 0);
    const hideoutTotal = item.hideoutRequirements.reduce((sum, req) => sum + req.quantity, 0);
    return questTotal + hideoutTotal;
};

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
    const totalNeeded = calculateTotalNeeded(item);

    return (
        <div className="inline-block text-center">
            <Popover>
                <PopoverTrigger asChild>
                    <div className="w-16 h-16 bg-gray-800 border-2 border-gray-600 flex items-center justify-center overflow-hidden cursor-pointer">
                        <Image
                            src={'/items/' + item.id + '.png'}
                            alt={item.name}
                            width={96}
                            height={96}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = '/fallback-image.png'; // Fallback image if icon fails to load
                            }}
                        />


                    </div>
                </PopoverTrigger>
                <PopoverContent
                    className="w-80 bg-gray-800 text-white rounded-lg shadow-lg p-4"
                    side="top"
                    align="center"
                >
                    <div className="text-sm">
                        <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                        <p><span className="font-semibold">Category:</span> {item.category}</p>
                        <p><span className="font-semibold">Barter Item:</span> {item.isBarterItem ? 'Yes' : 'No'}</p>
                        <p><span className="font-semibold">Crafting Item:</span> {item.isCraftingItem ? 'Yes' : 'No'}</p>
                        <p><span className="font-semibold">Auxiliary Crafting:</span> {item.isAuxiliaryCraftingItem ? 'Yes' : 'No'}</p>

                        {/* Quest Requirements */}
                        {item.questRequirements.length > 0 && (
                            <div className="mt-2">
                                <p className="font-semibold">Quest Requirements:</p>
                                <ul className="list-disc pl-4">
                                    {item.questRequirements.map((req, index) => (
                                        <li key={index}>
                                            <a href={req.questUrl} className="text-blue-300 hover:underline">
                                                {req.questName}
                                            </a> - {req.quantity}x {req.inRaid ? '(In Raid)' : ''} {req.notes && `(${req.notes})`}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Hideout Requirements */}
                        {item.hideoutRequirements.length > 0 && (
                            <div className="mt-2">
                                <p className="font-semibold">Hideout Requirements:</p>
                                <ul className="list-disc pl-4">
                                    {item.hideoutRequirements.map((req, index) => (
                                        <li key={index}>
                                            {req.hideoutModuleName} - {req.quantity}x {req.inRaid ? '(In Raid)' : ''} {req.notes && `(${req.notes})`}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <p className="mt-2">
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
                                View on Tarkov Wiki
                            </a>
                        </p>
                    </div>
                </PopoverContent>
            </Popover>

            {/* Total Needed Display */}
            <div className="mt-1 text-sm font-medium text-gray-700">
                0 / {totalNeeded}
            </div></div>
    );
};

export default ItemCard;