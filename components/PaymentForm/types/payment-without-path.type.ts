import type { Payment } from "./payment.interface";

export type PaymentWithoutPath = Omit<Payment, "path">;
