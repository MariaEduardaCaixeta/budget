import { moneyStyles } from "@/components/MoneyText/styles";
import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "flex-start",
        padding: spacing.base,
        backgroundColor: colors.gray[100],
        borderRadius: 10,
        borderColor: colors.gray[200],
        borderWidth: 1,
    },
    iconContainer: {
        padding: spacing.xs,
        borderRadius: 8,
        backgroundColor: colors.purple.light,
        marginRight: spacing.md,
    },
    content: { flex: 1 },
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: spacing.xxxs,
    },
    label: {
        ...typography.textSm,
        color: colors.gray[600],
        flex: 1,
        paddingRight: spacing.sm,
    },
    right: {
        flexShrink: 0,
        alignItems: "flex-end",
    },
    top: {
        borderBottomColor: colors.gray[200],
        borderBottomWidth: 1,
        paddingBottom: spacing.xs,
    },
    totalRow: {
        paddingBottom: -spacing.xxxs,
    },
    totalLabel: {
        ...typography.titleSm,
        color: colors.gray[700],
        flex: 1
    },
});