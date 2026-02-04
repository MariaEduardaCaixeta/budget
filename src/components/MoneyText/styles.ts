import { colors } from "@/theme/colors";
import { typography } from "@/theme/typography";
import { StyleSheet } from "react-native";

export const moneyStyles = StyleSheet.create({
    base: {
        color: colors.gray[700],
    },
    currency: {
        ...typography.textXs,
    },
    amountSm: {
        ...typography.textSm,
    },
    amountLg: {
        ...typography.titleLg,
    },
    danger: {
        color: colors.danger.base,
    },
    light: {
        color: colors.gray[600],
    },
    strike: {
        textDecorationLine: "line-through",
    },
})