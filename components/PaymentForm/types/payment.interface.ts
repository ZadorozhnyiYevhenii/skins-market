import type { PaymentMethodEnum } from "../enums/payment-method";
import type { PaymentType } from "./payment-type.type";

export interface Payment {
  type: PaymentType;
  path: string;
  description: PaymentMethodEnum;
}
