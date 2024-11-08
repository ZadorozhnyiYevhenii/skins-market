import type { AlertType } from "../types/alert-type.type";
import SvgoAlertWarning from "~/assets/icons/alert-warning.svg";

export const alertIconMap: Record<AlertType, string> = {
  warning: SvgoAlertWarning,
};
