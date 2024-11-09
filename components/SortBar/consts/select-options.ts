import ArrowDown from "~/assets/icons/arrow-down.svg";
import ArrowUp from "~/assets/icons/arrow-up.svg";
import { SortDirection } from "../enums/sort-direction.enum";
import type { SortBarOption } from "../types/sort-options.interface";

export const sortOptions: SortBarOption[] = [
  {
    label: "Price",
    value: SortDirection.DESC,
    icon: ArrowDown,
  },
  {
    label: "Price",
    value: SortDirection.ASC,
    icon: ArrowUp,
  },
];
