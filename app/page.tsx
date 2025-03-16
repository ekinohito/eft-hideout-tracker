// app/page.tsx
"use client";

import { saveAs } from 'file-saver';
import { useStore } from '@/lib/store';
import Head from "next/head";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ConfigToggles } from "@/components/ConfigToggles";
import { categories } from "@/data/parsedItems";
import ItemGrid from "@/components/ItemGrid";
import QuestRequirementsList from "@/components/QuestRequirementsList";
import { quests } from "@/data/parsedItems/quests";
import HideoutRequirementsList from "@/components/HideoutRequirementsList";
import { hideoutModules } from "@/data/parsedItems/hideout";

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
        <Tabs defaultValue="items" className="w-full">
          <TabsList className="w-full justify-center bg-gray-900 border-b border-red-600">
            <TabsTrigger value="items" className="text-red-500">Items</TabsTrigger>
            <TabsTrigger value="quests" className="text-red-500">Quests</TabsTrigger>
            <TabsTrigger value="modules" className="text-red-500">Modules</TabsTrigger>
            <TabsTrigger value="export" className="text-red-500">Export</TabsTrigger>
          </TabsList>
          
          <TabsContent value="items" className="flex flex-col">
            <div className="max-w-3xl mx-auto flex flex-col">
              <ItemGrid items={categories.flammableMaterials} category="Flammable Materials" />
              <ItemGrid items={categories.householdMaterials} category="Household Materials" />
              <ItemGrid items={categories.infoItems} category="Info Items" />
              <ItemGrid items={categories.medicalSupplies} category="Medical Supplies" />
              <ItemGrid items={categories.others} category="Others" />
              <ItemGrid items={categories.specialEquipment} category="Special Equipment" />
              <ItemGrid items={categories.tools} category="Tools" />
              <ItemGrid items={categories.valuables} category="Valuables" />
              <ItemGrid items={categories.provisions} category="Provisions" />
            </div>
            <ConfigToggles />
          </TabsContent>
          
          <TabsContent value="quests" className="max-w-3xl mx-auto">
            <QuestRequirementsList quests={quests}/>
          </TabsContent>
          
          <TabsContent value="modules" className="max-w-3xl mx-auto">
            <HideoutRequirementsList hideoutModules={hideoutModules}/>
          </TabsContent>
          
          <TabsContent value="export" className="max-w-3xl mx-auto flex flex-col items-center gap-4 py-8">
            <button 
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
              onClick={() => {
                const state = useStore.getState();
                const blob = new Blob([JSON.stringify(state, null, 2)], {
                  type: 'application/json;charset=utf-8'
                });
                saveAs(blob, 'hideout-state.json');
              }}
            >
              Save
            </button>
            <button 
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
              onClick={() => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = 'application/json';
                input.onchange = (e) => {
                  const file = (e.target as HTMLInputElement).files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      try {
                        const state = JSON.parse(event.target?.result as string);
                        useStore.setState(state);
                      } catch (error) {
                        console.error('Error parsing JSON file:', error);
                        alert('Invalid JSON file');
                      }
                    };
                    reader.readAsText(file);
                  }
                };
                input.click();
              }}
            >
              Load
            </button>
          </TabsContent>
        </Tabs>
      </main>
      <footer className="bg-gray-900 border-t border-red-600 p-4 text-center text-gray-400">
        <p>Built with ❤️ for Tarkov players.</p>
      </footer>
    </div>
  );
}
