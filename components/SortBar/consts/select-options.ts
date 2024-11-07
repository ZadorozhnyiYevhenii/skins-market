import type { SelectInputOption } from "~/components/Ui/Select/types/options.interface";
import SvgoArrowDown from '~/assets/icons/arrow-down.svg'
import SvgoArrowUp from '~/assets/icons/arrow-up.svg'
import { SortDirection } from "../enums/sort-direction.enum";
import type { SortBarOption } from "../types/sort-options.interface";

export const sortOptions: SortBarOption[] = [
  {
    label: "Price",
    value: SortDirection.DESC,
    icon: SvgoArrowDown
  },
  {
    label: "Price",
    value: SortDirection.ASC,
    icon: SvgoArrowUp
  },
]