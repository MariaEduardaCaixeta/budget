import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: spacing.lg,
    },
    left: {
        flex: 1,
        paddingRight: spacing.md,
    },
    title: {
        ...typography.titleSm,
        color: colors.gray[700],
    },
    description: {
        ...typography.textXs,
        color: colors.gray[600],
        marginTop: spacing.xxxs,
    },
    right: {
        alignItems: "flex-end",
        marginRight: spacing.md,
    },
    qty: {
        ...typography.textXs,
        color: colors.gray[600],
        marginTop: spacing.xxxs,
    },
});