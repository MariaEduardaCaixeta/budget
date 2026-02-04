import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scrollViewContent: {
        paddingBottom: spacing.xxxl
    },
    budgetDetailsContainer: {
        paddingHorizontal: spacing.lg,
        gap: spacing.lg,
    },
    footerContainer: {
        padding: spacing.lg,
        borderTopColor: colors.gray[200],
        borderTopWidth: 1
    }
});