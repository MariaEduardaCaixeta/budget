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
    discountInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.gray[100],
        borderWidth: 1,
        borderColor: colors.gray[300],
        borderRadius: 999,
        paddingVertical: spacing.xxxs,
        paddingHorizontal: spacing.xs,
        marginLeft: spacing.xs,
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
    totalAmount: {
        ...typography.titleLg,
        color: colors.gray[700],
    },
});