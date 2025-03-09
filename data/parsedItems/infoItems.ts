import { Item } from "./types";

export const infoItems: Item[] = [
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Advanced_Electronic_Materials_textbook",
        id: "Advanced_Electronic_Materials_textbook",
        category: "Info items",
        name: "Advanced Electronic Materials textbook",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/08/Aem_textbook_icon.png/revision/latest?cb=20230304223808",
        isBarterItem: false,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: true,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/BakeEzy_cook_book",
        id: "BakeEzy_cook_book",
        category: "Info items",
        name: "BakeEzy cook book",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/d2/BakeEzy_Cook_Book_icon.png/revision/latest?cb=20220704161413",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: true,
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
                hideoutModuleId: "Library",
                hideoutModuleName: "Library",
                quantity: 1,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Diary",
        id: "Diary",
        category: "Info items",
        name: "Diary",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/5/5e/Diary_Icon1.png/revision/latest?cb=20211220220929",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Library",
                hideoutModuleName: "Library",
                quantity: 2,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Intelligence_folder",
        id: "Intelligence_folder",
        category: "Info items",
        name: "Intelligence folder",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/8/85/FolderWithIntelligence_Icon.png/revision/latest?cb=20211220222031",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Intelligence_Center_level_1",
                hideoutModuleName: "Intelligence Center level 1",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Intelligence_Center_level_2",
                hideoutModuleName: "Intelligence Center level 2",
                quantity: 3,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Military_flash_drive",
        id: "Military_flash_drive",
        category: "Info items",
        name: "Military flash drive",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/35/MFD_icon.png/revision/latest?cb=20220702134651",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Special_Equipment",
                questId: "Special_Equipment",
                questName: "Special Equipment",
                quantity: 4,
                inRaid: true,
                notes: ""
            }
        ],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Intelligence_Center_level_3",
                hideoutModuleName: "Intelligence Center level 3",
                quantity: 5,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/SAS_drive",
        id: "SAS_drive",
        category: "Info items",
        name: "SAS drive",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/7/75/Sas_icon.png/revision/latest?cb=20250114201053",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Secure_Flash_drive",
        id: "Secure_Flash_drive",
        category: "Info items",
        name: "Secure Flash drive",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/b/b7/Secure_Flash_drive_Icon.png/revision/latest?cb=20241031165629",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/What%E2%80%99s_on_the_Flash_Drive%3F",
                questId: "What%E2%80%99s_on_the_Flash_Drive%3F",
                questName: "What’s on the Flash Drive?",
                quantity: 2,
                inRaid: true,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Shady_Business",
                questId: "Shady_Business",
                questName: "Shady Business",
                quantity: 3,
                inRaid: true,
                notes: ""
            }
        ],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Intelligence_Center_level_2",
                hideoutModuleName: "Intelligence Center level 2",
                quantity: 3,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Secure_magnetic_tape_cassette",
        id: "Secure_magnetic_tape_cassette",
        category: "Info items",
        name: "Secure magnetic tape cassette",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/f/f5/SMT_Icon.png/revision/latest?cb=20211229222448",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Intelligence_Center_level_3",
                hideoutModuleName: "Intelligence Center level 3",
                quantity: 2,
                inRaid: false,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Silicon_Optoelectronic_Integrated_Circuits_textbook",
        id: "Silicon_Optoelectronic_Integrated_Circuits_textbook",
        category: "Info items",
        name: "Silicon Optoelectronic Integrated Circuits textbook",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/9/98/SOIC_textbook_icon.png/revision/latest?cb=20230304223813",
        isBarterItem: false,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: true,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Slim_diary",
        id: "Slim_diary",
        category: "Info items",
        name: "Slim diary",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/e5/SlimDiaryIcon.png/revision/latest?cb=20241101001113",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Library",
                hideoutModuleName: "Library",
                quantity: 2,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/SSD_drive",
        id: "SSD_drive",
        category: "Info items",
        name: "SSD drive",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/8/8f/Ssd_icon.png/revision/latest?cb=20250114201018",
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
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Security_level_3",
                hideoutModuleName: "Security level 3",
                quantity: 1,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Tech_manual",
        id: "Tech_manual",
        category: "Info items",
        name: "Tech manual",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/7/7b/Lada_manual_icon.png/revision/latest?cb=20200317181559",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: true,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Library",
                hideoutModuleName: "Library",
                quantity: 5,
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
                hideoutModuleId: "Weapon_Rack_level_3",
                hideoutModuleName: "Weapon Rack level 3",
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
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/TerraGroup_%22Blue_Folders%22_materials",
        id: "TerraGroup_Blue_Folders_materials",
        category: "Info items",
        name: "TerraGroup \"Blue Folders\" materials",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/4/43/Blue_Folders_materials_icon.png/revision/latest?cb=20221231183616",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Return_the_Favor",
                questId: "Return_the_Favor",
                questName: "Return the Favor",
                quantity: 2,
                inRaid: false,
                notes: ""
            }
        ],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Topographic_survey_maps",
        id: "Topographic_survey_maps",
        category: "Info items",
        name: "Topographic survey maps",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/3c/MapsIcon.png/revision/latest?cb=20220706013159",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Intelligence_Center_level_1",
                hideoutModuleName: "Intelligence Center level 1",
                quantity: 1,
                inRaid: true,
                notes: ""
            }
        ]
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Video_cassette_with_the_movie_Cyborg_Killer_from_%22Prokhodimec%22",
        id: "Video_cassette_with_the_movie_Cyborg_Killer_from_Prokhodimec",
        category: "Info items",
        name: "Video cassette with the movie Cyborg Killer from \"Prokhodimec\"",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/a5/Video_cassette_with_the_Cyborg_Killer_movie_icon.png/revision/latest?cb=20240310014051",
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
]
