import { PaymentMethodEnum } from "~/components/PaymentForm/enums/payment-method";

const CARD_NUMBER_REGEXP = /^(?:\d{4}[-\s]?){3}\d{4}$|^\d{13,19}$/;
const EMAIL_REGEXP =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const BITCOIN_REGEXP =
  /^(1[a-km-zA-HJ-NP-Z1-9]{25,34}|3[a-km-zA-HJ-NP-Z1-9]{25,34}|bc1[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{39,59})$/;
const ETHEREUM_REGEXP = /^0x[a-fA-F0-9]{40}$/;
const TETHER_ERC20_REGEXP = /^0x[a-fA-F0-9]{40}$/;
const TETHER_TRC20_REGEXP = /^T[a-zA-Z0-9]{33}$/;

export const validationByPaymentMethodMap: Record<PaymentMethodEnum, RegExp> = {
  [PaymentMethodEnum.Card]: CARD_NUMBER_REGEXP,
  [PaymentMethodEnum.PayPal]: EMAIL_REGEXP,
  [PaymentMethodEnum.Payoneer]: EMAIL_REGEXP,
  [PaymentMethodEnum.Bitcoin]: BITCOIN_REGEXP,
  [PaymentMethodEnum.Ethereum]: ETHEREUM_REGEXP,
  [PaymentMethodEnum.TetherERC20]: TETHER_ERC20_REGEXP,
  [PaymentMethodEnum.TetherTRC20]: TETHER_TRC20_REGEXP,
};
