import type { PaymentWithoutPath } from "~/components/PaymentForm/types/payment-without-path.type";

export const getInvalidMessage = (paymentMethod: PaymentWithoutPath | null) => {
  switch (paymentMethod?.type) {
    case "cards":
      return `Enter valid ${paymentMethod.description.toLowerCase()} number`;
    case "onlinePaymentSystems":
      return `Enter valid ${paymentMethod.description.toLowerCase()} account`;
    case "crypto":
      return `Enter valid ${paymentMethod.description.toLowerCase()} wallet`;
  }
};
