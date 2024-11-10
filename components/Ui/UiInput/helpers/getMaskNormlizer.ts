import type { Mask } from "../../UiSelect/types/mask.type";

export const getMaskNormalizer = (value: string, mask: Mask | undefined) => {
  if (!mask) return value;

  switch (mask) {
    case "cards":
      return formatCardNumber(value);
    default:
      return value;
  }
};

const formatCardNumber = (value: string) => {
  const _value = value.replace(/\D/g, "");

  const part1 = _value.slice(0, 4);
  const part2 = _value.slice(4, 8);
  const part3 = _value.slice(8, 12);
  const part4 = _value.slice(12, 16);

  let formatted = "";

  if (part1) formatted = `${part1}`;
  if (part2) formatted += ` ${part2}`;
  if (part3) formatted += ` ${part3}`;
  if (part4) formatted += ` ${part4}`;

  return formatted;
};
