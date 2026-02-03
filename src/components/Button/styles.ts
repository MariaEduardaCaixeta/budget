import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: spacing.base,
        borderRadius: 999,
        gap: spacing.xs,
    },
    outlineButton : {
        borderWidth: 1,
        borderColor: colors.gray[300]
    }
});