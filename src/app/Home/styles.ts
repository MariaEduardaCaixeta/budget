import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: spacing.lg,
        gap: spacing.xl
    },
    headerContainer: {
        flexDirection: "row",
        paddingBottom: spacing.lg,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray[200],
    },
    headerTextContainer: {
        flex: 1,
        gap: spacing.xxs
    },
    headerText: {
        color: colors.purple.base
    },
    subHeaderText: {
        color: colors.gray[500]
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: spacing.sm,
    }
});