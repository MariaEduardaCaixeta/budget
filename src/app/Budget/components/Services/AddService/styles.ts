import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: spacing.sm,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: spacing.xs,
    },
    inputContainer: {
        backgroundColor: colors.gray[100],
        borderWidth: 1,
        borderColor: colors.gray[300],
        borderRadius: 999,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
    },
    qntInput: {
        width: 20,
    },
    amountInput: {
        flex: 1,
    }
});