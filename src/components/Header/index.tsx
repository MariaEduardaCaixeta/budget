import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import { PressableProps, View, Text } from "react-native";
import { Button } from "../Button";

type HeaderProps = PressableProps & {
    title: string;
    children?: React.ReactNode;
}

export function Header({ title, children, ...props }: HeaderProps) {
    return (
        <View style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: colors.gray[200],
            borderBottomWidth: 1,
            marginBottom: spacing.lg,
            padding: spacing.lg,
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
                gap: spacing.base,
            }}>
                <Button backgroundColor="transparent" iconName="chevronLeft" iconColor={colors.gray[600]} hasPadding={false} onPress={props.onPress} />
                <Text style={[typography.titleSm]}>{title}</Text>
            </View>
            {children}
        </View>
    )
}