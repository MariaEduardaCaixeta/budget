import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        padding: spacing.lg,
        flexDirection: "row",
    },
    left: {
        flex: 1,
    },
    right: {
        alignItems: "flex-end",
    },
    rowInline: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: spacing.sm,
    },
    subtotalRight: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: spacing.sm,
    },

    total: {
        flexDirection: "row",
        borderTopColor: colors.gray[200],
        borderTopWidth: 1,
        marginTop: spacing.sm,
        alignItems: "center",
        padding: spacing.lg,
        backgroundColor: colors.gray[100],
    },
    totalLabel: {
        ...typography.titleSm,
        color: colors.gray[700],
        flex: 1,
    },
    totalAmounts: {
        alignItems: "flex-end",
    },

    label: {
        ...typography.textSm,
        color: colors.gray[700],
    },
    meta: {
        ...typography.textXs,
        color: colors.gray[600],
        marginRight: spacing.sm,
    },
    valueLight: {
        ...typography.textSm,
        color: colors.gray[600],
        marginLeft: spacing.xs,
    },

    danger: {
        color: colors.danger.base,
    },
    light: {
        color: colors.gray[600],
    },
    totalAmount: {
        ...typography.titleLg,
        color: colors.gray[700],
    },
});