import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: spacing.md,
        backgroundColor: colors.gray[100],
        borderWidth: 1,
        borderColor: colors.gray[200],
        borderRadius: 10,
    },
    header: {
        flexDirection: "row",
        alignItems: "flex-start"
    },
    title: {
        color: colors.gray[700],
        flex: 1,
        flexWrap: 'wrap',
        marginRight: spacing.sm,
        marginBottom: spacing.xs
    },
    subHeaderContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    subHeaderTitle: {
        color: colors.gray[600],
        flex: 1
    },
    price: {
        color: colors.gray[700],
    }
});