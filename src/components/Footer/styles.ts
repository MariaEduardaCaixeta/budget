import { spacing } from "@/theme/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: spacing.md,
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondaryButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.xs
    }
});