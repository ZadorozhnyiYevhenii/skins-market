import type { PaymentTransferStatus } from "../../PaymentTransfer/types/payment-transfer-status.type";

export const generateRandomResult = (): PaymentTransferStatus =>
  Math.random() < 0.5 ? "success" : "error";
