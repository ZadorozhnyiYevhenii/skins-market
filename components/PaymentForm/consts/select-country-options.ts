import UsaIcon from "~/assets/icons/usa.svg";
import PortugalIcon from "~/assets/icons/pt.svg";
import SpainIcon from "~/assets/icons/sp.svg";
import { CountriesEnum } from "../enums/countries";
import type { SelectInputOption } from "~/components/Ui/UiSelect/types/options.interface";

export const countryOptions: SelectInputOption[] = [
  {
    label: "United States",
    value: CountriesEnum.USA,
    icon: UsaIcon,
  },
  {
    label: "Portuguese",
    value: CountriesEnum.PORTUGAL,
    icon: PortugalIcon,
  },
  {
    label: "Spain",
    value: CountriesEnum.SPAIN,
    icon: SpainIcon,
  },
];
