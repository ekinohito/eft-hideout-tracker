// data/hideoutModuleMap.ts
import { HideoutModule, hideoutModules } from "./hideoutModules";

export const hideoutModuleMap: Record<string, HideoutModule> = Object.fromEntries(
  hideoutModules.map((module) => [module.id, module])
);