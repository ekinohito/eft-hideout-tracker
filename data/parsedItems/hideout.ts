import { allItems } from ".";
import { HideoutRequirement, Item } from "./types";

export type HideoutRequirementsMap = Map<string, [Item, HideoutRequirement][]>;

export type HideoutModules = [string, [Item, HideoutRequirement][]][]

function getUniqueHideoutRequirements(items: Item[]): HideoutRequirementsMap {
    const result: HideoutRequirementsMap = new Map()

    for (const item of items) {
        for (const hideout of item.hideoutRequirements) {
            let hideoutRequirements = result.get(hideout.hideoutModuleId)
            if (hideoutRequirements === undefined) {
                hideoutRequirements = []
                result.set(hideout.hideoutModuleId, hideoutRequirements)
            }
            hideoutRequirements.push([item, hideout])
        }
    }
    
    return result;
}

export const hideoutModulesMap = getUniqueHideoutRequirements(allItems);

export const hideoutModules: HideoutModules = [...hideoutModulesMap.entries().map(([key, value]) => [key, value] as [string, [Item, HideoutRequirement][]])].toSorted(([keyA], [keyB]) => keyA > keyB ? 1 : -1)
