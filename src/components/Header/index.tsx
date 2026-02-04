import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { View } from "react-native";

export function Header({ children }: { children: React.ReactNode }) {
    return (
        <View style={{ 
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: spacing.xxxs,
            borderBottomColor: colors.gray[200],
            borderBottomWidth: 1,
            marginBottom: spacing.sm
        }}>
            {children}
        </View>
    )
}