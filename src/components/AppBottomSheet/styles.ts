import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: spacing.lg,
    },
    title: {
        flex: 1
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: spacing.lg,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray[200],
        paddingBottom: spacing.xl
    },
    footer: {
        borderTopWidth: 1,
        borderTopColor: colors.gray[200],
        padding: spacing.lg,
    }
})