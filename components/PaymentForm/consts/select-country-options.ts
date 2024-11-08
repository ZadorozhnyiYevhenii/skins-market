import SvgoEs from "~/assets/icons/es.svg"
import type { SelectInputOption } from "~/components/Ui/Select/types/options.interface";
import { CountriesEnum } from "../enums/countries";

export const countryOptions: SelectInputOption[] = [
  {
    value: CountriesEnum.USA,
    label: "United States",
    icon: SvgoEs
  },
  {
    value: CountriesEnum.PORTUGAL,
    label: "Portuguese",
    icon: SvgoEs
  },
  {
    value: CountriesEnum.SPAIN,
    label: "Spain",
    icon: SvgoEs
  },
];
