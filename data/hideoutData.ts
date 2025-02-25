// data/hideoutData.ts
export interface Item {
    name: string;
    required: number;
    icon?: string; // Optional for future icon support
  }
  
  export interface Category {
    category: string;
    items: Item[];
  }
  
  export const hideoutData: Category[] = [
    {
      category: "Building Materials",
      items: [
        { name: "Ropes", required: 18 },
        { name: "Nails", required: 17 },
        { name: "Screws", required: 19 },
        { name: "Bolts", required: 10 }, // Example placeholder
        { name: "Nuts", required: 15 }, // Example placeholder
        { name: "Metal Sheets", required: 8 }, // Example placeholder
        { name: "Plywood", required: 5 }, // Example placeholder
        { name: "Shovel", required: 2 }, // Example placeholder
      ],
    },
    {
      category: "Electronics",
      items: [
        { name: "Batteries", required: 99 },
        { name: "Power Cords", required: 1 },
        { name: "Circuit Boards", required: 58 },
        { name: "Wires", required: 20 }, // Example placeholder
        { name: "Capacitors", required: 15 }, // Example placeholder
        { name: "Light Bulbs", required: 10 }, // Example placeholder
        { name: "Power Supply", required: 3 }, // Example placeholder
        { name: "CPU Fan", required: 5 }, // Example placeholder
        { name: "RAM", required: 5 }, // Example placeholder
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Hammers", required: 2 },
        { name: "Screwdrivers", required: 1 },
        { name: "Wrench", required: 3 }, // Example placeholder
        { name: "Pliers", required: 2 }, // Example placeholder
        { name: "Drill", required: 1 }, // Example placeholder
        { name: "Tape Measure", required: 1 }, // Example placeholder
        { name: "Chisel", required: 1 }, // Example placeholder
      ],
    },
    // Add other categories similarly; for brevity, only a few are included
  ];