import { formatNumber } from "@/utils/formatters";
import { moneyStyles } from "./styles";
import { Text } from "react-native";
import { typography } from "@/theme/typography";

type MoneyVariant = "default" | "danger";

export function Money({
    currency = "R$",
    amount,
    amountStyle,
    strike,
    prefix,
    variant = "default",
}: {
    currency?: string;
    amount: number;
    amountStyle?: any;
    strike?: boolean;
    prefix?: string;
    variant?: MoneyVariant;
}) {
    const colorStyle = variant === "danger" ? moneyStyles.danger : moneyStyles.base;

    return (
        <Text style={[colorStyle, strike && moneyStyles.strike]}>
            {!!prefix && <Text style={[moneyStyles.currency, colorStyle]}>{prefix}</Text>}
            <Text style={[moneyStyles.currency, colorStyle]}>{currency} </Text>
            <Text style={[typography.textSm, amountStyle]}>{formatNumber(amount)}</Text>
        </Text>
    );
}