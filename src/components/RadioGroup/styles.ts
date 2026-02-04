import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    optionContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: spacing.sm,
    },
    radioCircle: {
        width: 20,
        height: 20,
        borderRadius: 999,
        borderWidth: 2,
        borderColor: colors.gray[400],
        alignItems: "center",
        justifyContent: "center",
        marginRight: spacing.sm,
    },
    selectedRadioCircle: {
        width: 10,
        height: 10,
        borderRadius: 999,
        backgroundColor: colors.purple.base,
    },
    optionLabel: {
        color: colors.gray[600]
    }
    ,
    columnsWrapper: {
        flexDirection: "row",
        alignItems: "flex-start",
    },
    column: {
        flex: 1,
    },
    columnSpacing: {
        paddingRight: spacing.md,
    }
})