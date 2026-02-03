import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    box: {
        width: 20,
        height: 20,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: colors.gray[400],
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        marginRight: spacing.sm,
    },
    boxChecked: {
        backgroundColor: colors.purple.base,
        borderColor: colors.purple.base,
    },
})