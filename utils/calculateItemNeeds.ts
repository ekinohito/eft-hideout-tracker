// utils/calculateItemNeeds.ts
import { HideoutModule } from "../data/hideoutModules";
import { moduleLevelsMap } from "../data/moduleLevelsMap";

interface CompletedLevels {
  [moduleName: string]: number;
}

export function calculateItemNeeds(
  completedLevels: CompletedLevels,
  hideoutModules: HideoutModule[]
): Record<string, number> {
  const itemNeeds: Record<string, number> = {};

  // Iterate through each module in moduleLevelsMap
  Object.entries(moduleLevelsMap).forEach(([moduleName, levelIds]) => {
    const completedCount = completedLevels[moduleName] || 0;

    // Only consider uncompleted levels (those beyond completedCount)
    const uncompletedLevels = levelIds.slice(completedCount);

    // For each uncompleted level, aggregate item requirements
    uncompletedLevels.forEach((levelId) => {
      const foundModule = hideoutModules.find((m) => m.id === levelId);
      if (foundModule) {
        foundModule.items.forEach((item) => {
          itemNeeds[item.id] = (itemNeeds[item.id] || 0) + item.quantity;
        });
      }
    });
  });

  return itemNeeds;
}