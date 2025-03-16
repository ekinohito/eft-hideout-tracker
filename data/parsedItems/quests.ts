import { allItems } from ".";
import { Item, QuestRequirement } from "./types";

export type QuestRequirementsMap = Map<string, [Item, QuestRequirement][]>;

export type Quests = [string, [Item, QuestRequirement][]][]

function getUniqueQuestRequirements(items: Item[]): QuestRequirementsMap {
    const result: QuestRequirementsMap = new Map()

    for (const item of items) {
        for (const quest of item.questRequirements) {
            let questRequirements = result.get(quest.questId)
            if (questRequirements === undefined) {
                questRequirements = []
                result.set(quest.questId, questRequirements)
            }
            questRequirements.push([item, quest])
        }
    }
    
    return result;
}

export const questsMap = getUniqueQuestRequirements(allItems);

export const quests: Quests = [...questsMap.entries().map(([key, value]) => [key, value] as [string, [Item, QuestRequirement][]])].toSorted(([keyA], [keyB]) => keyA > keyB ? 1 : -1)
