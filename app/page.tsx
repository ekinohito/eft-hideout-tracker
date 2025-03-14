// app/page.tsx
"use client";

import Head from "next/head";
import { ConfigToggles } from "@/components/ConfigToggles";
import { categories } from "@/data/parsedItems";
import ItemGrid from "@/components/ItemGrid";

export default function Home() {

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Head>
        <title>EFT Hideout Manager</title>
        <meta name="description" content="Manage Escape from Tarkov hideout modules and item requirements" />
      </Head>
      <header className="bg-gray-900 border-b border-red-600 p-6 text-center">
        <h1 className="text-4xl font-bold text-red-500">Escape from Tarkov Hideout Manager</h1>
        <p className="text-gray-300 mt-2">Track modules and item needs for your hideout</p>
      </header>
      <main className="flex-1 flex flex-col">
        <div className="max-w-3xl mx-auto">
          <ItemGrid items={categories.buildingMaterials} category="Building Materials" />
          <ItemGrid items={categories.electronics} category="Electronics" />
          <ItemGrid items={categories.energyElements} category="Energy Elements" />
          <ItemGrid items={categories.flammableMaterials} category="Flammable Materials" />
          <ItemGrid items={categories.householdMaterials} category="Household Materials" />
          <ItemGrid items={categories.infoItems} category="Info Items" />
          <ItemGrid items={categories.medicalSupplies} category="Medical Supplies" />
          <ItemGrid items={categories.others} category="Others" />
          <ItemGrid items={categories.specialEquipment} category="Special Equipment" />
          <ItemGrid items={categories.tools} category="Tools" />
          <ItemGrid items={categories.valuables} category="Valuables" />
        </div>
        <ConfigToggles />
      </main>
      <footer className="bg-gray-900 border-t border-red-600 p-4 text-center text-gray-400">
        <p>Built with ❤️ for Tarkov players.</p>
      </footer>
    </div>
  );
}
