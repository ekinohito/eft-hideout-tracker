import { Item } from "./types";

export const medicalSupplies: Item[] = [
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Aquapeps_water_purification_tablets",
        id: "Aquapeps_water_purification_tablets",
        category: "Medical supplies",
        name: "Aquapeps water purification tablets",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/0e/Aquapeps_icon.png/revision/latest?cb=20230104152305",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Bottle_of_hydrogen_peroxide",
        id: "Bottle_of_hydrogen_peroxide",
        category: "Medical supplies",
        name: "Bottle of hydrogen peroxide",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/1/13/Hydrogen_Peroxide_icon.png/revision/latest?cb=20250114194133",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Bottle_of_OLOLO_Multivitamins",
        id: "Bottle_of_OLOLO_Multivitamins",
        category: "Medical supplies",
        name: "Bottle of OLOLO Multivitamins",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/f/f7/Ololo_icon.png/revision/latest?cb=20250114194150",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Crisis",
                questId: "Crisis",
                questName: "Crisis",
                quantity: 10,
                inRaid: true,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Thirsty_-_Secrets",
                questId: "Thirsty_-_Secrets",
                questName: "Thirsty - Secrets",
                quantity: 4,
                inRaid: true,
                notes: ""
            }
        ],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Medstation_level_1",
                hideoutModuleName: "Medstation level 1",
                quantity: 1,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Bottle_of_saline_solution",
        id: "Bottle_of_saline_solution",
        category: "Medical supplies",
        name: "Bottle of saline solution",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/1/1b/Saline_Solution_icon.png/revision/latest?cb=20250114194207",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Thirsty_-_Secrets",
                questId: "Thirsty_-_Secrets",
                questName: "Thirsty - Secrets",
                quantity: 3,
                inRaid: true,
                notes: ""
            }
        ],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Medstation_level_2",
                hideoutModuleName: "Medstation level 2",
                quantity: 3,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Medstation_level_3",
                hideoutModuleName: "Medstation level 3",
                quantity: 4,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Disposable_syringe",
        id: "Disposable_syringe",
        category: "Medical supplies",
        name: "Disposable syringe",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/37/DisposableSyringeIcon.png/revision/latest?cb=20211220220935",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Medstation_level_1",
                hideoutModuleName: "Medstation level 1",
                quantity: 1,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/LEDX_Skin_Transilluminator",
        id: "LEDX_Skin_Transilluminator",
        category: "Medical supplies",
        name: "LEDX Skin Transilluminator",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/4/4e/TransilluminatorIcon.png/revision/latest?cb=20250114194240",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Private_Clinic",
                questId: "Private_Clinic",
                questName: "Private Clinic",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Crisis",
                questId: "Crisis",
                questName: "Crisis",
                quantity: 2,
                inRaid: true,
                notes: ""
            }
        ],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Medstation_level_3",
                hideoutModuleName: "Medstation level 3",
                quantity: 1,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Medical_bloodset",
        id: "Medical_bloodset",
        category: "Medical supplies",
        name: "Medical bloodset",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/5/56/Medical_Bloodset_Icon.png/revision/latest?cb=20250114194655",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Vitamins_-_Part_2",
                questId: "Vitamins_-_Part_2",
                questName: "Vitamins - Part 2",
                quantity: 3,
                inRaid: true,
                notes: ""
            }
        ],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Medstation_level_2",
                hideoutModuleName: "Medstation level 2",
                quantity: 2,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Medical_tools",
        id: "Medical_tools",
        category: "Medical supplies",
        name: "Medical tools",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/4/48/Medical_tools.png/revision/latest?cb=20220709111123",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Medstation_level_2",
                hideoutModuleName: "Medstation level 2",
                quantity: 3,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Ophthalmoscope",
        id: "Ophthalmoscope",
        category: "Medical supplies",
        name: "Ophthalmoscope",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/f/f6/Ophthalmoscopeicon.png/revision/latest?cb=20250114194110",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Private_Clinic",
                questId: "Private_Clinic",
                questName: "Private Clinic",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Crisis",
                questId: "Crisis",
                questName: "Crisis",
                quantity: 3,
                inRaid: true,
                notes: ""
            }
        ],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Medstation_level_3",
                hideoutModuleName: "Medstation level 3",
                quantity: 1,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Pile_of_meds",
        id: "Pile_of_meds",
        category: "Medical supplies",
        name: "Pile of meds",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/b/b6/Pile_of_meds_icon.png/revision/latest?cb=20230218205628",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Crisis",
                questId: "Crisis",
                questName: "Crisis",
                quantity: 20,
                inRaid: true,
                notes: ""
            }
        ],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Medstation_level_1",
                hideoutModuleName: "Medstation level 1",
                quantity: 1,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Portable_defibrillator",
        id: "Portable_defibrillator",
        category: "Medical supplies",
        name: "Portable defibrillator",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/8/81/Defibrillatoricon.png/revision/latest?cb=20250114194615",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Ambulance",
                questId: "Ambulance",
                questName: "Ambulance",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Crisis",
                questId: "Crisis",
                questName: "Crisis",
                quantity: 3,
                inRaid: true,
                notes: ""
            }
        ],
        hideoutRequirements: []
    }
];