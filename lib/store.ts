// store.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ItemState {
  itemQuantities: Record<string, number>;
  questCompletions: Record<string, boolean>;
  hideoutModuleCompletions: Record<string, boolean>;
  setItemQuantity: (id: string, quantity: number) => void;
  setQuestCompletion: (id: string, isCompleted: boolean) => void;
  setHideoutModuleCompletion: (id: string, isCompleted: boolean) => void;
}

export const useStore = create(
  persist<ItemState>(
    (set) => ({
      itemQuantities: {},
      questCompletions: {},
      hideoutModuleCompletions: {},
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
    }),
    {
      name: 'tarkov-hideout-storage', // Name of the localStorage key
      storage: createJSONStorage(() => localStorage), // Use localStorage
    }
  )
);