import { buildingMaterials } from "./buildingMaterials";
import { electronics } from "./electronics";
import { energyElements } from "./energyElements";
import { flammableMaterials } from "./flammableMaterials";
import { householdMaterials } from "./householdMaterials";
import { infoItems } from "./infoItems";
import { medicalSupplies } from "./medicalSupplies";
import { others } from "./others";
import { specialEquipment } from "./specialEquipment";
import { tools } from "./tools";
import { valuables } from "./valuables";

export const categories = {
    buildingMaterials,
    electronics,
    energyElements,
    flammableMaterials,
    householdMaterials,
    infoItems,
    medicalSupplies,
    others,
    specialEquipment,
    tools,
    valuables,
}

export type { Item } from "./types"
