import type { PaymentWithoutPath } from "~/components/PaymentForm/types/payment-without-path.type";

export const getPaymentLabel = (paymentMethod: PaymentWithoutPath | null) => {
  switch (paymentMethod?.type) {
    case 'cards':
      return `Your ${paymentMethod.description} number`;
    case 'onlinePaymentSystems':
      return `Your ${paymentMethod.description} account`;
    case 'crypto':
      return `Your ${paymentMethod.description} wallet`;
  }
}