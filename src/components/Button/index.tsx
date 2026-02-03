import { Pressable, PressableProps, View, Text, TextStyle } from "react-native";
import { Icon, IconProps } from "../icons";
import { styles } from "./styles";
import { typography } from "@/theme/typography";

type Props = PressableProps & Partial<IconProps> & {
    label: string;
    backgroundColor?: string;
    labelColor?: string;
}

export function Button({ label, backgroundColor, labelColor, ...rest }: Props) {
    return (
        <Pressable
            {...rest}
            style={({ pressed }) => [
                pressed && { opacity: 0.5 },
            ]}>
            <View style={[
                styles.container,
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
                <Text style={[typography.titleSm as TextStyle, { color: labelColor || '#FFF' }]}>{label}</Text>
            </View>
        </Pressable>
    )
}