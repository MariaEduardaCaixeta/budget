import { spacing } from "@/theme/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: spacing.xs,
        paddingVertical: spacing.xxxs,
        borderRadius: 6,
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: spacing.xxs
    }
});