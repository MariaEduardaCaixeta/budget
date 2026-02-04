import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
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
        color: colors.gray[700]
    },
    description: {
        color: colors.gray[600],
        marginTop: spacing.xxxs
    },
    right: {
        alignItems: "flex-end",
        marginRight: spacing.md,
    },
    currency: { 
        color: colors.gray[700] 
    },
    amount: { 
        color: colors.gray[700] 
    },
    qty: { 
        color: colors.gray[600], 
        marginTop: spacing.xxxs 
    },
});