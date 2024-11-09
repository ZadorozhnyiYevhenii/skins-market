import type { Skin } from "~/types/interfaces/skin.interface";
import { COST_FRACTION_DIGITS } from "../consts/cost-fraction-digits";
import { CurrencyEnum } from "../enums/currency";

export const getSkinsTotalCost = (selectedSkins: Skin[]) =>
  selectedSkins?.reduce((acc, skin) => acc + skin.price, 0);

export const getPriceWithDollars = (price: number) =>
  `${CurrencyEnum.USD}${price.toFixed(COST_FRACTION_DIGITS)}`;
