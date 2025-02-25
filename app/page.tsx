// app/page.tsx
"use client";

import Head from "next/head";
import { useState } from "react";
import AllModulesComponent from "../components/AllModulesComponent";
import HideoutRequirements from "../components/HideoutRequirements";
import { moduleLevelsMap } from "../data/moduleLevelsMap";

export default function Home() {
  const [completedLevels, setCompletedLevels] = useState<Record<string, number>>(
    Object.fromEntries(Object.keys(moduleLevelsMap).map((module) => [module, 0]))
  );

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Head>
        <title>EFT Hideout Manager</title>
        <meta name="description" content="Manage Escape from Tarkov hideout modules and item requirements" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-gray-900 border-b border-red-600 p-6 text-center">
        <h1 className="text-4xl font-bold text-red-500">Escape from Tarkov Hideout Manager</h1>
        <p className="text-gray-300 mt-2">Track modules and item needs for your hideout</p>
      </header>
      <main className="flex-1 flex">
        <div className="w-1/2 border-r border-red-600 overflow-y-auto h-screen custom-scrollbar" style={{ maxHeight: 'calc(100vh - 12rem)' }}>
          <AllModulesComponent
            completedLevels={completedLevels}
            setCompletedLevels={setCompletedLevels}
          />
        </div>
        <div className="w-1/2 overflow-y-auto h-screen custom-scrollbar" style={{ maxHeight: 'calc(100vh - 12rem)' }}>
          <HideoutRequirements
            completedLevels={completedLevels}
          />
        </div>
      </main>
      <footer className="bg-gray-900 border-t border-red-600 p-4 text-center text-gray-400">
        <p>© 2025 xAI. Built with ❤️ for Tarkov players.</p>
      </footer>
    </div>
  );
}