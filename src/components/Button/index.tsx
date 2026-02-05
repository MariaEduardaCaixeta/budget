import { Pressable, PressableProps, View, Text, TextStyle } from "react-native";
import { Icon, IconProps } from "../icons";
import { styles } from "./styles";
import { typography } from "@/theme/typography";
import { spacing } from "@/theme/spacing";

export type ButtonProps = PressableProps & Partial<IconProps> & {
    label?: string;
    backgroundColor?: string;
    labelColor?: string;
    hasPadding?: boolean;
}

export function Button({ label, backgroundColor, labelColor, hasPadding = true, ...rest }: ButtonProps) {
    return (
        <Pressable
            {...rest}
            style={({ pressed }) => [
                pressed && { opacity: 0.5 },
            ]}>
            <View style={[
                styles.container,
                hasPadding && { paddingVertical: spacing.sm, paddingHorizontal: spacing.lg },
                backgroundColor && { backgroundColor },
                !backgroundColor && styles.outlineButton
            ]}>
                {
                    rest.iconName && (
                        <Icon
                            iconName={rest.iconName}
                            iconSize={rest.iconSize}
                            iconColor={rest.iconColor}
                        />
                    )
                }
                {label && <Text style={[typography.titleSm , { color: labelColor || '#FFF' }]}>{label}</Text>}
            </View>
        </Pressable>
    )
}