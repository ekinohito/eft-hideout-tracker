// store.ts
import { Item } from '@/data/parsedItems';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ConfigState {
  displayTasks: boolean;
  displayHideout: boolean;
  displayFound: boolean;
}

interface ItemState {
  itemQuantities: Record<string, number>;
  questCompletions: Record<string, boolean>;
  hideoutModuleCompletions: Record<string, boolean>;
  config: ConfigState;
  setItemQuantity: (id: string, quantity: number) => void;
  setQuestCompletion: (id: string, isCompleted: boolean) => void;
  setHideoutModuleCompletion: (id: string, isCompleted: boolean) => void;
  setConfig: (config: Partial<ConfigState>) => void;
  reset: () => void;
}

export const useStore = create(
  persist<ItemState>(
    (set) => ({
      itemQuantities: {},
      questCompletions: {},
      hideoutModuleCompletions: {},
      config: {
        displayTasks: true,
        displayHideout: true,
        displayFound: true
      },
      setItemQuantity: (id, quantity) =>
        set((state) => ({
          itemQuantities: { ...state.itemQuantities, [id]: quantity },
        })),
      setQuestCompletion: (id, isCompleted) =>
        set((state) => ({
          questCompletions: { ...state.questCompletions, [id]: isCompleted },
        })),
      setHideoutModuleCompletion: (id, isCompleted) =>
        set((state) => ({
          hideoutModuleCompletions: { ...state.hideoutModuleCompletions, [id]: isCompleted },
        })),
      setConfig: (config) =>
        set((state) => ({
          config: { ...state.config, ...config },
        })),
      reset: () =>
        set({
          itemQuantities: {},
          questCompletions: {},
          hideoutModuleCompletions: {},
          config: {
            displayTasks: true,
            displayHideout: true,
            displayFound: true
          }
        }),
    }),
    {
      name: 'tarkov-hideout-storage', // Name of the localStorage key
      storage: createJSONStorage(() => localStorage), // Use localStorage
    }
  )
);

export const useCalculateTotalNeeded = (item: Item) => {
  const { config, itemQuantities, questCompletions, hideoutModuleCompletions } = useStore();
  const { displayTasks, displayHideout, displayFound } = config;

  // Calculate quest total if displayTasks is enabled
  const questTotal = displayTasks 
    ? item.questRequirements
        .filter((req: { questId: string; inRaid: boolean }) => !questCompletions[req.questId] && req.inRaid)
        .reduce((sum: number, req: { quantity: number }) => sum + req.quantity, 0)
    : 0;

  // Calculate hideout total if displayHideout is enabled
  const hideoutTotal = displayHideout
    ? item.hideoutRequirements
        .filter((req: { hideoutModuleId: string; inRaid: boolean }) => !hideoutModuleCompletions[req.hideoutModuleId] && req.inRaid)
        .reduce((sum: number, req: { quantity: number }) => sum + req.quantity, 0)
    : 0;

  const total = questTotal + hideoutTotal

  // Check if we should return null based on displayFound and item quantity
  if (!displayFound && (itemQuantities[item.id] || 0) >= total) {
    return null;
  }

  return questTotal + hideoutTotal;
};
