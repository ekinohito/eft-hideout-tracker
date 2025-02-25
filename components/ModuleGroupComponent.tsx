// components/ModuleGroupComponent.tsx
"use client";

import { HideoutModule } from "../data/hideoutModules";
import ModuleLevelComponent from "./ModuleLevelComponent";

interface ModuleGroupComponentProps {
  moduleName: string;
  levels: HideoutModule[];
}

export default function ModuleGroupComponent({ moduleName, levels }: ModuleGroupComponentProps) {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-white mb-4">{moduleName.replace(/_/g, " ")}</h3>
      {levels.map((level) => (
        <ModuleLevelComponent key={level.id} module={level} />
      ))}
    </div>
  );
}