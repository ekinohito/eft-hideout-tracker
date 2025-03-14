import { Item } from "./types";

export const provisions: Item[] = [
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Emelya_rye_croutons",
        id: "Emelya_rye_croutons",
        category: "Provisions",
        name: "Emelya rye croutons",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/c/c1/Emeyla_Croutons.png/revision/latest?cb=20250117122429",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Army_crackers",
        id: "Army_crackers",
        category: "Provisions",
        name: "Army crackers",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/2f/Army_Crackers_icon.png/revision/latest?cb=20250114190854",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Rye_croutons",
        id: "Rye_croutons",
        category: "Provisions",
        name: "Rye croutons",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/67/Rye_Croutons.png/revision/latest?cb=20250117123913",
        isBarterItem: false,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Slickers_chocolate_bar",
        id: "Slickers_chocolate_bar",
        category: "Provisions",
        name: "Slickers chocolate bar",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/9/93/Slickers_bar_icon.png/revision/latest?cb=20250117124034",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Alyonka_chocolate_bar",
        id: "Alyonka_chocolate_bar",
        category: "Provisions",
        name: "Alyonka chocolate bar",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/b/bc/Alyonka_Chocolate_Bar_icon.png/revision/latest?cb=20250117122517",
        isBarterItem: false,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Easy_Money_-_Part_2",
                questId: "Easy_Money_-_Part_2",
                questName: "Easy Money - Part 2",
                quantity: 2,
                inRaid: true,
                notes: ""
            }
        ],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Pack_of_oat_flakes",
        id: "Pack_of_oat_flakes",
        category: "Provisions",
        name: "Pack of oat flakes",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/5/5f/Oatflakes_icon.png/revision/latest?cb=20250117123521",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Pack_of_sugar",
        id: "Pack_of_sugar",
        category: "Provisions",
        name: "Pack of sugar",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/a8/Sugar_icon.png/revision/latest?cb=20250117121925",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Can_of_condensed_milk",
        id: "Can_of_condensed_milk",
        category: "Provisions",
        name: "Can of condensed milk",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/c/c0/Condmilkicon.png/revision/latest?cb=20250117122310",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Jar_of_DevilDog_mayo",
        id: "Jar_of_DevilDog_mayo",
        category: "Provisions",
        name: "Jar of DevilDog mayo",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/ea/DDGMayoIcon.png/revision/latest?cb=20250117122350",
        isBarterItem: false,
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
        url: "https://escapefromtarkov.fandom.com/wiki/Can_of_beef_stew_(Small)",
        id: "Can_of_beef_stew_(Small)",
        category: "Provisions",
        name: "Can of beef stew (Small)",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/a7/Can_of_beef_stew_Icon.png/revision/latest?cb=20250117122129",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/General_Wares",
                questId: "General_Wares",
                questName: "General Wares",
                quantity: 15,
                inRaid: true,
                notes: ""
            }
        ],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Can_of_herring",
        id: "Can_of_herring",
        category: "Provisions",
        name: "Can of herring",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/2d/Herring_icon.png/revision/latest?cb=20250117122845",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Can_of_pacific_saury",
        id: "Can_of_pacific_saury",
        category: "Provisions",
        name: "Can of pacific saury",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/7/7c/Saury_icon.png/revision/latest?cb=20250117123959",
        isBarterItem: false,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Can_of_beef_stew_(Large)",
        id: "Can_of_beef_stew_(Large)",
        category: "Provisions",
        name: "Can of beef stew (Large)",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/ad/Can_of_beef_stew_alt_Icon.png/revision/latest?cb=20250117122047",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapeffromtarkov.fandom.com/wiki/Acquaintance",
                questId: "Acquaintance",
                questName: "Acquaintance",
                quantity: 2,
                inRaid: true,
                notes: ""
            }
        ],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Can_of_humpback_salmon",
        id: "Can_of_humpback_salmon",
        category: "Provisions",
        name: "Can of humpback salmon",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/02/Humpback_icon.png/revision/latest?cb=20250117122931",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Salty_Dog_beef_sausage",
        id: "Salty_Dog_beef_sausage",
        category: "Provisions",
        name: "Salty Dog beef sausage",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/c/c8/Salty_dog_sausage_icon.png/revision/latest?cb=20250114190836",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/The_Delicious_Sausage",
                questId: "The_Delicious_Sausage",
                questName: "The Delicious Sausage",
                quantity: 1,
                inRaid: true,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Provocation",
                questId: "Provocation",
                questName: "Provocation",
                quantity: 1,
                inRaid: false,
                notes: ""
            }
        ],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Can_of_sprats",
        id: "Can_of_sprats",
        category: "Provisions",
        name: "Can of sprats",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/d6/Can_of_sprats_Icon.png/revision/latest?cb=20250117122225",
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
        url: "https://escapefromtarkov.fandom.com/wiki/Can_of_green_peas",
        id: "Can_of_green_peas",
        category: "Provisions",
        name: "Can of green peas",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/c/cf/Peas_icon.png/revision/latest?cb=20250117123658",
        isBarterItem: false,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Pack_of_Tarker_dried_meat",
        id: "Pack_of_Tarker_dried_meat",
        category: "Provisions",
        name: "Pack of Tarker dried meat",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/ef/Pack_of_Tarker_dried_meat_icon.png/revision/latest?cb=20240820224050",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Easy_Money_-_Part_2",
                questId: "Easy_Money_-_Part_2",
                questName: "Easy Money - Part 2",
                quantity: 5,
                inRaid: true,
                notes: ""
            }
        ],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Pack_of_instant_noodles",
        id: "Pack_of_instant_noodles",
        category: "Provisions",
        name: "Pack of instant noodles",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/b/b5/Noodles_Icon.png/revision/latest?cb=20240121000415",
        isBarterItem: false,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Acquaintance",
                questId: "Acquaintance",
                questName: "Acquaintance",
                quantity: 2,
                inRaid: true,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Easy_Money_-_Part_2",
                questId: "Easy_Money_-_Part_2",
                questName: "Easy Money - Part 2",
                quantity: 5,
                inRaid: true,
                notes: ""
            }
        ],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Can_of_squash_spread",
        id: "Can_of_squash_spread",
        category: "Provisions",
        name: "Can of squash spread",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/e3/Squash_Spread_icon.png/revision/latest?cb=20250117124110",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/MRE_ration_pack",
        id: "MRE_ration_pack",
        category: "Provisions",
        name: "MRE ration pack",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/a4/MRE_icon.png/revision/latest?cb=20250117123310",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Humanitarian_Supplies",
                questId: "Humanitarian_Supplies",
                questName: "Humanitarian Supplies",
                quantity: 5,
                inRaid: false,
                notes: ""
            }
        ],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Iskra_ration_pack",
        id: "Iskra_ration_pack",
        category: "Provisions",
        name: "Iskra ration pack",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/8/8f/Lunchbox_icon.png/revision/latest?cb=20250117123219",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Acquaintance",
                questId: "Acquaintance",
                questName: "Acquaintance",
                quantity: 3,
                inRaid: true,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/The_Survivalist_Path_-_Thrifty",
                questId: "The_Survivalist_Path_-_Thrifty",
                questName: "The Survivalist Path - Thrifty",
                quantity: 2,
                inRaid: false,
                notes: ""
            }
        ],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Can_of_Ice_Green_tea",
        id: "Can_of_Ice_Green_tea",
        category: "Provisions",
        name: "Can of Ice Green tea",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/e1/Green_Tea_icon.png/revision/latest?cb=20250117122805",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Can_of_TarCola_soda",
        id: "Can_of_TarCola_soda",
        category: "Provisions",
        name: "Can of TarCola soda",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/f/f9/Tar_Cola_icon.png/revision/latest?cb=20250117124154",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Pack_of_apple_juice",
        id: "Pack_of_apple_juice",
        category: "Provisions",
        name: "Pack of apple juice",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/4/43/Apple_Juice_icon.png/revision/latest?cb=20250117122619",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Can_of_Hot_Rod_energy_drink",
        id: "Can_of_Hot_Rod_energy_drink",
        category: "Provisions",
        name: "Can of Hot Rod energy drink",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/e6/Hor_Rod_icon.png/revision/latest?cb=20250107083516",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Can_of_Max_Energy_energy_drink",
        id: "Can_of_Max_Energy_energy_drink",
        category: "Provisions",
        name: "Can of Max Energy energy drink",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/ec/NRG_Drink_icon.png/revision/latest?cb=20220406135114",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Pack_of_Vita_juice",
        id: "Pack_of_Vita_juice",
        category: "Provisions",
        name: "Pack of Vita juice",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/2b/Vita_Juice_icon.png/revision/latest?cb=20250117124236",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Pack_of_Grand_juice",
        id: "Pack_of_Grand_juice",
        category: "Provisions",
        name: "Pack of Grand juice",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/f/f8/Grand_Juice_icon.png/revision/latest?cb=20250117122725",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Pack_of_Russian_Army_pineapple_juice",
        id: "Pack_of_Russian_Army_pineapple_juice",
        category: "Provisions",
        name: "Pack of Russian Army pineapple juice",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/1/15/Pineapple_Juice_icon.png/revision/latest?cb=20250107083356",
        isBarterItem: false,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Can_of_RatCola_soda",
        id: "Can_of_RatCola_soda",
        category: "Provisions",
        name: "Can of RatCola soda",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/4/4b/RatCola_Icon.png/revision/latest?cb=20250117123752",
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
        url: "https://escapefromtarkov.fandom.com/wiki/Pack_of_milk",
        id: "Pack_of_milk",
        category: "Provisions",
        name: "Pack of milk",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/d3/Pack_ofMilk_icon.png/revision/latest?cb=20250117123617",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Bottle_of_Pevko_Light_beer",
        id: "Bottle_of_Pevko_Light_beer",
        category: "Provisions",
        name: "Bottle of Pevko Light beer",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/d/df/Pevko_beer_icon.png/revision/latest?cb=20220703070058",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Easy_Money_-_Part_2",
                questId: "Easy_Money_-_Part_2",
                questName: "Easy Money - Part 2",
                quantity: 7,
                inRaid: true,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Booze",
                questId: "Booze",
                questName: "Booze",
                quantity: 20,
                inRaid: true,
                notes: ""
            }
        ],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Emergency_Water_Ration",
        id: "Emergency_Water_Ration",
        category: "Provisions",
        name: "Emergency Water Ration",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/3/32/EmergencyWaterRationIcon.png/revision/latest?cb=20220622002619",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Bottle_of_water_(0.6L)",
        id: "Bottle_of_water_(0.6L)",
        category: "Provisions",
        name: "Bottle of water (0.6L)",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/7/7f/Water_icon.png/revision/latest?cb=20250117124353",
        isBarterItem: false,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/The_Survivalist_Path_-_Thrifty",
                questId: "The_Survivalist_Path_-_Thrifty",
                questName: "The Survivalist Path - Thrifty",
                quantity: 2,
                inRaid: false,
                notes: ""
            }
        ],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Bottle_of_Norvinsky_Yadreniy_premium_kvass_(0.6L)",
        id: "Bottle_of_Norvinsky_Yadreniy_premium_kvass_(0.6L)",
        category: "Provisions",
        name: "Bottle of Norvinsky Yadreniy premium kvass (0.6L)",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/7/71/Kvass_icon.png/revision/latest?cb=20250107083211",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Aquamari_water_bottle_with_filter",
        id: "Aquamari_water_bottle_with_filter",
        category: "Provisions",
        name: "Aquamari water bottle with filter",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/b/bd/Aquamari_icon.png/revision/latest?cb=20250107083008",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Canister_with_purified_water",
        id: "Canister_with_purified_water",
        category: "Provisions",
        name: "Canister with purified water",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/2b/Purified_water_icon.png/revision/latest?cb=20250107082719",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Bottle_of_Dan_Jackiel_whiskey",
        id: "Bottle_of_Dan_Jackiel_whiskey",
        category: "Provisions",
        name: "Bottle of Dan Jackiel whiskey",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/c/cb/Whiskey_icon.png/revision/latest?cb=20250117124358",
        isBarterItem: true,
        isCraftingItem: false,
        isAuxiliaryCraftingItem: false,
        questRequirements: [],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Bottle_of_Tarkovskaya_vodka",
        id: "Bottle_of_Tarkovskaya_vodka",
        category: "Provisions",
        name: "Bottle of Tarkovskaya vodka",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/7/75/VodkaIcon.png/revision/latest?cb=20250117124348",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Easy_Money_-_Part_2",
                questId: "Easy_Money_-_Part_2",
                questName: "Easy Money - Part 2",
                quantity: 2,
                inRaid: true,
                notes: ""
            },
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Booze",
                questId: "Booze",
                questName: "Booze",
                quantity: 10,
                inRaid: true,
                notes: ""
            }
        ],
        hideoutRequirements: []
    },
    {
        url: "https://escapefromtarkov.fandom.com/wiki/Bottle_of_Fierce_Hatchling_moonshine",
        id: "Bottle_of_Fierce_Hatchling_moonshine",
        category: "Provisions",
        name: "Bottle of Fierce Hatchling moonshine",
        iconUrl: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/ad/Fiece_hatchling_moonshine_icon.png/revision/latest?cb=20231028094036",
        isBarterItem: true,
        isCraftingItem: true,
        isAuxiliaryCraftingItem: false,
        questRequirements: [
            {
                questUrl: "https://escapefromtarkov.fandom.com/wiki/Provocation",
                questId: "Provocation",
                questName: "Provocation",
                quantity: 1,
                inRaid: false,
                notes: ""
            }
        ],
        hideoutRequirements: [
            {
                hideoutModuleUrl: "https://escapefromtarkov.fandom.com/wiki/Hideout#Modules",
                hideoutModuleId: "Scav_Case",
                hideoutModuleName: "Scav Case",
                quantity: 3,
                inRaid: true,
                notes: ""
            }
        ]
    }
];
