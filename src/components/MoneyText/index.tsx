import { formatNumber } from "@/utils/formatters";
import { moneyStyles } from "./styles";
import { Text } from "react-native";

type MoneyTone = "default" | "light" | "danger" | "success";
type MoneySize = "xs" | "sm" | "md" | "lg";

type MoneyPartsStyle = {
  currency?: any;
  amount?: any;
  prefix?: any;
};

const toneStyleMap = {
  default: moneyStyles.base,
  light: moneyStyles.light,
  danger: moneyStyles.danger,
  success: moneyStyles.success,
} as const;

export function Money({
  currency = "R$",
  amount,
  strike,
  prefix,
  tone = "default",
  textStyle,        // aplica em tudo (quando quer igual)
  partsStyle,       // override fino (quando quer diferente)
}: {
  currency?: string;
  amount: number;
  strike?: boolean;
  prefix?: string;
  tone?: MoneyTone;
  textStyle?: any;
  partsStyle?: MoneyPartsStyle;
}) {
  const toneStyle = toneStyleMap[tone];

  const currencyText = [
    toneStyle,
    textStyle,
    partsStyle?.currency,
  ];

  const amountText = [
    toneStyle,
    textStyle,
    partsStyle?.amount,
  ];

  const prefixText = [
    toneStyle,
    textStyle,
    partsStyle?.prefix,
  ];

  return (
    <Text style={[toneStyle, strike && moneyStyles.strike, textStyle]}>
      {!!prefix && <Text style={prefixText}>{prefix}</Text>}
      <Text style={currencyText}>{currency} </Text>
      <Text style={amountText}>{formatNumber(amount, 2)}</Text>
    </Text>
  );
}