import { SortDirection } from "~/components/SortBar/enums/sort-direction.enum";
import type { Skin } from "~/types/interfaces/skin.interface";

export const sortSkinsList = (
  skins: Skin[],
  sortDirection: SortDirection | null
) => {
  if (!sortDirection) {
    return skins;
  }

  return skins.toSorted((a, b) => {
    if (sortDirection === SortDirection.ASC) {
      return a.price - b.price;
    }

    return b.price - a.price;
  });
};
