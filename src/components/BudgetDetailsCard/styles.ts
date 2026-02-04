import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: colors.gray[200],
        borderRadius: 10
    },
    cardLabelContainer: {
        flexDirection: 'row',
        gap: spacing.xxs,
        borderBottomColor: colors.gray[200],
        borderBottomWidth: 1,
        padding: spacing.sm,
    },
    labelText: {
        color: colors.gray[500]
    }
});