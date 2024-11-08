import { CountriesEnum } from "../enums/countries";
import type { Payment } from "../types/payment.interface";

const VISA_MASTERCARD: Payment = {
  type: "cards",
  path: "/allowed_payments_methods/visa_mastercard.png",
  description: "Visa/MasterCard",
};
const PAYPAL: Payment = {
  type: "cards",
  path: "/allowed_payments_methods/paypal.png",
  description: "PayPal",
};
const PAYONEER: Payment = {
  type: "cards",
  path: "/allowed_payments_methods/payoneer.png",
  description: "Payoneer",
};
const BITCOIN: Payment = {
  type: "crypto",
  path: "/allowed_payments_methods/bitcoin.png",
  description: "Bitcoin",
};
const ETHEREUM: Payment = {
  type: "crypto",
  path: "/allowed_payments_methods/ethereum.png",
  description: "Ethereum",
};
const TETHER_TRC_20: Payment = {
  type: "crypto",
  path: "/allowed_payments_methods/tether_trc-20.png",
  description: "Tether TRC-20",
};
const TETHER_ERC_20: Payment = {
  type: "crypto",
  path: "/allowed_payments_methods/tether_erc-20.png",
  description: "Tether ERC-20",
};

export const paymentsMethodsByCountry: Record<CountriesEnum, Payment[]> = {
  [CountriesEnum.USA]: [
    VISA_MASTERCARD,
    PAYPAL,
    PAYONEER,
    BITCOIN,
    TETHER_TRC_20,
    TETHER_ERC_20,
  ],
  [CountriesEnum.PORTUGAL]: [
    VISA_MASTERCARD,
    BITCOIN,
    TETHER_TRC_20,
    TETHER_ERC_20,
  ],
  [CountriesEnum.SPAIN]: [VISA_MASTERCARD, BITCOIN, TETHER_TRC_20],
};
