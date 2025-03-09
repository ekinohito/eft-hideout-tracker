import { Item } from "./types";

export const buildingMaterials: Item[] = [
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Analog_thermometer",
        id: "Analog_thermometer",
        category: "Building materials",
        name: "Analog thermometer",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/9/92/Anal_Thermometer_Icon.png/revision/latest?cb=20250114194634",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Booze_Generator",
                hideoutModuleName: "Booze Generator",
                quantity: 2,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Bolts",
        id: "Bolts",
        category: "Building materials",
        name: "Bolts",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/7/70/Boltsicon.png/revision/latest?cb=20250114194033",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Gym",
                hideoutModuleName: "Gym",
                quantity: 3,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Shooting_Range_level_1",
                hideoutModuleName: "Shooting Range level 1",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Stash_level_4",
                hideoutModuleName: "Stash level 4",
                quantity: 10,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Water_Collector_level_1",
                hideoutModuleName: "Water Collector level 1",
                quantity: 5,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Workbench_level_1",
                hideoutModuleName: "Workbench level 1",
                quantity: 2,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Workbench_level_2",
                hideoutModuleName: "Workbench level 2",
                quantity: 6,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Weapon_Rack_level_1",
                hideoutModuleName: "Weapon Rack level 1",
                quantity: 15,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Gear_Rack_level_1",
                hideoutModuleName: "Gear Rack level 1",
                quantity: 15,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Corrugated_hose",
        id: "Corrugated_hose",
        category: "Building materials",
        name: "Corrugated hose",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/b/b0/Hoseicon.png/revision/latest?cb=20250114194507",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Spa_Tour_-_Part_3",
                questId: "Spa_Tour_-_Part_3",
                questName: "Spa Tour - Part 3",
                quantity: 2,
                inRaid: true,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Spa_Tour_-_Part_7",
                questId: "Spa_Tour_-_Part_7",
                questName: "Spa Tour - Part 7",
                quantity: 2,
                inRaid: true,
                notes: ""
            }
        ],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Booze_Generator",
                hideoutModuleName: "Booze Generator",
                quantity: 5,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Defective_Wall_level_6",
                hideoutModuleName: "Defective Wall level 6",
                quantity: 2,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Lavatory_level_2",
                hideoutModuleName: "Lavatory level 2",
                quantity: 3,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Lavatory_level_3",
                hideoutModuleName: "Lavatory level 3",
                quantity: 6,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Nutrition_Unit_level_2",
                hideoutModuleName: "Nutrition Unit level 2",
                quantity: 2,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Water_Collector_level_1",
                hideoutModuleName: "Water Collector level 1",
                quantity: 4,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Water_Collector_level_2",
                hideoutModuleName: "Water Collector level 2",
                quantity: 6,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Duct_tape",
        id: "Duct_tape",
        category: "Building materials",
        name: "Duct tape",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/38/Duct_tape_Icon.png/revision/latest?cb=20250114194407",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
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
                hideoutModuleId: "Rest_Space_level_1",
                hideoutModuleName: "Rest Space level 1",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Water_Collector_level_1",
                hideoutModuleName: "Water Collector level 1",
                quantity: 3,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Weapon_Rack_level_2",
                hideoutModuleName: "Weapon Rack level 2",
                quantity: 5,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Hall_of_Fame_level_2",
                hideoutModuleName: "Hall of Fame level 2",
                quantity: 3,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Gear_Rack_level_2",
                hideoutModuleName: "Gear Rack level 2",
                quantity: 5,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Insulating_tape",
        id: "Insulating_tape",
        category: "Building materials",
        name: "Insulating tape",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/e4/Insulating_tape_Icon.png/revision/latest?cb=20250114194426",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Key_to_the_Tower",
                questId: "Key_to_the_Tower",
                questName: "Key to the Tower",
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
                hideoutModuleId: "Weapon_Rack_level_1",
                hideoutModuleName: "Weapon Rack level 1",
                quantity: 5,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Hall_of_Fame_level_1",
                hideoutModuleName: "Hall of Fame level 1",
                quantity: 2,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/KEKTAPE_duct_tape",
        id: "KEKTAPE_duct_tape",
        category: "Building materials",
        name: "KEKTAPE duct tape",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/0f/KEKTape_icon.png/revision/latest?cb=20200314195751",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Textile_-_Part_2",
                questId: "Textile_-_Part_2",
                questName: "Textile - Part 2",
                quantity: 5,
                inRaid: true,
                notes: ""
            }
        ],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Lavatory_level_2",
                hideoutModuleName: "Lavatory level 2",
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
                hideoutModuleId: "Weapon_Rack_level_3",
                hideoutModuleName: "Weapon Rack level 3",
                quantity: 5,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Hall_of_Fame_level_3",
                hideoutModuleName: "Hall of Fame level 3",
                quantity: 3,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Gear_Rack_level_3",
                hideoutModuleName: "Gear Rack level 3",
                quantity: 5,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Metal_spare_parts",
        id: "Metal_spare_parts",
        category: "Building materials",
        name: "Metal spare parts",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/f/f5/M-parts-icon.png/revision/latest?cb=20250114194302",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Booze_Generator",
                hideoutModuleName: "Booze Generator",
                quantity: 2,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Defective_Wall_level_3",
                hideoutModuleName: "Defective Wall level 3",
                quantity: 5,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Generator_level_3",
                hideoutModuleName: "Generator level 3",
                quantity: 7,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Shooting_Range_level_1",
                hideoutModuleName: "Shooting Range level 1",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Shooting_Range_level_2",
                hideoutModuleName: "Shooting Range level 2",
                quantity: 5,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Shooting_Range_level_3",
                hideoutModuleName: "Shooting Range level 3",
                quantity: 5,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Vents_level_2",
                hideoutModuleName: "Vents level 2",
                quantity: 2,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Vents_level_3",
                hideoutModuleName: "Vents level 3",
                quantity: 5,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Weapon_Rack_level_2",
                hideoutModuleName: "Weapon Rack level 2",
                quantity: 5,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Weapon_Rack_level_3",
                hideoutModuleName: "Weapon Rack level 3",
                quantity: 10,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Hall_of_Fame_level_3",
                hideoutModuleName: "Hall of Fame level 3",
                quantity: 15,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Gear_Rack_level_3",
                hideoutModuleName: "Gear Rack level 3",
                quantity: 15,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Military_corrugated_tube",
        id: "Military_corrugated_tube",
        category: "Building materials",
        name: "Military corrugated tube",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/5/5f/Military_corrugated_tube_Icon.png/revision/latest?cb=20250114194547",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Air_Filtering_Unit",
                hideoutModuleName: "Air Filtering Unit",
                quantity: 3,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Heating_level_3",
                hideoutModuleName: "Heating level 3",
                quantity: 2,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Pack_of_nails",
        id: "Pack_of_nails",
        category: "Building materials",
        name: "Pack of nails",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/7/72/Nailsicon.png/revision/latest?cb=20250114194052",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Stash_level_2",
                hideoutModuleName: "Stash level 2",
                quantity: 5,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Stash_level_3",
                hideoutModuleName: "Stash level 3",
                quantity: 7,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Weapon_Rack_level_1",
                hideoutModuleName: "Weapon Rack level 1",
                quantity: 5,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Hall_of_Fame_level_1",
                hideoutModuleName: "Hall of Fame level 1",
                quantity: 5,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Gear_Rack_level_2",
                hideoutModuleName: "Gear Rack level 2",
                quantity: 8,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Pack_of_screws",
        id: "Pack_of_screws",
        category: "Building materials",
        name: "Pack of screws",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/8/8f/Screwsicon.png/revision/latest?cb=20250114194345",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Lavatory_level_2",
                hideoutModuleName: "Lavatory level 2",
                quantity: 5,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Shooting_Range_level_2",
                hideoutModuleName: "Shooting Range level 2",
                quantity: 3,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Stash_level_2",
                hideoutModuleName: "Stash level 2",
                quantity: 10,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Stash_level_3",
                hideoutModuleName: "Stash level 3",
                quantity: 15,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Weapon_Rack_level_2",
                hideoutModuleName: "Weapon Rack level 2",
                quantity: 10,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Hall_of_Fame_level_2",
                hideoutModuleName: "Hall of Fame level 2",
                quantity: 6,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Piece_of_plexiglass",
        id: "Piece_of_plexiglass",
        category: "Building materials",
        name: "Piece of plexiglass",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/34/Plexicon.png/revision/latest?cb=20230223204120",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Key_to_the_Tower",
                questId: "Key_to_the_Tower",
                questName: "Key to the Tower",
                quantity: 2,
                inRaid: true,
                notes: ""
            }
        ],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Pressure_gauge",
        id: "Pressure_gauge",
        category: "Building materials",
        name: "Pressure gauge",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/ee/Pressure_gauge_icon.png/revision/latest?cb=20250114194447",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Bitcoin_Farm_level_3",
                hideoutModuleName: "Bitcoin Farm level 3",
                quantity: 10,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Booze_Generator",
                hideoutModuleName: "Booze Generator",
                quantity: 2,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Lavatory_level_3",
                hideoutModuleName: "Lavatory level 3",
                quantity: 2,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Screw_nuts",
        id: "Screw_nuts",
        category: "Building materials",
        name: "Screw nuts",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/c/cd/Screwnuticon.png/revision/latest?cb=20250114194010",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Gym",
                hideoutModuleName: "Gym",
                quantity: 3,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Shooting_Range_level_1",
                hideoutModuleName: "Shooting Range level 1",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Stash_level_4",
                hideoutModuleName: "Stash level 4",
                quantity: 10,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Water_Collector_level_1",
                hideoutModuleName: "Water Collector level 1",
                quantity: 5,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Workbench_level_1",
                hideoutModuleName: "Workbench level 1",
                quantity: 2,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Shustrilo_sealing_foam",
        id: "Shustrilo_sealing_foam",
        category: "Building materials",
        name: "Shustrilo sealing foam",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/ea/Shusicon.png/revision/latest?cb=20230218205737",
        isBarterItem: false,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Stash_level_4",
                hideoutModuleName: "Stash level 4",
                quantity: 5,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Water_Collector_level_3",
                hideoutModuleName: "Water Collector level 3",
                quantity: 5,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Weapon_Rack_level_3",
                hideoutModuleName: "Weapon Rack level 3",
                quantity: 3,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Gear_Rack_level_2",
                hideoutModuleName: "Gear Rack level 2",
                quantity: 3,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Silicone_tube",
        id: "Silicone_tube",
        category: "Building materials",
        name: "Silicone tube",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/2e/SiliconeTubeIcon.png/revision/latest?cb=20250114192432",
        isBarterItem: false,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: true,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Bitcoin_Farm_level_3",
                hideoutModuleName: "Bitcoin Farm level 3",
                quantity: 15,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Booze_Generator",
                hideoutModuleName: "Booze Generator",
                quantity: 4,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Tube_of_Poxeram_cold_welding",
        id: "Tube_of_Poxeram_cold_welding",
        category: "Building materials",
        name: "Tube of Poxeram cold welding",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/1/15/PoxeramIcon.png/revision/latest?cb=20250114201003",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: [
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
                hideoutModuleId: "Weapon_Rack_level_2",
                hideoutModuleName: "Weapon Rack level 2",
                quantity: 3,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Hall_of_Fame_level_2",
                hideoutModuleName: "Hall of Fame level 2",
                quantity: 2,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Xenomorph_sealing_foam",
        id: "Xenomorph_sealing_foam",
        category: "Building materials",
        name: "Xenomorph sealing foam",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/c/ce/Xenoicon.png/revision/latest?cb=20250114200858",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
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
                hideoutModuleId: "Lavatory_level_3",
                hideoutModuleName: "Lavatory level 3",
                quantity: 3,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Weapon_Rack_level_1",
                hideoutModuleName: "Weapon Rack level 1",
                quantity: 3,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Hall_of_Fame_level_2",
                hideoutModuleName: "Hall of Fame level 2",
                quantity: 2,
                inRaid: true,
                notes: ""
            }
        ]
    }
];