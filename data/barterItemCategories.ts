// data/barterItemCategories.ts

export interface BarterItem {
    id: string;
    name: string;
}

export interface BarterCategory {
    id: string;
    name: string;
    items: BarterItem[];
}

export const barterItemCategories: BarterCategory[] = [
    {
        id: "building_materials",
        name: "Building Materials",
        items: [
            { id: "bolts", name: "Bolts" },
            { id: "duct_tape", name: "Duct tape" },
            { id: "metal_spare_parts", name: "Metal spare parts" },
            { id: "pack_of_nails", name: "Pack of nails" },
            { id: "pack_of_screws", name: "Pack of screws" },
            { id: "pressure_gauge", name: "Pressure gauge" },
        ],
    },
    {
        id: "electronics",
        name: "Electronics",
        items: [
            { id: "capacitor", name: "Capacitor" },
            { id: "cpu_fan", name: "CPU Fan" },
            { id: "electric_drill", name: "Electric drill" },
            { id: "electric_motor", name: "Electric motor" },
            { id: "phase_control_relay", name: "Phase control relay" },
            { id: "powercord", name: "Powercord" },
            { id: "power_supply_unit", name: "Power supply unit" },
            { id: "secure_tape", name: "Secure tape" },
            { id: "solar_panel", name: "Solar panel" },
            { id: "wires", name: "Wires" },
        ],
    },
    {
        id: "household_goods",
        name: "Household Goods",
        items: [
            { id: "classic_matches", name: "Classic matches" },
            { id: "dry_fuel", name: "Dry fuel" },
        ],
    },
    {
        id: "info_items",
        name: "Info Items",
        items: [
            { id: "diary", name: "Diary" },
            { id: "intelligence_folder", name: "Intelligence folder" },
        ],
    },
    {
        id: "medical_supplies",
        name: "Medical Supplies",
        items: [
            { id: "medical_bloodset", name: "Medical bloodset" },
            { id: "medical_tools", name: "Medical tools" },
            { id: "saline_solution", name: "Saline solution" },
        ],
    },
    {
        id: "tools",
        name: "Tools",
        items: [
            { id: "car_battery", name: "Car battery" },
            { id: "measuring_tape", name: "Measuring tape" },
            { id: "screwdriver", name: "Screwdriver" },
            { id: "spark_plug", name: "Spark plug" },
            { id: "toolset", name: "Toolset" },
            { id: "wd_40_100ml", name: "WD-40 (100ml)" },
        ],
    },
    {
        id: "valuables",
        name: "Valuables",
        items: [
            { id: "bronze_lion", name: "Bronze lion" },
            { id: "gold_chain", name: "Gold chain" },
            { id: "roler_submariner_gold_watch", name: "Roller Submariner gold watch" },
        ],
    },
    {
        id: "other",
        name: "Other",
        items: [
            { id: "book", name: "Book" },
            { id: "filter", name: "Filter" },
            { id: "hose", name: "Hose" },
            { id: "ledx_skin_transilluminator", name: "LEDX Skin Transilluminator" },
            { id: "military_cable", name: "Military cable" },
            { id: "military_power_filter", name: "Military power filter" },
            { id: "weight_plate", name: "Weight plate" },
        ],
    },
    {
        id: "special_equipment",
        name: "Special Equipment",
        items: [
            { id: "dumbbell", name: "Dumbbell" },
            { id: "electric_pump", name: "Electric pump" },
            { id: "fp_100_filter_absorber", name: "FP-100 filter absorber" },
            { id: "gas_analyzer", name: "Gas analyzer" },
        ],
    },
];