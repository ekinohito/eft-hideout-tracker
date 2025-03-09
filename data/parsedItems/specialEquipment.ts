import { Item } from "./types";

export const specialEquipment: Item[] = [
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Body_armor_repair_kit",
        id: "Body_armor_repair_kit",
        category: "Special equipment",
        name: "Body armor repair kit",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/5/5e/ArmorRepairKit3.png/revision/latest/scale-to-width-down/180?cb=20220816202836",
        isBarterItem: false,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: [
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
        url: "https://escapefromtarkov.fandom.com/wiki/Digital_secure_DSP_radio_transmitter",
        id: "Digital_secure_DSP_radio_transmitter",
        category: "Special equipment",
        name: "Digital secure DSP radio transmitter",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/f/fb/DSP_transmitter_icon.png/revision/latest?cb=20221231130128",
        isBarterItem: false,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Getting_Acquainted",
                questId: "Getting_Acquainted",
                questName: "Getting Acquainted",
                quantity: 1,
                inRaid: false,
                notes: "received upon accepting the quest Knock-Knock"
            }
        ],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/EYE_MK.2_professional_hand-held_compass",
        id: "EYE_MK.2_professional_hand-held_compass",
        category: "Special equipment",
        name: "EYE MK.2 professional hand-held compass",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/1/17/Compass_icon.png/revision/latest?cb=20220816202828",
        isBarterItem: false,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Leatherman_Multitool",
        id: "Leatherman_Multitool",
        category: "Special equipment",
        name: "Leatherman Multitool",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/37/Multitoolicon.png/revision/latest?cb=20220816202824",
        isBarterItem: false,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: true,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Fishing_Gear",
                questId: "Fishing_Gear",
                questName: "Fishing Gear",
                quantity: 1,
                inRaid: false,
                notes: "received upon accepting the quest"
            }
        ],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Workbench_level_1",
                hideoutModuleName: "Workbench level 1",
                quantity: 1,
                inRaid: false,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Shooting_Range_level_3",
                hideoutModuleName: "Shooting Range level 3",
                quantity: 1,
                inRaid: false,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Gear_Rack_level_1",
                hideoutModuleName: "Gear Rack level 1",
                quantity: 1,
                inRaid: false,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Mark_of_The_Unheard",
        id: "Mark_of_The_Unheard",
        category: "Special equipment",
        name: "Mark of The Unheard",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/2d/Mark_of_the_Unheard_icon.png/revision/latest?cb=20240425201636",
        isBarterItem: false,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/MS2000_Marker",
        id: "MS2000_Marker",
        category: "Special equipment",
        name: "MS2000 Marker",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/a9/MS2000_Marker_icon.png/revision/latest?cb=20220816202821",
        isBarterItem: false,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Big_Customer",
                questId: "Big_Customer",
                questName: "Big Customer",
                quantity: 1,
                inRaid: false,
                notes: "or Chemical - Part 4 or Out of Curiosity"
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/BP_Depot",
                questId: "BP_Depot",
                questName: "BP Depot",
                quantity: 4,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Black_Swan",
                questId: "Black_Swan",
                questName: "Black Swan",
                quantity: 3,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Anesthesia",
                questId: "Anesthesia",
                questName: "Anesthesia",
                quantity: 3,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Easy_Job_-_Part_1",
                questId: "Easy_Job_-_Part_1",
                questName: "Easy Job - Part 1",
                quantity: 1,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Health_Care_Privacy_-_Part_1",
                questId: "Health_Care_Privacy_-_Part_1",
                questName: "Health Care Privacy - Part 1",
                quantity: 3,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Rigged_Game",
                questId: "Rigged_Game",
                questName: "Rigged Game",
                quantity: 3,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Tigr_Safari",
                questId: "Tigr_Safari",
                questName: "Tigr Safari",
                quantity: 3,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Scrap_Metal",
                questId: "Scrap_Metal",
                questName: "Scrap Metal",
                quantity: 3,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Humanitarian_Supplies",
                questId: "Humanitarian_Supplies",
                questName: "Humanitarian Supplies",
                quantity: 2,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/The_Cult_-_Part_2",
                questId: "The_Cult_-_Part_2",
                questName: "The Cult - Part 2",
                quantity: 4,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Spa_Tour_-_Part_2",
                questId: "Spa_Tour_-_Part_2",
                questName: "Spa Tour - Part 2",
                quantity: 2,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Wet_Job_-_Part_2",
                questId: "Wet_Job_-_Part_2",
                questName: "Wet Job - Part 2",
                quantity: 1,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Revision_-_Reserve",
                questId: "Revision_-_Reserve",
                questName: "Revision - Reserve",
                quantity: 5,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Cargo_X_-_Part_4",
                questId: "Cargo_X_-_Part_4",
                questName: "Cargo X - Part 4",
                quantity: 1,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Steady_Signal",
                questId: "Steady_Signal",
                questName: "Steady Signal",
                quantity: 5,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Abandoned_Cargo",
                questId: "Abandoned_Cargo",
                questName: "Abandoned Cargo",
                quantity: 7,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Energy_Crisis",
                questId: "Energy_Crisis",
                questName: "Energy Crisis",
                quantity: 4,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/A_Fuel_Matter",
                questId: "A_Fuel_Matter",
                questName: "A Fuel Matter",
                quantity: 2,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Minibus",
                questId: "Minibus",
                questName: "Minibus",
                quantity: 3,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/The_Blood_of_War_-_Part_1",
                questId: "The_Blood_of_War_-_Part_1",
                questName: "The Blood of War - Part 1",
                quantity: 3,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/The_Blood_of_War_-_Part_3",
                questId: "The_Blood_of_War_-_Part_3",
                questName: "The Blood of War - Part 3",
                quantity: 3,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Revision_-_Lighthouse",
                questId: "Revision_-_Lighthouse",
                questName: "Revision - Lighthouse",
                quantity: 4,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Revision_-_Streets_of_Tarkov",
                questId: "Revision_-_Streets_of_Tarkov",
                questName: "Revision - Streets of Tarkov",
                quantity: 3,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Assessment_-_Part_2",
                questId: "Assessment_-_Part_2",
                questName: "Assessment - Part 2",
                quantity: 4,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Information_Source",
                questId: "Information_Source",
                questName: "Information Source",
                quantity: 2,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Trouble_in_the_Big_City",
                questId: "Trouble_in_the_Big_City",
                questName: "Trouble in the Big City",
                quantity: 1,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Hot_Wheels",
                questId: "Hot_Wheels",
                questName: "Hot Wheels",
                quantity: 1,
                inRaid: false,
                notes: ""
            }
        ],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Radio_repeater",
        id: "Radio_repeater",
        category: "Special equipment",
        name: "Radio repeater",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/05/Radio_repeater_icon.png/revision/latest?cb=20221229065025",
        isBarterItem: false,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Network_Provider_-_Part_2",
                questId: "Network_Provider_-_Part_2",
                questName: "Network Provider - Part 2",
                quantity: 4,
                inRaid: false,
                notes: ""
            }
        ],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Signal_Jammer",
        id: "Signal_Jammer",
        category: "Special equipment",
        name: "Signal Jammer",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/67/Signal_Jammer_icon.png/revision/latest?cb=20220816202817",
        isBarterItem: false,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: true,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Broadcast_-_Part_1",
                questId: "Broadcast_-_Part_1",
                questName: "Broadcast - Part 1",
                quantity: 1,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Signal_-_Part_3",
                questId: "Signal_-_Part_3",
                questName: "Signal - Part 3",
                quantity: 3,
                inRaid: false,
                notes: ""
            }
        ],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Sacred_Amulet",
        id: "Sacred_Amulet",
        category: "Special equipment",
        name: "Sacred Amulet",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/8/87/Sacred_Amulet_icon.png/revision/latest?cb=20240118202253",
        isBarterItem: false,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/%22The_Eye%22_mortar_strike_signaling_device",
        id: "The_Eye_mortar_strike_signaling_device",
        category: "Special equipment",
        name: "\"The Eye\" mortar strike signaling device",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/09/%22The_Eye%22_Icon.png/revision/latest?cb=20240927143452",
        isBarterItem: false,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Tripwire_installation_kit",
        id: "Tripwire_installation_kit",
        category: "Special equipment",
        name: "Tripwire installation kit",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/c/cd/TripwireInstallationKitIcon.png/revision/latest?cb=20240825134426",
        isBarterItem: false,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Vortex_Ranger_1500_rangefinder",
        id: "Vortex_Ranger_1500_rangefinder",
        category: "Special equipment",
        name: "Vortex Ranger 1500 rangefinder",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/8/87/Vortex_Ranger_1500_rangefinder_icon.png/revision/latest?cb=20220816202751",
        isBarterItem: false,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/WI-FI_Camera",
        id: "WI-FI_Camera",
        category: "Special equipment",
        name: "WI-FI Camera",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/9/9a/WIFI_Camera_Icon.png/revision/latest?cb=20220816202813",
        isBarterItem: false,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Drug_Trafficking",
                questId: "Drug_Trafficking",
                questName: "Drug Trafficking",
                quantity: 1,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/The_Walls_Have_Eyes",
                questId: "The_Walls_Have_Eyes",
                questName: "The Walls Have Eyes",
                quantity: 3,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Informed_Means_Armed",
                questId: "Informed_Means_Armed",
                questName: "Informed Means Armed",
                quantity: 3,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/The_Door",
                questId: "The_Door",
                questName: "The Door",
                quantity: 2,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Is_This_a_Reference%3F",
                questId: "Is_This_a_Reference%3F",
                questName: "Is This a Reference?",
                quantity: 27,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapeffromtarkov.fandom.com/wiki/Provide_Viewership",
                questId: "Provide_Viewership",
                questName: "Provide Viewership",
                quantity: 4,
                inRaid: false,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Viewer",
                questId: "Viewer",
                questName: "Viewer",
                quantity: 3,
                inRaid: false,
                notes: "\"Edge of Darkness\" game edition buyers only"
            }
        ],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Shooting_range_level_2",
                hideoutModuleName: "Shooting range level 2",
                quantity: 3,
                inRaid: false,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Cultist_Circle",
                hideoutModuleName: "Cultist Circle",
                quantity: 1,
                inRaid: false,
                notes: "Not needed by \"The Unheard\" game edition owners"
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Weapon_repair_kit",
        id: "Weapon_repair_kit",
        category: "Special equipment",
        name: "Weapon repair kit",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/20/WeaponRepairKit3.png/revision/latest/scale-to-width-down/180?cb=20220816202832",
        isBarterItem: false,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    }
];
