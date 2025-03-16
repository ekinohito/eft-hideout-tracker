export interface QuestRequirement {
    questUrl: string, // link to tarkov wiki
    questId: string, // derived from questUrl
    questName: string,
    quantity: number,
    inRaid: boolean,
    notes: string, // any additional info that wasn't contained in the previous fields
}

export interface HideoutRequirement {
    hideoutModuleUrl: string, // link to tarkov wiki
    hideoutModuleId: string, // derived from hideoutModuleName
    hideoutModuleName: string,
    quantity: number,
    inRaid: boolean,
    notes: string, // any additional info that wasn't contained in the previous fields
}

export interface Item {
    url: string, // link to tarkov wiki
    id: string, // derived from pathname of the link
    category: string,
    name: string,
    iconUrl: string,
    isBarterItem: boolean,
    isCraftingItem: boolean,
    isAuxiliaryCraftingItem: boolean,
    questRequirements: QuestRequirement[],
    hideoutRequirements: HideoutRequirement[],
}
