import { Item } from "./types";

export const energyElements: Item[] = [
    {
        url: "https://escapefromtarkov.fandom.com/wiki/6-STEN-140-M_military_battery",
        id: "6-STEN-140-M_military_battery",
        category: "Energy elements",
        name: "6-STEN-140-M military battery",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/2a/Mil_Batt_icon.png/revision/latest/scale-to-width-down/180?cb=20191127034010",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Regulated_Materials",
                questId: "Regulated_Materials",
                questName: "Regulated Materials",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Battery_Change",
                questId: "Battery_Change",
                questName: "Battery Change",
                quantity: 1,
                inRaid: false,
                notes: ""
            }
        ],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Bitcoin_Farm_level_3",
                hideoutModuleName: "Bitcoin Farm level 3",
                quantity: 1,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/AA_Battery",
        id: "AA_Battery",
        category: "Energy elements",
        name: "AA Battery",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/9/9c/AA_Battery_Icon_2.png/revision/latest?cb=20211220211725",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Car_battery",
        id: "Car_battery",
        category: "Energy elements",
        name: "Car battery",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/a0/Car_Battery_Icon.png/revision/latest/scale-to-width-down/180?cb=20230918152954",
        isBarterItem: false,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Car_Repair",
                questId: "Car_Repair",
                questName: "Car Repair",
                quantity: 4,
                inRaid: true,
                notes: ""
            }
        ],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Vents_level_2",
                hideoutModuleName: "Vents level 2",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Vents_level_3",
                hideoutModuleName: "Vents level 3",
                quantity: 4,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Cyclon_rechargeable_battery",
        id: "Cyclon_rechargeable_battery",
        category: "Energy elements",
        name: "Cyclon rechargeable battery",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/7/7e/Cyclon_Icon.png/revision/latest?cb=20200502000226",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/D_Size_battery",
        id: "D_Size_battery",
        category: "Energy elements",
        name: "D Size battery",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/e5/D_Size_Battery_Icon.png/revision/latest?cb=20211220220333",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/GreenBat_lithium_battery",
        id: "GreenBat_lithium_battery",
        category: "Energy elements",
        name: "GreenBat lithium battery",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/b/b6/GreenBat_Icon.png/revision/latest?cb=20200502000309",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Rest_Space_level_3",
                hideoutModuleName: "Rest Space level 3",
                quantity: 5,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Portable_Powerbank",
        id: "Portable_Powerbank",
        category: "Energy elements",
        name: "Portable Powerbank",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/5/5c/PowerbankIcon.png/revision/latest?cb=20211220224627",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Camera,_Action!",
                questId: "Camera,_Action!",
                questName: "Camera, Action!",
                quantity: 1,
                inRaid: true,
                notes: "\"Edge of Darkness\" game edition buyers only"
            }
        ],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Rechargeable_battery",
        id: "Rechargeable_battery",
        category: "Energy elements",
        name: "Rechargeable battery",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/28/Recicon.png/revision/latest?cb=20220102182902",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Camera,_Action!",
                questId: "Camera,_Action!",
                questName: "Camera, Action!",
                quantity: 1,
                inRaid: true,
                notes: "\"Edge of Darkness\" game edition buyers only"
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Signal_-_Part_2",
                questId: "Signal_-_Part_2",
                questName: "Signal - Part 2",
                quantity: 3,
                inRaid: true,
                notes: ""
            }
        ],
        hideoutRequirements: []
    }
]
