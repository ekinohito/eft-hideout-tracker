// components/AllModulesComponent.tsx
"use client";

import { moduleLevelsMap } from "../data/moduleLevelsMap";
import { hideoutModuleMap } from "../data/hideoutModuleMap";
import ModuleGroupComponent from "./ModuleGroupComponent";

export default function AllModulesComponent() {
  return (
    <div className="container mx-auto p-6">
      {Object.entries(moduleLevelsMap).map(([moduleName, levelIds]) => {
        const levels = levelIds.map((id) => hideoutModuleMap[id]);
        return (
          <ModuleGroupComponent
            key={moduleName}
            moduleName={moduleName}
            levels={levels}
          />
        );
      })}
    </div>
  );
}