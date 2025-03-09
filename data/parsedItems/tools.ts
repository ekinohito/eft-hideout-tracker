import { Item } from "./types";

export const tools: Item[] = [
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Awl",
        id: "Awl",
        category: "Tools",
        name: "Awl",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/4/42/Awl_icon.png/revision/latest?cb=20250114200823",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: true,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Lavatory_level_1",
                hideoutModuleName: "Lavatory level 1",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Gear_Rack_level_1",
                hideoutModuleName: "Gear Rack level 1",
                quantity: 1,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Bulbex_cable_cutter",
        id: "Bulbex_cable_cutter",
        category: "Tools",
        name: "Bulbex cable cutter",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/02/Bulbex_cable_cutter_icon1.png/revision/latest?cb=20220119005013",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Special_Comms",
                questId: "Special_Comms",
                questName: "Special Comms",
                quantity: 2,
                inRaid: false,
                notes: ""
            }
        ],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Generator_level_2",
                hideoutModuleName: "Generator level 2",
                quantity: 1,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Construction_measuring_tape",
        id: "Construction_measuring_tape",
        category: "Tools",
        name: "Construction measuring tape",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/0e/Construction_Measuring_Tape_Icon.png/revision/latest?cb=20211220220307",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Security_level_1",
                hideoutModuleName: "Security level 1",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Shooting_Range_level_2",
                hideoutModuleName: "Shooting Range level 2",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Cultist_Circle",
                hideoutModuleName: "Cultist Circle",
                quantity: 1,
                inRaid: true,
                notes: "Not needed by 'The Unheard' game edition owners"
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Fierce_Blow_sledgehammer",
        id: "Fierce_Blow_sledgehammer",
        category: "Tools",
        name: "Fierce Blow sledgehammer",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/d7/Fierce_blow_sledgehammer_icon.png/revision/latest?cb=20221231100449",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: true,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Defective_Wall_level_4",
                hideoutModuleName: "Defective Wall level 4",
                quantity: 1,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Flat_screwdriver",
        id: "Flat_screwdriver",
        category: "Tools",
        name: "Flat screwdriver",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/62/Flat_Screwdriver_Icon.PNG/revision/latest?cb=20250114200807",
        isBarterItem: false,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: true,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Flat_screwdriver_(Long)",
        id: "Flat_screwdriver_(Long)",
        category: "Tools",
        name: "Flat screwdriver (Long)",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/5/51/Long_screwdriver_icon.png/revision/latest?cb=20220102182054",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: true,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Hand_drill",
        id: "Hand_drill",
        category: "Tools",
        name: "Hand drill",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/04/Handdrill_icon.png/revision/latest/scale-to-width-down/180?cb=20211220222435",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: true,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapeffromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Stash_level_2",
                hideoutModuleName: "Stash level 2",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Weapon_Rack_level_1",
                hideoutModuleName: "Weapon Rack level 1",
                quantity: 1,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Inseq_gas_pipe_wrench",
        id: "Inseq_gas_pipe_wrench",
        category: "Tools",
        name: "Inseq gas pipe wrench",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/b/b2/Inseq_icon.png/revision/latest?cb=20240827210442",
        isBarterItem: true,
        isCraftingItem: false,
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
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Metal_cutting_scissors",
        id: "Metal_cutting_scissors",
        category: "Tools",
        name: "Metal cutting scissors",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/6d/Metal_cutting_scissors_icon.png/revision/latest?cb=20220120230701",
        isBarterItem: false,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: true,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Defective_Wall_level_5",
                hideoutModuleName: "Defective Wall level 5",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
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
                hideoutModuleId: "Weapon_Rack_level_1",
                hideoutModuleName: "Weapon Rack level 1",
                quantity: 1,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Nippers",
        id: "Nippers",
        category: "Tools",
        name: "Nippers",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/5/5d/Nippers_small.png/revision/latest?cb=20250114200842",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: true,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Pipe_grip_wrench",
        id: "Pipe_grip_wrench",
        category: "Tools",
        name: "Pipe grip wrench",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/f/fd/Pgw_small.png/revision/latest?cb=20211226193111",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: true,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Booze_Generator",
                hideoutModuleName: "Booze Generator",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Gear_Rack_level_2",
                hideoutModuleName: "Gear Rack level 2",
                quantity: 1,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Pliers",
        id: "Pliers",
        category: "Tools",
        name: "Pliers",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/8/8f/Plier_Icon.png/revision/latest?cb=20250122141728",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: true,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Pliers_Elite",
        id: "Pliers_Elite",
        category: "Tools",
        name: "Pliers Elite",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/a7/PliersElite.png/revision/latest?cb=20250114200945",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: true,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Defective_Wall_level_6",
                hideoutModuleName: "Defective Wall level 6",
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
                hideoutModuleId: "Water_Collector_level_3",
                hideoutModuleName: "Water Collector level 3",
                quantity: 2,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Workbench_level_3",
                hideoutModuleName: "Workbench level 3",
                quantity: 2,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Hall_of_Fame_level_2",
                hideoutModuleName: "Hall of Fame level 2",
                quantity: 1,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Ratchet_wrench",
        id: "Ratchet_wrench",
        category: "Tools",
        name: "Ratchet wrench",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/7/73/Ratchet_wrench_icon.png/revision/latest?cb=20210331215119",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: true,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Stash_level_4",
                hideoutModuleName: "Stash level 4",
                quantity: 2,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Water_Collector_level_3",
                hideoutModuleName: "Water Collector level 3",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Gear_Rack_level_3",
                hideoutModuleName: "Gear Rack level 3",
                quantity: 1,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Round_pliers",
        id: "Round_pliers",
        category: "Tools",
        name: "Round pliers",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/dd/RoundPliersIcon.png/revision/latest?cb=20250122142356",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: true,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Hall_of_Fame_level_1",
                hideoutModuleName: "Hall of Fame level 1",
                quantity: 1,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Screwdriver",
        id: "Screwdriver",
        category: "Tools",
        name: "Screwdriver",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/da/Screwdriver_Icon.png/revision/latest?cb=20220102192605",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: true,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Set_of_files_%22Master%22",
        id: "Set_of_files_%22Master%22",
        category: "Tools",
        name: "Set of files \"Master\"",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/7/7f/Files_master_icon.png/revision/latest?cb=20250122140937",
        isBarterItem: false,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: true,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Workbench_level_2",
                hideoutModuleName: "Workbench level 2",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Shooting_Range_level_3",
                hideoutModuleName: "Shooting Range level 3",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Weapon_Rack_level_2",
                hideoutModuleName: "Weapon Rack level 2",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Hall_of_Fame_level_3",
                hideoutModuleName: "Hall of Fame level 3",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Gear_Rack_level_3",
                hideoutModuleName: "Gear Rack level 3",
                quantity: 1,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Sewing_kit",
        id: "Sewing_kit",
        category: "Tools",
        name: "Sewing kit",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/30/SewingKit_Icon.png/revision/latest?cb=20211228095611",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: true,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Lavatory_level_2",
                hideoutModuleName: "Lavatory level 2",
                quantity: 2,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Gear_Rack_level_1",
                hideoutModuleName: "Gear Rack level 1",
                quantity: 1,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Toolset",
        id: "Toolset",
        category: "Tools",
        name: "Toolset",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/3a/Toolsicon.png/revision/latest?cb=20210805173459",
        isBarterItem: false,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: true,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Farming_-_Part_1",
                questId: "Farming_-_Part_1",
                questName: "Farming - Part 1",
                quantity: 2,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Capacity_Check",
                questId: "Capacity_Check",
                questName: "Capacity Check",
                quantity: 3,
                inRaid: false,
                notes: ""
            }
        ],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Defective_Wall_level_5",
                hideoutModuleName: "Defective Wall level 5",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Defective_Wall_level_6",
                hideoutModuleName: "Defective Wall level 6",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
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
                hideoutModuleId: "Hall_of_Fame_level_2",
                hideoutModuleName: "Hall of Fame level 2",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Lavatory_level_3",
                hideoutModuleName: "Lavatory level 3",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Shooting_Range_level_2",
                hideoutModuleName: "Shooting Range level 2",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Water_Collector_level_2",
                hideoutModuleName: "Water Collector level 2",
                quantity: 2,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Workbench_level_2",
                hideoutModuleName: "Workbench level 2",
                quantity: 3,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Wrench",
        id: "Wrench",
        category: "Tools",
        name: "Wrench",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/a4/Wrench_Icon.png/revision/latest?cb=20220120230748",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Nutrition_Unit_level_2",
                hideoutModuleName: "Nutrition Unit level 2",
                quantity: 4,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Gear_Rack_level_2",
                hideoutModuleName: "Gear Rack level 2",
                quantity: 1,
                inRaid: true,
                notes: ""
            }
        ]
    }
];
