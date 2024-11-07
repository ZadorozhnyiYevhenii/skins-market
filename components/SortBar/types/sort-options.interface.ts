import type { SortDirection } from "../enums/sort-direction.enum";

export interface SortBarOption {
  label: string;
  value: SortDirection;
  icon: string;
}
