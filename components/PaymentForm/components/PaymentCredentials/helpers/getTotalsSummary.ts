import type { PaymentWithoutPath } from "~/components/PaymentForm/types/payment-without-path.type";
import type { SummaryDetailsOptions } from "../../SummaryDetails/types/summary-details-options.interface";
import { CurrencyEnum } from "~/components/PaymentForm/enums/currency";
import { COMMISION } from "../consts/commission";
import { getPriceWithDollars } from "~/components/PaymentForm/helpers/normalize-price";

export const getTotalsSummary = (
  paymentMethod: PaymentWithoutPath | null,
  amount: number
): SummaryDetailsOptions[] => {
  if (paymentMethod?.type === "cards" || paymentMethod?.type === "onlinePaymentSystems") {
    return [
      {
        title: "transaction comission",
        value: `${normalizePercentage(COMMISION)}%`,
      },
      {
        title: "You receive",
        value: `${getPriceWithDollars(getAmountWithComission(amount))}`,
      },
    ];
  }

  return [
    {
      title: "transaction comission",
      value: `${normalizePercentage(COMMISION)}%`,
    },
    {
      title: "You receive",
      value: `${getPriceWithDollars(getAmountWithComission(amount))}`,
    },
    {
      title: "Crypto amount",
      value: `${getCryptoAmount(amount)} ${CurrencyEnum.USDT}`,
    },
  ];
};

const getAmountWithComission = (amount: number) => {
  return amount - amount * COMMISION;
};

const getCryptoAmount = (amount: number) => {
  return amount - 10;
};

const normalizePercentage = (percentage: number) => percentage * 100;
