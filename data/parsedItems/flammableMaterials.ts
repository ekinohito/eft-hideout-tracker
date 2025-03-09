import { Item } from "./types";

export const flammableMaterials: Item[] = [
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Can_of_thermite",
        id: "Can_of_thermite",
        category: "Flammable materials",
        name: "Can of thermite",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/4/4f/Can_of_thermite_Icon.png/revision/latest?cb=20210330162533",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Workbench_level_3",
                hideoutModuleName: "Workbench level 3",
                quantity: 2,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Classic_matches",
        id: "Classic_matches",
        category: "Flammable materials",
        name: "Classic matches",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/b/b1/Matches_Icon.png/revision/latest?cb=20221111102844",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Heating_level_1",
                hideoutModuleName: "Heating level 1",
                quantity: 2,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Rest_Space_level_1",
                hideoutModuleName: "Rest Space level 1",
                quantity: 1,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Crickent_lighter",
        id: "Crickent_lighter",
        category: "Flammable materials",
        name: "Crickent lighter",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/8/8b/Cricket_lighter_Icon.png/revision/latest?cb=20250122140607",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: true,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Heating_level_2",
                hideoutModuleName: "Heating level 2",
                quantity: 3,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Illumination_level_1",
                hideoutModuleName: "Illumination level 1",
                quantity: 1,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Dry_fuel",
        id: "Dry_fuel",
        category: "Flammable materials",
        name: "Dry fuel",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/f/fd/Dryfuelicon.png/revision/latest?cb=20250114201036",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Heating_level_2",
                hideoutModuleName: "Heating level 2",
                quantity: 3,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Expeditionary_fuel_tank",
        id: "Expeditionary_fuel_tank",
        category: "Flammable materials",
        name: "Expeditionary fuel tank",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/f/fd/Expeditionary-fuel-tank-icon.png/revision/latest?cb=20250114194757",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Generator",
                hideoutModuleName: "Generator",
                quantity: 0,
                inRaid: false,
                notes: "Can be used as fuel to run the Generator"
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/FireKlean_gun_lube",
        id: "FireKlean_gun_lube",
        category: "Flammable materials",
        name: "#FireKlean gun lube",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/09/FireKlean_icon.png/revision/latest?cb=20211220221615",
        isBarterItem: false,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Collector",
                questId: "Collector",
                questName: "Collector",
                quantity: 1,
                inRaid: true,
                notes: ""
            }
        ],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Workbench_level_3",
                hideoutModuleName: "Workbench level 3",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Weapon_Rack_level_3",
                hideoutModuleName: "Weapon Rack level 3",
                quantity: 1,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Fuel_conditioner",
        id: "Fuel_conditioner",
        category: "Flammable materials",
        name: "Fuel conditioner",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/04/Fuelcondicon.png/revision/latest?cb=20211220222043",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/The_Blood_of_War_-_Part_2",
                questId: "The_Blood_of_War_-_Part_2",
                questName: "The Blood of War - Part 2",
                quantity: 4,
                inRaid: true,
                notes: ""
            }
        ],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Gunpowder_%22Eagle%22",
        id: "Gunpowder_Eagle",
        category: "Flammable materials",
        name: "Gunpowder \"Eagle\"",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/e5/Gunpowder_eagle_icon.png/revision/latest?cb=20211220210657",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Gunpowder_%22Hawk%22",
        id: "Gunpowder_Hawk",
        category: "Flammable materials",
        name: "Gunpowder \"Hawk\"",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/df/GunpowderHawkIcon.png/revision/latest?cb=20211220210710",
        isBarterItem: false,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Gunpowder_%22Kite%22",
        id: "Gunpowder_Kite",
        category: "Flammable materials",
        name: "Gunpowder \"Kite\"",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/4/43/Gunpowder_Icon.png/revision/latest?cb=20211220210455",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Health_Care_Privacy_-_Part_5",
                questId: "Health_Care_Privacy_-_Part_5",
                questName: "Health Care Privacy - Part 5",
                quantity: 3,
                inRaid: false,
                notes: ""
            }
        ],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Hunting_matches",
        id: "Hunting_matches",
        category: "Flammable materials",
        name: "Hunting matches",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/d7/HunterMatches_Icon.png/revision/latest?cb=20200317173537",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Heating_level_2",
                hideoutModuleName: "Heating level 2",
                quantity: 2,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Metal_fuel_tank",
        id: "Metal_fuel_tank",
        category: "Flammable materials",
        name: "Metal fuel tank",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/66/Metal-fuel-tank-icon.png/revision/latest?cb=20250114194736",
        isBarterItem: false,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Rite_of_Passage",
                questId: "Rite_of_Passage",
                questName: "Rite of Passage",
                quantity: 2,
                inRaid: true,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Natural_Exchange",
                questId: "Natural_Exchange",
                questName: "Natural Exchange",
                quantity: 2,
                inRaid: false,
                notes: ""
            }
        ],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Generator",
                hideoutModuleName: "Generator",
                quantity: 0,
                inRaid: false,
                notes: "Can be used as fuel to run the Generator"
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Propane_tank_(5L)",
        id: "Propane_tank_(5L)",
        category: "Flammable materials",
        name: "Propane tank (5L)",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/1/14/5L_propane_tank_icon.png/revision/latest?cb=20211220211655",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Spa_Tour_-_Part_7",
                questId: "Spa_Tour_-_Part_7",
                questName: "Spa Tour - Part 7",
                quantity: 2,
                inRaid: true,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Thirsty_-_Breadwinner",
                questId: "Thirsty_-_Breadwinner",
                questName: "Thirsty - Breadwinner",
                quantity: 2,
                inRaid: true,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Thirsty_-_Delivery",
                questId: "Thirsty_-_Delivery",
                questName: "Thirsty - Delivery",
                quantity: 2,
                inRaid: false,
                notes: ""
            }
        ],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/SurvL_Survivor_Lighter",
        id: "SurvL_Survivor_Lighter",
        category: "Flammable materials",
        name: "SurvL Survivor Lighter",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/ab/SurvL_Icon.png/revision/latest?cb=20250122142531",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: true,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Cultist_Circle",
                hideoutModuleName: "Cultist Circle",
                quantity: 1,
                inRaid: true,
                notes: "Not needed by \"The Unheard\" game edition owners"
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/TP-200_TNT_brick",
        id: "TP-200_TNT_brick",
        category: "Flammable materials",
        name: "TP-200 TNT brick",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/3a/TNT_brick_icon.png/revision/latest?cb=20210330162135",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Old_Patterns",
                questId: "Old_Patterns",
                questName: "Old Patterns",
                quantity: 15,
                inRaid: false,
                notes: ""
            }
        ],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Security_level_2",
                hideoutModuleName: "Security level 2",
                quantity: 1,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/WD-40_(400ml)",
        id: "WD-40_(400ml)",
        category: "Flammable materials",
        name: "WD-40 (400ml)",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/2d/Wd-40400icon.png/revision/latest?cb=20230218205758",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/WD-40_(100ml)",
        id: "WD-40_(100ml)",
        category: "Flammable materials",
        name: "WD-40 100ml",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/06/WD40_100ml_Icon.png/revision/latest?cb=20230218205825",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Spa_Tour_-_Part_3",
                questId: "Spa_Tour_-_Part_3",
                questName: "Spa Tour - Part 3",
                quantity: 1,
                inRaid: true,
                notes: ""
            }
        ],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Gym",
                hideoutModuleName: "Gym",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Security_level_2",
                hideoutModuleName: "Security level 2",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Stash_level_2",
                hideoutModuleName: "Stash level 2",
                quantity: 4,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Zibbo_lighter",
        id: "Zibbo_lighter",
        category: "Flammable materials",
        name: "Zibbo lighter",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/6e/Zibbo_lighter_Icon.png/revision/latest?cb=20230723205742",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    }
];