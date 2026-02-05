import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray[100],
        borderRadius: 10,
        borderColor: colors.gray[200],
        borderWidth: 1,
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: spacing.base,
        padding: spacing.base,
        borderBottomColor: colors.gray[300],
        borderBottomWidth: 1,
    },
    iconContainer: {
        padding: spacing.xs,
        borderRadius: 8,
        backgroundColor: colors.purple.light
    },
    headerText: {
        ...typography.titleLg,
        color: colors.gray[700],
        flex: 1,
    },
    contentContainer: {
        padding: spacing.base,
        gap: spacing.sm,
    },
    contentInfoColumn: {
        flexDirection: "column",
        gap: spacing.xxxs
    },
    contentInfoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    contentInfoTitle: {
        ...typography.textXs,
        color: colors.gray[600],
    },
    contentInfoText: {
        ...typography.textSm,
        color: colors.gray[700],
    }
});