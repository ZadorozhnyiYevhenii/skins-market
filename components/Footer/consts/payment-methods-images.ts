import VISA from "/images/payment_methods/visa.png";
import MASTER_CARD from "/images/payment_methods/master-card.png";
import SEPA from "/images/payment_methods/sepa.png";
import SKRILL from "/images/payment_methods/skrill.png";
import BITCOIN from "/images/payment_methods/bitcoin.png";
import TETHER from "/images/payment_methods/tether.png";
import ETHEREUM from "/images/payment_methods/ethereum.png";

export const paymentMethods: Array<{ description: string; path: string }> = [
  { path: VISA, description: "Visa" },
  { path: MASTER_CARD, description: "MasterCard" },
  { path: SEPA, description: "SEPA" },
  { path: SKRILL, description: "Skrill" },
  { path: BITCOIN, description: "Bitcoin" },
  { path: TETHER, description: "Tether" },
  { path: ETHEREUM, description: "Ethereum" },
];
