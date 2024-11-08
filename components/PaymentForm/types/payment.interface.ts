import type { PaymentType } from "./payment-type.type";

export interface Payment {
  type: PaymentType;
  path: string;
  description: string;
}
