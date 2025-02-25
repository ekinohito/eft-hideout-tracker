// components/AllModulesComponent.tsx
"use client";

import { moduleLevelsMap } from "../data/moduleLevelsMap";
import { hideoutModuleMap } from "../data/hideoutModuleMap";
import ModuleGroupComponent from "./ModuleGroupComponent";

interface AllModulesComponentProps {
  completedLevels: Record<string, number>;
  setCompletedLevels: React.Dispatch<React.SetStateAction<Record<string, number>>>;
}

export default function AllModulesComponent({
  completedLevels,
  setCompletedLevels,
}: AllModulesComponentProps) {
  // Handler for incrementing completed levels
  const handleIncrement = (moduleName: string) => {
    setCompletedLevels((prev) => ({
      ...prev,
      [moduleName]: Math.min(prev[moduleName] + 1, moduleLevelsMap[moduleName].length),
    }));
  };

  // Handler for decrementing completed levels
  const handleDecrement = (moduleName: string) => {
    setCompletedLevels((prev) => ({
      ...prev,
      [moduleName]: Math.max(prev[moduleName] - 1, 0),
    }));
  };

  return (
    <div className="container mx-auto p-6">
      {Object.entries(moduleLevelsMap).map(([moduleName, levelIds]) => {
        const levels = levelIds.map((id) => hideoutModuleMap[id]);
        return (
          <ModuleGroupComponent
            key={moduleName}
            moduleName={moduleName}
            levels={levels}
            completedLevels={completedLevels[moduleName]}
            onIncrement={() => handleIncrement(moduleName)}
            onDecrement={() => handleDecrement(moduleName)}
          />
        );
      })}
    </div>
  );
}