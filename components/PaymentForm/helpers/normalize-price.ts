import type { Skin } from "~/types/interfaces/skin.interface";
import { COST_FRACTION_DIGITS } from "../consts/cost-fraction-digits";

const getTotalCost = (selectedSkins: Skin[]) =>
  selectedSkins?.reduce((acc, skin) => acc + skin.price, 0);

const getPriceWithDollars = (price: number) =>
  `$${price.toFixed(COST_FRACTION_DIGITS)}`;

export const getTotalSkinsCostWithDollars = (selectedSkins: Skin[]) =>
  getPriceWithDollars(getTotalCost(selectedSkins));
