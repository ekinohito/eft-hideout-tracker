// components/ModuleGroupComponent.tsx
"use client";

import { HideoutModule } from "../data/hideoutModules";
import ModuleLevelComponent from "./ModuleLevelComponent";

interface ModuleGroupComponentProps {
  moduleName: string;
  levels: HideoutModule[];
  completedLevels: number; // Number of completed levels (0 to levels.length)
  onIncrement: () => void; // Callback for incrementing completed levels
  onDecrement: () => void; // Callback for decrementing completed levels
}

// Helper function to format module names into human-readable text
const formatModuleName = (name: string): string => {
  return name
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default function ModuleGroupComponent({
  moduleName,
  levels,
  completedLevels = 0,
  onIncrement,
  onDecrement,
}: ModuleGroupComponentProps) {
  const totalLevels = levels.length;
  const isDecrementDisabled = completedLevels <= 0;
  const isIncrementDisabled = completedLevels >= totalLevels;

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-2xl font-bold text-white">
          {formatModuleName(moduleName)}
        </h3>
        <button
          onClick={onDecrement}
          disabled={isDecrementDisabled}
          className={`w-8 h-8 bg-gray-700 border border-red-600 rounded-full text-white hover:bg-gray-600 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:border-gray-600`}
        >
          -
        </button>
        <span className="text-white">{completedLevels} / {totalLevels}</span>
        <button
          onClick={onIncrement}
          disabled={isIncrementDisabled}
          className={`w-8 h-8 bg-gray-700 border border-red-600 rounded-full text-white hover:bg-gray-600 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:border-gray-600`}
        >
          +
        </button>
      </div>
      {levels.map((level, index) => (
        <ModuleLevelComponent
          key={level.id}
          module={level}
          completed={index < completedLevels}
        />
      ))}
    </div>
  );
}